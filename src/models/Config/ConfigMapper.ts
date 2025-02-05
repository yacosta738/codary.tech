import type { CollectionEntry } from "astro:content";
import type { Config } from "./Config";

/**
 * Maps a Config collection entry to a Config model
 * @param configData - The collection entry data for a Config
 * @returns A Config model object
 */
export function toConfig(configData: CollectionEntry<"config">): Config {
	if (!configData?.data) {
		throw new Error("Invalid config data: data object is missing");
	}

	const { data } = configData;
	const requiredFields = ["brand_name", "title", "description"] as const;
	for (const field of requiredFields) {
		if (!data[field]) {
			throw new Error(`Invalid config data: ${field} is required`);
		}
	}

	return {
		id: configData.id,
		brand_name: data.brand_name,
		title: data.title,
		description: data.description,
		tag_title: data.tag_title,
		tag_description: data.tag_description,
		search_title: data.search_title,
		search_description: data.search_description,
		footer: {
			links: data.footer?.links ?? [],
		},
		social: data.social ?? [],
	};
}
