import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const articles = defineCollection({
    loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/articles" }),
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        pubDate: z.date(),
        author: reference("authors"),
        image: z.string(),
        tags: z.array(reference("tags")),
		category: reference("categories"),
        featured: z.boolean().default(false),
      }),
})

const tags = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/tags" }),
	schema: z.object({
		title: z.string(),
	}),
});

const categories = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/categories" }),
	schema: z.object({
		title: z.string(),
		order: z.number().optional(),
	}),
});

const authors = defineCollection({
  loader: glob({ pattern: "**/[^_]*.json", base: "./src/data/authors" }),
  schema: z.object({
    name: z.string(),
    email: z.string(),
    avatar: z.string(),
  }),
});

export const collections = {
    articles,
    tags,
    categories,
    authors,
}
