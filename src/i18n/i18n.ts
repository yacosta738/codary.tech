import { getRelativeLocaleUrl } from "astro:i18n";
import { DEFAULT_LOCALE, LOCALES, type Lang, type Multilingual } from "./types";
import { ui } from "./ui";

/**
 * Helper to get the translation function
 * @param - The current language
 * @returns - The translation function
 */
export function useTranslations(lang: Lang) {
	return function t(
		multilingualOrKey: Multilingual | string,
		variables?: Record<string, string | number>,
	): string {
		let text: string;

		if (typeof multilingualOrKey === "string") {
			// When it's a string, look in ui[lang] or ui[DEFAULT_LOCALE]
			text =
				ui[lang][multilingualOrKey] ??
				ui[DEFAULT_LOCALE][multilingualOrKey] ??
				multilingualOrKey;
		} else {
			// When it's a TextMultilingual object, return the value for lang or DEFAULT_LOCALE
			text = multilingualOrKey[lang] ?? multilingualOrKey[DEFAULT_LOCALE] ?? "";
		}

		// Replace variables in the translation string if provided
		if (variables) {
			return Object.entries(variables).reduce((result, [key, value]) => {
				// Use a global regex to replace all occurrences
				return result.replace(new RegExp(`{${key}}`, "g"), String(value));
			}, text);
		}

		return text;
	};
}

/**
 * Generates an array of locale paths for different languages based on a given URL.
 *
 * @param url - The URL to extract and transform the pathname
 * @returns An array of LocalePath objects containing language code and localized path
 *
 * @example
 * // For URL: new URL('https://example.com/en/about')
 * // Returns: [
 * //   { lang: 'en', path: '/en/about' },
 * //   { lang: 'de', path: '/de/about' },
 * //   ...
 * // ]
 */
export function getLocalePaths(url: URL): LocalePath[] {
	return Object.keys(LOCALES).map((lang) => {
		return {
			lang: lang as Lang,
			path: getRelativeLocaleUrl(
				lang,
				url.pathname.replace(/^\/[a-zA-Z-]+/, ""),
			),
		};
	});
}
type LocalePath = {
	lang: Lang;
	path: string;
};

/**
 * Helper to get locale parms for Astro's `getStaticPaths` function
 * @returns - The list of locale params
 * @see https://docs.astro.build/en/guides/routing/#dynamic-routes
 */
export const localeParams = Object.keys(LOCALES).map((lang) => ({
	params: { lang },
}));
