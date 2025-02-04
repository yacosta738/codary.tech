import type { CollectionEntry } from "astro:content";
import type Category from "./Category";

/**
 * Maps a category collection entry to a Category model
 * @param categoryData - The collection entry data for a category
 * @returns A Category model object
 */
export function toCategory(
    categoryData: CollectionEntry<"categories">,
): Category {
    return {
        id: categoryData.id,
        title: categoryData.data.title,
        order: categoryData.data.order,
    };
}

/**
 * Maps an array of category collection entries to an array of Category models
 * @param categories - Array of category collection entries
 * @returns Promise resolving to an array of Category models
 */
export async function toCategories(
    categories: CollectionEntry<"categories">[],
): Promise<Category[]> {
    return categories.map(toCategory);
}