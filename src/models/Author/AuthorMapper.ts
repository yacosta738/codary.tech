import type { CollectionEntry } from "astro:content";
import type Author from "./Author";

/**
 * Maps author collection data to Author model
 * @param authorData - The author collection entry from Astro content
 * @returns An Author model object with id, name, email, and avatar properties
 */

export function toAuthor(authorData: CollectionEntry<"authors">): Author {
	return {
		id: authorData.id,
		name: authorData.data.name,
		email: authorData.data.email,
		avatar: authorData.data.avatar,
	};
}

/**
 * Maps an array of author collection data to an array of Author models
 * @param authors - Array of author collection entries from Astro content
 * @returns Array of Author model objects
 */
export function toAuthors(authors: CollectionEntry<"authors">[]): Author[] {
	return authors.map(toAuthor);
}
