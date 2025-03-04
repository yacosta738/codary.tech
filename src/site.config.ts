import { getCategories } from "@models/Category";
import { getConfig } from "@models/Config";

const config = await getConfig();
const categories = await getCategories();

// Base Page Metadata, src/layouts/BaseLayout.astro
export const BRAND_NAME = config.brand_name;
export const SITE_TITLE = config.title;
export const SITE_DESCRIPTION = config.description;

// Tags Page Metadata, src/pages/tags/index.astro
export const Tags_TITLE = config.tag_title;
export const Tags_DESCRIPTION = config.tag_description;

// Tags Page Metadata, src/pages/tags/[tag]/[page].astro
export function getTagMetadata(tag: string) {
	return {
		title: `Todos los artículos con la etiqueta '${tag}' en ${BRAND_NAME}`,
		description: `Explora artículos sobre ${tag} para diferentes perspectivas y análisis en profundidad en ${BRAND_NAME}.`,
	};
}

// Category Page Metadata, src/pages/category/[category]/[page].astro
export function getCategoryMetadata(category: string) {
	return {
		title: `Todos los artículos en la categoría '${category}' en ${BRAND_NAME}`,
		description: `Explora todos los artículos bajo la categoría ${category} en ${BRAND_NAME}`,
	};
}

// Header Links, src/components/Header.astro
export const HeaderLinks = categories.map((category) => ({
	href: `/category/${category.id}/1/`,
	title: category.title,
}));

// Footer Links, src/components/Footer.astro
export const FooterLinks = config.footer.links.map((link) => ({
	href: link.url,
	title: link.title,
}));

// Social Links, src/components/Footer.astro
export const SocialLinks = config.social.map((link) => ({
	href: link.url,
	icon: link.icon,
	label: link.label,
}));

// Search Page Metadata, src/pages/search.astro
export const SEARCH_PAGE_TITLE = `${SITE_TITLE} - Búsqueda del sitio`;
export const SEARCH_PAGE_DESCRIPTION = `Busca todo el contenido en ${SITE_TITLE}`;
