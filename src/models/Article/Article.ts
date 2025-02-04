/**
 * Represents an article in the system
 * @interface Article
 * @property {string} id - Unique identifier for the article
 * @property {string} title - Title of the article
 * @property {string} description - Brief description or summary of the article
 * @property {Author} author - Author of the article
 * @property {{image: string, alt: string}} cover - Cover image details for the article
 * @property {Tag[]} tags - Array of tags associated with the article
 * @property {Category} category - Category the article belongs to
 * @property {boolean} featured - Indicates if the article is featured
 * @property {string} body - Main content of the article
 * @property {Date} pubDate - Publication date of the article
 * @property {Date} [lastModified] - Last modification date of the article (optional)
 * @property {CollectionEntry<"articles">} entry - Astro content collection entry for the article
 */
import type Author from "@models/Author/Author";
import type Category from "@models/Category/Category";
import type Tag from "@models/Tag/Tag";
import type { CollectionEntry } from "astro:content";

export default interface Article {
	id: string;
	title: string;
	description: string;
	author: Author;
	cover: {image: string, alt: string};
	tags: Tag[];
	category: Category;
	featured: boolean;
	body: string;
	pubDate: Date;
	lastModified?: Date;
	entry: CollectionEntry<"articles">;
}
