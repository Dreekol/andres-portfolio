// Shared cover kit for case-study top images.
// A scene is an HTML file that loads this script, sets the client color, draws into #art
// with these helpers, and calls Cover.done(). render.mjs turns every scene into a JPEG.
// The pattern (see README.md): one canvas size, a dotted brand-tint background, white cards
// with one soft shadow, connectors in the brand color, a left-to-right story, no text unless
// the subject is type, and the artwork fitted to the frame with even margins.
(function () {
  const W = 1600, H = 840, NS = 'http://www.w3.org/2000/svg';

  const hex = (s) => [1, 3, 5].map((i) => parseInt(s.slice(i, i + 2), 16));
  const toHex = (a) => '#' + a.map((v) => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
  const mix = (a, b, t) => { const A = hex(a), B = hex(b); return toHex(A.map((v, i) => v + (B[i] - v) * t)); };

  // Material icons (outlined, 24px grid). Apache 2.0.
  const ICONS = {
    down: 'M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z',
    up: 'M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z',
    check: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
    search: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
    home: 'M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z',
    mail: 'M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z',
    heart: 'M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z',
    info: 'M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
    phone: 'M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z',
    clock: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z',
    bell: 'M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z',
    lock: 'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z',
    person: 'M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z',
    star: 'M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z',
    shield: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z',
    truck: 'M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm-.5 1.5l1.96 2.5H17V9.5h2.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9H8.22zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z',
    chart: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z',
    folder: 'M9.17 6l2 2H20v10H4V6h5.17M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z',
    tag: 'M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM13 20.01L4 11V4h7v-.01l9 9-7 7.02zM6.5 5C5.67 5 5 5.67 5 6.5S5.67 8 6.5 8 8 7.33 8 6.5 7.33 5 6.5 5z',
    edit: 'M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z',
    gift: 'M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1-.4.4 2.36 1 1.4L16.38 12 18 10.83 15.92 8H20v6z',
    calendar: 'M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2zm-7 5h5v5h-5z',
    drop: 'M12 2c-5.33 4.55-8 8.48-8 11.8 0 4.98 3.8 8.2 8 8.2s8-3.22 8-8.2c0-3.32-2.67-7.25-8-11.8zm0 18c-3.35 0-6-2.57-6-6.2 0-2.34 1.95-5.44 6-9.14 4.05 3.7 6 6.79 6 9.14 0 3.63-2.65 6.2-6 6.2z',
    pin: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z',
    access: 'M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z',
    close: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    download: 'M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z',
    warning: 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
    doc: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
    book: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z',
    bulb: 'M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z',
    chat: 'M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z',
    print: 'M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z',
    apps: 'M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z',
    tune: 'M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z',
    group: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z',
    hub: 'M12 2L2 7l10 5 10-5-10-5zm0 13L4.5 11.25 2 12.5l10 5 10-5-2.5-1.25L12 15zm0 5l-7.5-3.75L2 17.5 12 22.5l10-5-2.5-1.25L12 20z',
  };

  const C = {
    W, H, mix, ICONS,
    color: '#333333', tint: '#EEEEEE',
    ink: '#1F2A24', grey: '#C9D3CC', grey2: '#E3E8E5', mute: '#9AA79F',
    // Set the client color; tint and the soft accents derive from it.
    setColor(c, opts = {}) {
      C.color = c; C.tint = opts.tint || mix(c, '#ffffff', 0.9);
      C.soft = opts.soft || mix(c, '#ffffff', 0.72);
      C.mid = opts.mid || mix(c, '#ffffff', 0.4);
      C.dark = opts.dark || mix(c, '#000000', 0.35);
      C.ink = opts.ink || mix(c, '#141414', 0.82);
      C.grey = opts.grey || mix(c, '#C9CDCB', 0.88);
      C.grey2 = opts.grey2 || mix(c, '#E4E7E5', 0.93);
      C.accent2 = opts.accent2 || '#F2B12A';
      return C;
    },
    // ---------- primitives (each returns an SVG string) ----------
    card: (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 20}" fill="${o.fill || '#fff'}"${o.stroke ? ` stroke="${o.stroke}" stroke-width="${o.sw || 3}"` : ''}${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.opacity ? ` opacity="${o.opacity}"` : ''} ${o.shadow === false ? '' : 'filter="url(#sh)"'}/>`,
    rect: (x, y, w, h, fill, r = 0, extra = '') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" ${extra}/>`,
    bar: (x, y, w, h = 12, fill) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}" fill="${fill || C.grey}"/>`,
    circle: (cx, cy, r, fill, extra = '') => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" ${extra}/>`,
    line: (d, o = {}) => `<path d="${d}" fill="none" stroke="${o.color || C.color}" stroke-width="${o.w || 4}" stroke-linecap="round" stroke-linejoin="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.opacity ? ` opacity="${o.opacity}"` : ''}/>`,
    arrow: (d, o = {}) => `<path d="${d}" fill="none" stroke="${o.color || C.color}" stroke-width="${o.w || 4}" stroke-linecap="round"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}${o.opacity ? ` opacity="${o.opacity}"` : ''} marker-end="url(#ah)"/>`,
    icon: (name, x, y, size = 24, fill) => `<g transform="translate(${x} ${y}) scale(${size / 24})" fill="${fill || C.ink}"><path d="${ICONS[name]}"/></g>`,
    // icon centered in a filled circle
    badge: (name, cx, cy, r, fill, iconFill = '#fff') => C.circle(cx, cy, r, fill, r > 30 ? 'filter="url(#sh2)"' : '') + C.icon(name, cx - r * 0.55, cy - r * 0.55, r * 1.1, iconFill),
    avatar: (cx, cy, r, fill) => `${C.circle(cx, cy, r, fill || C.soft)}<circle cx="${cx}" cy="${cy - r * 0.18}" r="${r * 0.34}" fill="#fff" opacity=".9"/><path d="M${cx - r * 0.6} ${cy + r * 0.62} C ${cx - r * 0.5} ${cy + r * 0.12}, ${cx + r * 0.5} ${cy + r * 0.12}, ${cx + r * 0.6} ${cy + r * 0.62}" fill="#fff" opacity=".9"/>`,
    pill: (x, y, w, h, fill, label) => C.rect(x, y, w, h, fill, h / 2) + (label ? C.bar(x + h * 0.6, y + h / 2 - 5, w - h * 1.2, 10, label) : ''),
    // a colored header band on top of a card (rounded top corners only)
    head: (x, y, w, h, fill, r = 20) => C.rect(x, y, w, h, fill, r) + C.rect(x, y + h - r, w, r, fill),
    // progress ring, value 0..1
    ring: (cx, cy, r, v, fill, track, sw = 12) => { const L = 2 * Math.PI * r; return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${track || C.grey2}" stroke-width="${sw}"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${fill || C.color}" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${L * v} ${L}" transform="rotate(-90 ${cx} ${cy})"/>`; },
    // a text-like paragraph of bars
    lines: (x, y, w, n = 3, gap = 18, h = 9, fill) => Array.from({ length: n }, (_, i) => C.bar(x, y + i * gap, i === n - 1 ? w * 0.62 : w * (0.85 + 0.15 * ((i * 7) % 3) / 2), h, fill || C.grey2)).join(''),
    sticky: (x, y, s, fill, rot = 0) => `<g transform="rotate(${rot} ${x + s / 2} ${y + s / 2})"><rect x="${x}" y="${y}" width="${s}" height="${s}" rx="4" fill="${fill}" filter="url(#sh2)"/>${C.bar(x + s * 0.14, y + s * 0.24, s * 0.66, 7, 'rgba(0,0,0,.18)')}${C.bar(x + s * 0.14, y + s * 0.42, s * 0.5, 7, 'rgba(0,0,0,.14)')}</g>`,
    check: (x, y, s, on = true, fill) => (on ? C.rect(x, y, s, s, fill || C.color, 5) + `<path d="M${x + s * 0.22} ${y + s * 0.52} l${s * 0.2} ${s * 0.2} l${s * 0.38} -${s * 0.42}" fill="none" stroke="#fff" stroke-width="${s * 0.14}" stroke-linecap="round" stroke-linejoin="round"/>` : `<rect x="${x}" y="${y}" width="${s}" height="${s}" rx="5" fill="#fff" stroke="${C.grey}" stroke-width="2.5"/>`),
    // vertical bar chart
    bars: (x, y, w, h, vals, fill) => { const n = vals.length, g = w / n; return vals.map((v, i) => C.rect(x + i * g + g * 0.18, y + h - h * v, g * 0.64, h * v, Array.isArray(fill) ? fill[i % fill.length] : (fill || C.color), 5)).join(''); },
    // a wireframe app window. kind: table | form | dashboard | doc | blank
    screen(x, y, w, h, o = {}) {
      const k = o.kind || 'table', side = o.side ?? true, sw = side ? Math.max(48, w * 0.13) : 0;
      let s = C.card(x, y, w, h, { r: o.r ?? 18 });
      s += `<clipPath id="cl${x}_${y}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r ?? 18}"/></clipPath><g clip-path="url(#cl${x}_${y})">`;
      s += C.rect(x, y, w, 34, o.top || C.grey2) + C.circle(x + 20, y + 17, 5, '#fff') + C.circle(x + 36, y + 17, 5, '#fff') + C.circle(x + 52, y + 17, 5, '#fff');
      if (side) { s += C.rect(x, y + 34, sw, h - 34, o.sideFill || C.color); for (let i = 0; i < 4; i++) s += C.rect(x + sw * 0.28, y + 64 + i * 46, sw * 0.44, sw * 0.44 * 0.6, i === 0 ? '#fff' : 'rgba(255,255,255,.45)', 4); }
      const ix = x + sw + 24, iw = w - sw - 48; let iy = y + 56;
      s += C.bar(ix, iy, iw * 0.34, 16, C.ink); iy += 38;
      if (k === 'table') { s += C.rect(ix, iy, iw, 30, C.grey2, 6); iy += 44; const rows = o.rows || Math.floor((y + h - iy - 16) / 30); for (let r = 0; r < rows; r++) { s += C.bar(ix + 10, iy + r * 30, iw * 0.26, 9, C.grey) + C.bar(ix + iw * 0.36, iy + r * 30, iw * 0.18, 9, C.grey2) + C.bar(ix + iw * 0.6, iy + r * 30, iw * 0.14, 9, C.grey2) + (o.tags ? C.pill(ix + iw * 0.8, iy + r * 30 - 6, iw * 0.16, 20, o.tags[r % o.tags.length]) : C.bar(ix + iw * 0.8, iy + r * 30, iw * 0.12, 9, C.grey2)); } }
      if (k === 'form') { const cols = o.cols || 2, fw = (iw - (cols - 1) * 18) / cols, rows = o.rows || Math.floor((y + h - iy - 70) / 62); for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) { s += C.bar(ix + c * (fw + 18), iy + r * 62, fw * 0.4, 8, C.grey) + `<rect x="${ix + c * (fw + 18)}" y="${iy + r * 62 + 16}" width="${fw}" height="30" rx="6" fill="#fff" stroke="${C.grey}" stroke-width="2"/>`; } s += C.pill(ix + iw - 120, y + h - 54, 120, 34, C.color, '#fff'); }
      if (k === 'dashboard') { const cw = (iw - 36) / 3; for (let c = 0; c < 3; c++) { s += C.rect(ix + c * (cw + 18), iy, cw, 76, C.grey2, 10) + C.bar(ix + c * (cw + 18) + 14, iy + 16, cw * 0.4, 8, C.grey) + C.bar(ix + c * (cw + 18) + 14, iy + 38, cw * 0.55, 18, c === 0 ? C.color : C.ink); } iy += 96; s += C.rect(ix, iy, iw, y + h - iy - 22, C.grey2, 10) + C.bars(ix + 20, iy + 20, iw - 40, y + h - iy - 64, o.vals || [0.4, 0.62, 0.5, 0.78, 0.66, 0.9, 0.72], o.barFill || C.color); }
      if (k === 'doc') { s += C.lines(ix, iy, iw, o.rows || 8, 22, 9); }
      return s + '</g>';
    },
    // a browser window with an image (live screenshot) inside
    browser(x, y, w, src, o = {}) {
      const ratio = o.ratio || 0.625, bar = 40, h = w * ratio;
      return `<g filter="url(#shBig)"><rect x="${x}" y="${y}" width="${w}" height="${h + bar}" rx="16" fill="#fff"/></g>
        <clipPath id="br${x}"><rect x="${x}" y="${y}" width="${w}" height="${h + bar}" rx="16"/></clipPath>
        <g clip-path="url(#br${x})"><rect x="${x}" y="${y}" width="${w}" height="${bar}" fill="#F4F6F5"/>
        <rect x="${x}" y="${y + bar - 1}" width="${w}" height="1" fill="#E3E8E5"/>
        ${C.circle(x + 22, y + 20, 5.5, '#D5DBD8')}${C.circle(x + 40, y + 20, 5.5, '#D5DBD8')}${C.circle(x + 58, y + 20, 5.5, '#D5DBD8')}
        <rect x="${x + 86}" y="${y + 9}" width="${Math.min(300, w * 0.3)}" height="22" rx="11" fill="#fff" stroke="#E1E7E3"/>
        ${o.url ? `<text x="${x + 98}" y="${y + 24.5}" font-family="system-ui,-apple-system,Segoe UI,sans-serif" font-size="12" fill="#5F6B64">${o.url}</text>` : ''}
        <image href="${src}" x="${x}" y="${y + bar}" width="${w}" height="${h}" preserveAspectRatio="xMidYMin slice"/></g>`;
    },
    // a phone with an image (or a wireframe if src is omitted)
    phone(x, y, w, src, o = {}) {
      const h = w * (o.ratio || 2.05), pad = w * 0.04, r = w * 0.15;
      return `<g filter="url(#shBig)"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="#111"/></g>
        <clipPath id="ph${x}"><rect x="${x + pad}" y="${y + pad}" width="${w - pad * 2}" height="${h - pad * 2}" rx="${r - pad}"/></clipPath>
        <g clip-path="url(#ph${x})">${src ? `<image href="${src}" x="${x + pad}" y="${y + pad}" width="${w - pad * 2}" height="${h - pad * 2}" preserveAspectRatio="xMidYMin slice"/>` : `<rect x="${x + pad}" y="${y + pad}" width="${w - pad * 2}" height="${h - pad * 2}" fill="#fff"/>${o.inner || ''}`}</g>`;
    },
  };

  function defs() {
    return `<defs>
      <pattern id="dots" width="28" height="28" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.6" fill="${C.color}" opacity=".10"/></pattern>
      <filter id="sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="${C.dark}" flood-opacity=".16"/></filter>
      <filter id="sh2" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#000" flood-opacity=".14"/></filter>
      <filter id="shBig" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="24" stdDeviation="26" flood-color="${C.dark}" flood-opacity=".30"/></filter>
      <marker id="ah" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="${C.color}"/></marker>
    </defs>`;
  }

  // Draw the scene: art is an SVG string. Options: margin [x, y] for fitting, fit:false to skip.
  C.draw = function (art, o = {}) {
    const svg = document.getElementById('c') || document.body.appendChild(document.createElementNS(NS, 'svg'));
    svg.id = 'c'; svg.setAttribute('width', W); svg.setAttribute('height', H); svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.innerHTML = defs() + `<rect width="${W}" height="${H}" fill="${C.tint}"/><rect width="${W}" height="${H}" fill="url(#dots)"/><g id="art">${art}</g>`;
    const finish = () => {
      if (o.fit !== false) {
        const g = svg.querySelector('#art'), bb = g.getBBox(), [mx, my] = o.margin || [64, 64];
        const s = Math.min((W - mx * 2) / bb.width, (H - my * 2) / bb.height, o.maxScale || 3);
        const cx = bb.x + bb.width / 2, cy = bb.y + bb.height / 2;
        g.setAttribute('transform', `translate(${W / 2} ${H / 2 + (o.nudgeY || 0)}) scale(${s}) translate(${-cx} ${-cy})`);
      }
      window.coverReady = true;
    };
    const imgs = [...svg.querySelectorAll('image')];
    if (!imgs.length) return finish();
    Promise.all(imgs.map((im) => new Promise((res) => { const i = new Image(); i.onload = i.onerror = res; i.src = im.getAttribute('href'); }))).then(() => setTimeout(finish, 150));
  };

  window.Cover = C;
})();
