/**
 * Retrieves all categories from the content collection.
 * 
 * @remarks
 * This function uses Astro's content collections API to fetch category data
 * and transforms it into the Category model.
 * 
 * @returns A Promise that resolves to an array of Category objects
 * @throws Will throw an error if the collection cannot be accessed
 * 
 * @example
 * ```typescript
 * const categories = await allCategories();
 * console.log(categories); // Array of Category objects
 * ```
 */
import { getCollection } from "astro:content";
import type Category from "./Category";
import { toCategories } from "./CategoryMapper";

export const getCategories = async (): Promise<Array<Category>> => {
    const categoriesCollection = await getCollection("categories");
    return toCategories(categoriesCollection);
}


/**
 * Retrieves a specific category by its ID.
 * 
 * @param categoryId - The unique identifier of the category to retrieve
 * @returns A Promise that resolves to a Category object if found, undefined otherwise
 * @throws Will throw an error if the collection cannot be accessed
 * 
 * @example
 * ```typescript
 * const category = await getCategoryById("tech");
 * ```
 */
export const getCategoryById = async (categoryId: string): Promise<Category | undefined> => {
    const allCategoriesCollection = await getCategories();
    return allCategoriesCollection.find((category) => category.id === categoryId);
}