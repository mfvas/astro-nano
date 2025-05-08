import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    description: z.string(),
    rank: z.number(),
    year: z.number(),
  }),
});

const did = defineCollection({
  type: "content",
  schema: z.object({
    learned: z.string(),
    description: z.string(),
    year: z.number(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});

const ideas = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    rank: z.number(),
    draft: z.boolean().optional(),
    source: z.string().optional(),
  }),
});

export const collections = { blog, work, projects, did, ideas };
