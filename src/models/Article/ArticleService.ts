/**
 * Service layer for managing Article-related operations
 * @module ArticleService
 */

import { getCollection } from "astro:content";
import type Article from "./Article";
import { toArticles } from "./ArticleMapper";

/**
 * Retrieves all articles from the content collection
 * @async
 * @returns {Promise<Article[]>} A promise that resolves to an array of Article objects
 */
export async function getArticles(): Promise<Article[]> {
	const articles = await getCollection("articles");
	return toArticles(articles);
}

/**
 * Retrieves a specific article by its ID
 * @async
 * @param {string} id - The unique identifier of the article to retrieve
 * @returns {Promise<Article | undefined>} A promise that resolves to either an Article object if found, or undefined if not found
 */
export async function getArticleById(id: string): Promise<Article | undefined> {
	const articles = await getArticles();
	return articles.find((article) => article.id === id);
}
