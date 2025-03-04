import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import { SITE_DESCRIPTION, SITE_TITLE } from "@configs";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
const parser = new MarkdownIt();

/**
 * Generates RSS feed for the blog
 * @param {import('astro').APIContext} context
 */
export async function GET(context) {
	const articles = await getCollection("articles", ({ data }) => !data.draft);

	const sortedArticles = articles.sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		customData: "<language>es-ES</language>",
		trailingSlash: true,
		items: sortedArticles.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/${post.id}/`,
			content: sanitizeHtml(parser.render(post.body), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
			}),
			customData: post.data.customData,
		})),
		stylesheet: "/rss/styles.xsl",
	});
}
