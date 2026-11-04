// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the custom domain once chosen
const SITE = 'https://andres-portfolio.vercel.app';

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'never',
  integrations: [
    mdx(),
    sitemap({
      // Password-protected material never goes in the sitemap
      filter: (page) => !page.includes('/private'),
    }),
  ],
});
