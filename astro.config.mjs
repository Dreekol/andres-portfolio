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
  redirects: { '/work': '/#work', '/resume': '/about#experience', '/work/harris-county/harris-county-pets-brand': '/work/harris-county/public-health-brand',
    // Project names were swapped for generic ones; keep old links working
    '/work/cargill/cross-sell': '/work/cargill/sales-tool', '/private/work/cargill/cross-sell': '/private/work/cargill/sales-tool',
    '/work/healthpartners/pharmacy-contracting': '/work/healthpartners/contract-management', '/private/work/healthpartners/pharmacy-contracting': '/private/work/healthpartners/contract-management',
    '/work/healthpartners/medication-registry': '/work/healthpartners/outreach-registry', '/private/work/healthpartners/medication-registry': '/private/work/healthpartners/outreach-registry',
    '/work/healthpartners/member-incentives': '/work/healthpartners/incentive-tracking', '/private/work/healthpartners/member-incentives': '/private/work/healthpartners/incentive-tracking',
    '/work/revo-health/excel': '/work/revo-health/patient-management', '/private/work/revo-health/excel': '/private/work/revo-health/patient-management',
    '/work/revo-health/habits-to-health': '/work/revo-health/wellness-program', '/private/work/revo-health/habits-to-health': '/private/work/revo-health/wellness-program',
  },
  integrations: [
    mdx(),
    sitemap({
      // Password-protected material never goes in the sitemap
      filter: (page) => !page.includes('/private') && !page.includes('/access') && !/\/work\/?$/.test(page),
    }),
  ],
});
