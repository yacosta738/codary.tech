/**
 * Service module for handling Author-related operations.
 * @module AuthorService
 */

import { getCollection } from "astro:content";
import type Author from "./Author";
import { toAuthors } from "./AuthorMapper";

/**
 * Retrieves all authors from the content collection.
 * @async
 * @returns {Promise<Author[]>} A promise that resolves to an array of Author objects.
 */
export const getAuthors = async (): Promise<Author[]> => {
	const authors = await getCollection("authors");
	return toAuthors(authors);
};

/**
 * Retrieves a specific author by their ID.
 * @async
 * @param {string} id - The unique identifier of the author to retrieve.
 * @returns {Promise<Author | undefined>} A promise that resolves to an Author object if found, undefined otherwise.
 */
export const getAuthorById = async (
	id: string,
): Promise<Author | undefined> => {
	const authors = await getCollection("authors");
	return toAuthors(authors).find((author) => author.id === id);
};
