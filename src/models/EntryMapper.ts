import { type CollectionEntry, getEntries, getEntry } from "astro:content";
import type Article from "./Article";
import type Author from "./Author";
import type Category from "./Category";
import type Tag from "./Tag";

export function mapAuthor(authorData: CollectionEntry<"authors">): Author {
	return {
		id: authorData.id,
		name: authorData.data.name,
		email: authorData.data.email,
		avatar: authorData.data.avatar,
	};
}

export function mapCategory(
	categoryData: CollectionEntry<"categories">,
): Category {
	return {
		id: categoryData.id,
		title: categoryData.data.title,
		order: categoryData.data.order,
	};
}

export function mapTag(tagData: CollectionEntry<"tags">): Tag {
	return {
		id: tagData.id,
		title: tagData.data.title,
	};
}

export async function mapArticle(
	articleData: CollectionEntry<"articles">,
): Promise<Article> {
	const author = await getEntry(articleData.data.author);
	const category = await getEntry(articleData.data.category);
	const tags = await getEntries(articleData.data.tags);

	if (!author) {
		throw new Error(`Author not found for article: ${articleData.id}`);
	}
	if (!category) {
		throw new Error(`Category not found for article: ${articleData.id}`);
	}

	return {
		id: articleData.id,
		title: articleData.data.title,
		excerpt: articleData.data.excerpt,
		author: mapAuthor(author),
		image: articleData.data.image,
		tags: tags.map(mapTag),
		category: mapCategory(category),
		featured: articleData.data.featured,
		body: articleData.body ?? "",
		pubDate: articleData.data.pubDate,
		entry: articleData,
	};
}

export async function mapArticles(
	articles: CollectionEntry<"articles">[],
): Promise<Article[]> {
	return Promise.all(articles.map(mapArticle));
}
