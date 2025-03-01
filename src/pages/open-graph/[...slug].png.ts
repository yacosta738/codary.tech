export const prerender = true;
import { getArticles } from "@models/Article";
import { getCategories } from "@models/Category";
import { getTags } from "@models/Tag";
import generateOgImage, { type OgData } from "@utils/openGraph";
import type { APIRoute, GetStaticPaths, GetStaticPathsItem } from "astro";
import { SITE_TITLE } from "src/site.config";

interface StaticPaths extends OgData {
	slug: string;
}

const STATIC_PATH: StaticPaths[] = [
	{
		slug: SITE_TITLE,
		title: `${SITE_TITLE} : Mantente al día con la tecnología y la programación`,
		date: new Date(),
	},
	{
		slug: "posts",
		title:
			"Aprende y mantente al día con las últimas novedades en tecnología y programación",
		date: new Date(),
	},
];

export const getStaticPaths: GetStaticPaths = async () => {
	const result: GetStaticPathsItem[] = [];

	// static path
	for (const item of STATIC_PATH) {
		result.push({
			params: { slug: item.slug },
			props: {
				title: item.title,
				date: item.date,
			},
		});
	}

	// articles
	const articlesList = await getArticles();

	for (const article of articlesList) {
		result.push({
			params: { slug: `/posts/${article.id}/` },
			props: {
				title: article.title,
				date: article.pubDate,
			},
		});
	}

	// tags
	const articleTags = await getTags();

	for (const tag of articleTags) {
		result.push({
			params: { slug: `tags/${tag.id}` },
			props: {
				title: `Mostrando todo el contenido de "${tag.title}"`,
				date: new Date(),
			},
		});
	}

	// categories
	const categories = await getCategories();

	for (const category of categories) {
		result.push({
			params: { slug: `category/${category.id}` },
			props: {
				title: `Mostrando todo el contenido de la categoría "${category.title}"`,
				date: new Date(),
			},
		});
	}

	return result;
};

export const GET: APIRoute<OgData> = async ({ props }) => {
	const response = await generateOgImage(props.title, props.date);
	return new Response(response, {
		status: 200,
		headers: {
			"Content-Type": "image/png",
		},
	});
};
