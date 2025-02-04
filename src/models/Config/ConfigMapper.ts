import type { CollectionEntry } from "astro:content";
import type {Config} from "./Config";

/**
 * Maps a Config collection entry to a Config model
 * @param configData - The collection entry data for a Config
 * @returns A Config model object
 */
export function toConfig(
    configData: CollectionEntry<"config">,
): Config {
    return {
        id: configData.id,
        brand_name: configData.data.brand_name,
        title: configData.data.title,
        description: configData.data.description,
        tag_title: configData.data.tag_title,
        tag_description: configData.data.tag_description,
        search_title: configData.data.search_title,
        search_description: configData.data.search_description,
        footer: {
            links: configData.data.footer.links,
        },
        social: configData.data.social,
    };
}