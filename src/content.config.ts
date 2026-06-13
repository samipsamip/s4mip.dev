import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      order: z.number(),
      problem: z.string(),
      role: z.string().optional(),
      highlights: z.array(z.string()).min(1).max(4),
      stack: z.array(z.string()).min(1),
      github: z.string().url().optional(),
      live: z.string().url().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
    }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const reading = defineCollection({
  loader: file('./src/data/reading.json'),
  schema: z.object({
    title: z.string(),
    url: z.string().url(),
    note: z.string().optional(),
    added: z.coerce.date(),
  }),
});

export const collections = { projects, blog, reading };
