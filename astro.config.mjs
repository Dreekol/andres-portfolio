// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the custom domain once chosen
const SITE = 'https://andres-portfolio-azure.vercel.app';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'never',
  // The homepage is the Work page; keep /work working for links already shared
  redirects: { '/work': '/#work', '/resume': '/about#experience', '/work/harris-county/harris-county-pets-brand': '/work/harris-county/public-health-brand' },
  integrations: [
    mdx(),
    sitemap({
      // Password-protected material never goes in the sitemap
      filter: (page) => !page.includes('/private') && !/\/work\/?$/.test(page),
    }),
  ],
});
