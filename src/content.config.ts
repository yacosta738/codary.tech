import {
	type SchemaContext,
	defineCollection,
	reference,
	z,
} from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/data/articles" }),
	schema: ({ image }: SchemaContext) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			lastModified: z.date().optional(),
			author: reference("authors"),
			cover: image(),
			coverAlt: z.string(),
			tags: z.array(reference("tags")),
			category: reference("categories"),
			featured: z.boolean().default(false),
			draft: z.boolean().default(true),
		}),
});

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

const config = defineCollection({
	loader: glob({ pattern: "**/[^_]*.json", base: "./src/data/config" }),
	schema: z.object({
		brand_name: z.string(),
		title: z.string(),
		description: z.string(),
		tag_title: z.string(),
		tag_description: z.string(),
		search_title: z.string(),
		search_description: z.string(),
		footer: z.object({
			links: z.array(
				z.object({
					title: z.string(),
					url: z.string(),
				}),
			),
		}),
		social: z.array(
			z.object({
				label: z.string(),
				icon: z.string(),
				url: z.string(),
			}),
		),
	}),
});

const dynamicPages = defineCollection({
	loader: glob({ pattern: "**/[^_]*.md", base: "./src/data/dynamic-pages" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
	}),
});

export const collections = {
	articles,
	tags,
	categories,
	authors,
	config,
	dynamicPages,
};
