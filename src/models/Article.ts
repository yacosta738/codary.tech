import type { CollectionEntry } from "astro:content";
import type Author from "./Author";
import type Category from "./Category";
import type Tag from "./Tag";

export default interface Article {
	id: string;
	title: string;
	excerpt: string;
	author: Author;
	image: string;
	tags: Tag[];
	category: Category;
	featured: boolean;
	body: string;
	pubDate: Date;
	entry: CollectionEntry<"articles">;
}
