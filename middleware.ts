// Password gate for /private (Vercel Routing Middleware, runs before any file is served).
// Everything under /private, including its images in public/private, needs the access cookie.
// The cookie holds an HMAC derived from PORTFOLIO_PASSWORD, so changing the password signs everyone out.
// With no PORTFOLIO_PASSWORD set, /private stays locked for everyone.
import { next } from '@vercel/functions';

export const config = {
  matcher: ['/private', '/private/:path*', '/unlock'],
};

const COOKIE = 'pf_access';
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days
const enc = new TextEncoder();

async function accessToken(password: string): Promise<string> {
  const key = await crypto.subtle.importKey('raw', enc.encode(password), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, enc.encode('portfolio-private-access-v1')));
  let bin = '';
  for (const b of sig) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

// Constant-time comparison for equal-length strings.
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function readCookie(request: Request, name: string): string | undefined {
  const header = request.headers.get('cookie') ?? '';
  for (const part of header.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return v.join('=');
  }
  return undefined;
}

// Only ever send people back into /private, never off-site.
function safeDestination(value: unknown): string {
  return typeof value === 'string' && /^\/private(\/[\w\-./]*)?$/.test(value) && !value.includes('..') ? value : '/private';
}

function redirect(url: URL, extra: Record<string, string> = {}): Response {
  return new Response(null, {
    status: 303,
    headers: { Location: url.toString(), 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow', ...extra },
  });
}

export default async function middleware(request: Request): Promise<Response> {
  const url = new URL(request.url);
  const password = process.env.PORTFOLIO_PASSWORD;

  if (url.pathname === '/unlock') {
    if (request.method !== 'POST') return redirect(new URL('/access', url));
    const form = await request.formData().catch(() => null);
    const given = String(form?.get('password') ?? '');
    const destination = safeDestination(form?.get('next'));
    if (password && given && safeEqual(given, password)) {
      const token = await accessToken(password);
      return redirect(new URL(destination, url), {
        'Set-Cookie': `${COOKIE}=${token}; Path=/private; Max-Age=${MAX_AGE}; HttpOnly; Secure; SameSite=Lax`,
      });
    }
    const back = new URL('/access', url);
    back.searchParams.set('next', destination);
    back.searchParams.set('error', '1');
    return redirect(back);
  }

  // Any /private path
  if (password) {
    const cookie = readCookie(request, COOKIE);
    if (cookie && safeEqual(cookie, await accessToken(password))) {
      return next({ headers: { 'X-Robots-Tag': 'noindex, nofollow', 'Cache-Control': 'private, no-store' } });
    }
  }
  const gate = new URL('/access', url);
  gate.searchParams.set('next', url.pathname);
  return redirect(gate);
}
