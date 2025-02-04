import { getCollection } from "astro:content";
import type Page from "./Page";
import { toPages } from "./PageMapper";

/**
 * Retrieves all pages from the "pages" collection and converts them to Page objects.
 * 
 * @async
 * @function getPages
 * @returns {Promise<Page[]>} A promise that resolves to an array of Page objects
 * 
 * @example
 * const pages = await getPages();
 * console.log(pages); // Array of Page objects
 */
export async function getPages(): Promise<Page[]> {
  const pages = await getCollection("dynamicPages");
  return toPages(pages);
}


/**
 * Retrieves a specific page by its ID.
 * 
 * @async
 * @function getPageById
 * @param {string} id - The unique identifier of the page to retrieve
 * @returns {Promise<Page | undefined>} A promise that resolves to a Page object if found, undefined otherwise
 * 
 * @example
 * const page = await getPageById("about");
 */
export async function getPageById(id: string): Promise<Page | undefined> {
  const pages = await getPages();
  return pages.find(page => page.id === id);
}