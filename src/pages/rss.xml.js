import { getCollection } from "astro:content";
import rss from "@astrojs/rss";

/**
 * Generates RSS feed for the blog
 * @param {import('astro').APIContext} context
 */
export async function GET(context) {
	const articles = await getCollection("articles");

	const sortedArticles = articles.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);

	return rss({
		title: "Codary",
		description:
			"Las últimas noticias sobre tecnología, programación y desarrollo web",
		site: context.site,
		items: sortedArticles.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/${post.id}/`,
		})),
	});
}
