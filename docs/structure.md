## Estructura del Proyecto

```
├───.devcontainer/
│   ├───Dockerfile
│   ├───devcontainer.json
│   └───welcome-message.txt
├───.github/
│   ├───ISSUE_TEMPLATE/
│   │   ├───bug_report.md
│   │   └───feature_request.md
│   ├───workflows/
│   │   ├───cleanup.yml
│   │   ├───codeql.yml
│   │   ├───image-actions.yml
│   │   ├───links.yml
│   │   └───pagespeed-insights.yml
│   ├───FUNDING.yml
│   ├───PULL_REQUEST_TEMPLATE.md
│   └───dependabot.yml
├───.vscode/
│   ├───extensions.json
│   ├───launch.json
│   └───settings.json
├───docs/
│   └───structure.md
├───public/
│   ├───admin/
│   │   └───config.yml
│   ├───images/
│   │   ├───.DS_Store
│   │   ├───blog-placeholder-1.avif
│   │   ├───blog-placeholder-2.avif
│   │   ├───blog-placeholder-3.avif
│   │   ├───blog-placeholder-4.avif
│   │   ├───cloudflare-vs-laliga.webp
│   │   ├───pexels-fauxels-3183150.jpg
│   │   ├───rust-programming-language.webp
│   │   ├───whoAMI-cover.webp
│   │   ├───whoami.webp
│   │   ├───xAI.webp
│   │   └───youtube-privacy.webp
│   ├───rss/
│   │   └───styles.xsl
│   ├───.DS_Store
│   └───logo.svg
├───scripts/
│   └───organize-articles.js
├───src/
│   ├───assets/
│   │   ├───astro.svg
│   │   └───background.svg
│   ├───components/
│   │   ├───.DS_Store
│   │   ├───BaseHead.astro
│   │   ├───Card.astro
│   │   ├───CommonCard.astro
│   │   ├───Footer.astro
│   │   ├───FormattedDate.astro
│   │   ├───Header.astro
│   │   ├───HeroCard.astro
│   │   ├───Links.astro
│   │   ├───OptimizedPicture.astro
│   │   ├───Pagination.astro
│   │   ├───RelatedPostsCard.astro
│   │   └───ThemeToggle.astro
│   ├───data/
│   │   ├───articles/
│   │   │   ├───2025/
│   │   │   │   ├───02/
│   │   │   │   │   └───...
│   │   │   │   └───09/
│   │   │   │       └───...
│   │   │   └───.DS_Store
│   │   ├───authors/
│   │   │   └───yuniel-acosta-perez.json
│   │   ├───categories/
│   │   │   ├───ciberseguridad.md
│   │   │   ├───desarrollo-web.md
│   │   │   ├───inteligencia-artificial.md
│   │   │   ├───redes-sociales.md
│   │   │   └───startups.md
│   │   ├───config/
│   │   │   └───config.json
│   │   ├───dynamic-pages/
│   │   │   ├───about.md
│   │   │   ├───cookie-policy.md
│   │   │   ├───privacy-policy.md
│   │   │   └───terms-of-use.md
│   │   ├───tags/
│   │   │   ├───ai.md
│   │   │   ├───aws.md
│   │   │   ├───cloudflare.md
│   │   │   ├───docker.md
│   │   │   ├───git.md
│   │   │   ├───hacking.md
│   │   │   ├───javascript.md
│   │   │   ├───kubernetes.md
│   │   │   ├───node-js.md
│   │   │   ├───politicas-de-seguridad.md
│   │   │   ├───python.md
│   │   │   ├───react.md
│   │   │   ├───rust.md
│   │   │   ├───tooling.md
│   │   │   ├───typescript.md
│   │   │   ├───vue.md
│   │   │   ├───web-assembly.md
│   │   │   └───youtube.md
│   │   └───.DS_Store
│   ├───layouts/
│   │   └───BaseLayout.astro
│   ├───models/
│   │   ├───Article/
│   │   │   ├───Article.ts
│   │   │   ├───ArticleMapper.ts
│   │   │   ├───ArticleService.ts
│   │   │   └───index.ts
│   │   ├───Author/
│   │   │   ├───Author.ts
│   │   │   ├───AuthorMapper.ts
│   │   │   ├───AuthorService.ts
│   │   │   └───index.ts
│   │   ├───Category/
│   │   │   ├───Category.ts
│   │   │   ├───CategoryMapper.ts
│   │   │   ├───CategoryService.ts
│   │   │   └───index.ts
│   │   ├───Config/
│   │   │   ├───Config.ts
│   │   │   ├───ConfigMapper.ts
│   │   │   ├───ConfigService.ts
│   │   │   └───index.ts
│   │   ├───Page/
│   │   │   ├───Page.ts
│   │   │   ├───PageMapper.ts
│   │   │   ├───PageService.ts
│   │   │   └───index.ts
│   │   ├───Tag/
│   │   │   ├───Tag.ts
│   │   │   ├───TagMapper.ts
│   │   │   ├───TagService.ts
│   │   │   └───index.ts
│   │   └───.DS_Store
│   ├───pages/
│   │   ├───category/
│   │   │   └───[category]/
│   │   │       └───[page].astro
│   │   ├───page/
│   │   │   └───[page].astro
│   │   ├───posts/
│   │   │   └───[...slug].astro
│   │   ├───tags/
│   │   │   ├───[tag]/
│   │   │   │   └───[page].astro
│   │   │   └───index.astro
│   │   ├───.DS_Store
│   │   ├───404.astro
│   │   ├───[slug].astro
│   │   ├───admin.astro
│   │   ├───index.astro
│   │   ├───robots.txt.ts
│   │   ├───rss.xml.js
│   │   └───search.astro
│   ├───styles/
│   │   ├───github-markdown.css
│   │   └───global.css
│   ├───utils/
│   │   ├───dates.ts
│   │   └───remark-reading-time.mjs
│   ├───.DS_Store
│   ├───content.config.ts
│   └───site.config.ts
├───.gitignore
├───.lycheeignore
├───.npmrc
├───.pre-commit-config.yaml
├───CODE_OF_CONDUCT.md
├───CONTRIBUTING.md
├───LICENSE
├───README.md
├───SECURITY.md
├───astro.config.mjs
├───biome.json
├───package.json
├───pnpm-lock.yaml
├───renovate.json
└───tsconfig.json

```
