/**
 * Service module for handling Tag-related operations.
 * @module TagService
 */

import { getCollection } from "astro:content";
import type Tag from "./Tag";
import { toTags } from "./TagMapper";

/**
 * Retrieves all available tags from the content collection.
 * @async
 * @returns {Promise<Tag[]>} A promise that resolves to an array of Tag objects
 */
export async function getTags(): Promise<Tag[]> {
    const tags = await getCollection("tags");
    return toTags(tags);
}


/**
 * Retrieves a specific tag by its ID.
 * @async
 * @param {string} id - The unique identifier of the tag
 * @returns {Promise<Tag | undefined>} A promise that resolves to a Tag object if found, undefined otherwise
 */
export async function getTagById(id: string): Promise<Tag | undefined> {
    const tags = await getTags();
    return tags.find(tag => tag.id === id);
}