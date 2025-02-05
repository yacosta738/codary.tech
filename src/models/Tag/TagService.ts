/**
 * Service module for handling Tag-related operations.
 * @module TagService
 */

import { getCollection, getEntry } from "astro:content";
import type Tag from "./Tag";
import { toTag, toTags } from "./TagMapper";

let tagsCache: Tag[] | null = null;

/**
 * Retrieves all available tags from the content collection.
 * Implements caching to improve performance on subsequent calls.
 * @async
 * @returns {Promise<Tag[]>} A promise that resolves to an array of Tag objects
 * @throws {Error} If the tags collection cannot be fetched
 */
export async function getTags(): Promise<Tag[]> {
	if (tagsCache) {
		return tagsCache;
	}
	try {
		const tags = await getCollection("tags");
		const mappedTags = await toTags(tags);
		tagsCache = mappedTags;
		return mappedTags;
	} catch (error) {
		console.error("Failed to fetch tags:", error);
		throw new Error("Failed to fetch tags");
	}
}

/**
 * Retrieves a specific tag by its ID.
 * @async
 * @param {string} id - The unique identifier of the tag
 * @returns {Promise<Tag | undefined>} A promise that resolves to a Tag object if found, undefined otherwise
 */
export async function getTagById(id: string): Promise<Tag | undefined> {
	try {
		const entry = await getEntry("tags", id);
		return entry ? toTag(entry) : undefined;
	} catch (error) {
		console.error(`Failed to fetch tag with id ${id}:`, error);
		throw new Error(`Failed to fetch tag with id ${id}`);
	}
}
