import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ARTICLES_DIR = path.join(__dirname, "..", "src/data", "articles");

function organizeArticlesByDate() {
	try {
		console.log("Organizing Markdown files by date... in", ARTICLES_DIR);
		const files = fs
			.readdirSync(ARTICLES_DIR)
			.filter((file) => [".md", ".mdx"].includes(path.extname(file)));

		if (files.length === 0) {
			console.log("No Markdown files found in articles folder");
			return;
		}

		for (const file of files) {
			const filePath = path.join(ARTICLES_DIR, file);
			processFile(filePath, file);
		}

		console.log("Process completed!");
	} catch (error) {
		console.error("Error:", error.message);
	}
}

function processFile(filePath, fileName) {
	try {
		const content = fs.readFileSync(filePath, "utf8");
		const { data: frontmatter } = matter(content);

		if (!frontmatter.pubDate) {
			console.warn(`⚠️  File ${fileName} has no pubDate - skipping`);
			return;
		}

		const date =
			frontmatter.pubDate instanceof Date
				? frontmatter.pubDate
				: new Date(frontmatter.pubDate);

		if (Number.isNaN(date.getTime())) {
			console.warn(`⛔  Invalid date in ${fileName}: ${frontmatter.pubDate}`);
			return;
		}

		const year = date.getFullYear().toString();
		const month = (date.getMonth() + 1).toString().padStart(2, "0");
		const day = date.getDate().toString().padStart(2, "0");

		const newDir = path.join(ARTICLES_DIR, year, month, day);

		if (!fs.existsSync(newDir)) {
			fs.mkdirSync(newDir, { recursive: true });
			console.log(`📂 Folder created: ${newDir}`);
		}

		const newPath = path.join(newDir, fileName);
		if (fs.existsSync(newPath)) {
			console.warn(`⚠️  File already exists at ${newPath} - skipping`);
			return;
		}
		if (!DRY_RUN) {
			fs.renameSync(filePath, newPath);
		}
		console.log(
			`${DRY_RUN ? "[DRY RUN] Would move" : "✅ Moved"}: ${fileName} -> ${newPath.replace(ARTICLES_DIR, "")}`,
		);
	} catch (error) {
		console.error(`❌ Error processing ${fileName}:`, error.message);
	}
}

organizeArticlesByDate();
