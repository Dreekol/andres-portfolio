import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      /** Outcome- or problem-first title, never the client name alone */
      title: z.string(),
      client: z.string(),
      /** Short label for an initiative, used on cards and breadcrumbs (e.g. "Design system") */
      name: z.string().optional(),
      /** Id of the client hub this initiative belongs to (e.g. "cargill") */
      parent: z.string().optional(),
      /** Discipline tags for the Type of work filter */
      workTypes: z.array(z.enum(['Customer-facing products', 'Internal tools', 'Websites', 'Design systems', 'Brand identity', 'Data visualization', 'Research'])).default([]),
      /** Engagement period shown on hubs, only when confirmed */
      period: z.string().optional(),
      /** One line under the title on tiles and the case-study header */
      summary: z.string(),
      featured: z.boolean().default(false),
      order: z.number(),
      domains: z.array(z.enum(['Healthcare', 'Insurance', 'Agriculture', 'HR & Learning', 'Public sector', 'Manufacturing'])),
      /** What kind of work, shown as the tile tag */
      kind: z.string(),
      role: z.string(),
      scope: z.array(z.string()),
      team: z.string().optional(),
      tools: z.array(z.string()).default([]),
      status: z.string().optional(),
      liveUrl: z.string().url().optional(),
      /** Client brand colour, sampled from the shipped product */
      color: z.string().regex(/^#[0-9A-Fa-f]{6}$/),
      colorName: z.string(),
      /** Client logo shown on the client tile (full colour, displayed on a white plate) */
      logo: image().optional(),
      cover: image(),
      coverAlt: z.string(),
      /** CSS object-position for the cover crop on tiles */
      coverPosition: z.string().default('top center'),
    }),
});

export const collections = { work };
