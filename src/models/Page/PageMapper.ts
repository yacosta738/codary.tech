import type { CollectionEntry } from "astro:content";
import type Page from "./Page";

/**
 * Converts a CollectionEntry of type 'pages' to a Page object
 *
 * @param pageData - The collection entry containing page data
 * @returns A Page object with id, title, content and the original entry
 *
 * @example
 * ```typescript
 * const pageEntry = getCollection('pages')[0];
 * const page = toPage(pageEntry);
 * ```
 */
export function toPage(pageData: CollectionEntry<"dynamicPages">): Page {
	return {
		id: pageData.id,
		title: pageData.data.title,
		description: pageData.data.description ?? "",
		content: pageData.body ?? "",
		entry: pageData,
	};
}

/**
 * Converts an array of CollectionEntry of type 'pages' to an array of Page objects
 *
 * @param pages - Array of collection entries containing page data
 * @returns An array of Page objects
 *
 * @example
 * ```typescript
 * const pageEntries = getCollection('pages');
 * const pages = toPages(pageEntries);
 * ```
 */
export function toPages(pages: CollectionEntry<"dynamicPages">[]): Page[] {
	return pages.map(toPage);
}
