import { getCollection } from "astro:content";
import type { Config } from "./Config";
import { toConfig } from "./ConfigMapper";

/**
 * Retrieves the site configuration from the content collection
 * @async
 * @returns {Promise<Config>} A promise that resolves to a Config object
 */
export async function getConfig(): Promise<Config> {
	const config = await getCollection("config");
	return toConfig(config[0]);
}
