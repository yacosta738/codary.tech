# Estructura del Proyecto

```plaintext
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
│   ├───.DS_Store
│   ├───FUNDING.yml
│   ├───PULL_REQUEST_TEMPLATE.md
│   └───dependabot.yml
├───.vscode/
│   ├───extensions.json
│   ├───launch.json
│   └───settings.json
├───.wrangler/
│   └───state/
│       └───v3/
│           └───workflows/
├───content-type-example/
├───docs/
│   └───structure.md
├───public/
│   ├───admin/
│   │   └───config.yml
│   ├───rss/
│   │   └───styles.xsl
│   ├───.DS_Store
│   ├───default-cover.avif
│   └───logo.svg
├───scripts/
│   └───organize-articles.js
├───src/
│   ├───assets/
│   │   ├───font/
│   │   │   ├───JetBrainsMono-Bold.ttf
│   │   │   └───PlusJakartaSans-Bold.ttf
│   │   ├───images/
│   │   │   ├───.DS_Store
│   │   │   ├───0b716be6-2c45-49eb-8080-4161ceaac542.avif
│   │   │   ├───Humane AI.avif
│   │   │   ├───Representación conceptual del HumaneAI Pin.avif
│   │   │   ├───apple-tv-netflix.avif
│   │   │   ├───b2e160fc-70d4-47ba-8078-60889c495ad2.avif
│   │   │   ├───blog-placeholder-1.avif
│   │   │   ├───blog-placeholder-2.avif
│   │   │   ├───blog-placeholder-3.avif
│   │   │   ├───blog-placeholder-4.avif
│   │   │   ├───bybit.avif
│   │   │   ├───cloudflare-vs-laliga-2.webp
│   │   │   ├───cloudflare-vs-laliga.avif
│   │   │   ├───grok-3-elonwebp.avif
│   │   │   ├───iphone-16e-finish-unselect-gallery.avif
│   │   │   ├───la-democratizacion-de-la-ia.avif
│   │   │   ├───microsoft-cancela-servidores.avif
│   │   │   ├───rust-programming-language.avif
│   │   │   ├───whoAMI-cover.avif
│   │   │   ├───whoami.avif
│   │   │   ├───xAI.avif
│   │   │   └───youtube-privacy.avif
│   │   ├───.DS_Store
│   │   ├───astro.svg
│   │   └───background.svg
│   ├───components/
│   │   ├───.DS_Store
│   │   ├───ArticleGrid.astro
│   │   ├───AuthButton.astro
│   │   ├───BaseHead.astro
│   │   ├───Card.astro
│   │   ├───CommonCard.astro
│   │   ├───Footer.astro
│   │   ├───FormattedDate.astro
│   │   ├───Header.astro
│   │   ├───HeroCard.astro
│   │   ├───HeroNewsletter.astro
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
│   │   │   │   └───.DS_Store
│   │   │   └───.DS_Store
│   │   ├───authors/
│   │   │   └───yuniel-acosta-perez.json
│   │   ├───categories/
│   │   │   ├───ciberseguridad.md
│   │   │   ├───desarrollo-web.md
│   │   │   ├───inteligencia-artificial.md
│   │   │   ├───internet.md
│   │   │   ├───redes-sociales.md
│   │   │   ├───smartphones.md
│   │   │   ├───startups.md
│   │   │   ├───streaming.md
│   │   │   └───tecnologia.md
│   │   ├───config/
│   │   │   └───config.json
│   │   ├───dynamic-pages/
│   │   │   ├───about.md
│   │   │   ├───cookie-policy.md
│   │   │   ├───privacy-policy.md
│   │   │   └───terms-of-use.md
│   │   ├───tags/
│   │   │   ├───ai.md
│   │   │   ├───apple.md
│   │   │   ├───automatizacion.md
│   │   │   ├───aws.md
│   │   │   ├───centros-de-datos.md
│   │   │   ├───china.md
│   │   │   ├───cloudflare.md
│   │   │   ├───dispositivos-wearable.md
│   │   │   ├───docker.md
│   │   │   ├───ee-uu.md
│   │   │   ├───git.md
│   │   │   ├───grok.md
│   │   │   ├───hacking.md
│   │   │   ├───industria-global.md
│   │   │   ├───internet.md
│   │   │   ├───inversores.md
│   │   │   ├───iphone.md
│   │   │   ├───isp.md
│   │   │   ├───javascript.md
│   │   │   ├───kubernetes.md
│   │   │   ├───microsoft.md
│   │   │   ├───netflix.md
│   │   │   ├───node-js.md
│   │   │   ├───politicas-de-seguridad.md
│   │   │   ├───programacion.md
│   │   │   ├───python.md
│   │   │   ├───react.md
│   │   │   ├───rust.md
│   │   │   ├───semiconductores.md
│   │   │   ├───smartphones.md
│   │   │   ├───tooling.md
│   │   │   ├───typescript.md
│   │   │   ├───vue.md
│   │   │   ├───web-assembly.md
│   │   │   ├───x.md
│   │   │   └───youtube.md
│   │   └───.DS_Store
│   ├───layouts/
│   │   └───BaseLayout.astro
│   ├───lib/
│   │   └───supabase.ts
│   ├───middleware/
│   │   └───index.ts
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
│   │   ├───api/
│   │   │   ├───auth/
│   │   │   │   ├───callback.ts
│   │   │   │   ├───register.ts
│   │   │   │   ├───signin.ts
│   │   │   │   └───signout.ts
│   │   │   └───user/
│   │   │       ├───profile.ts
│   │   │       └───update.ts
│   │   ├───category/
│   │   │   └───[category]/
│   │   │       └───[page].astro
│   │   ├───newsletter/
│   │   │   └───index.astro
│   │   ├───open-graph/
│   │   │   └───[...slug].png.ts
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
│   │   ├───account.astro
│   │   ├───admin.astro
│   │   ├───apps.astro
│   │   ├───index.astro
│   │   ├───register.astro
│   │   ├───robots.txt.ts
│   │   ├───rss.xml.js
│   │   ├───search.astro
│   │   └───signin.astro
│   ├───styles/
│   │   ├───github-markdown.css
│   │   └───global.css
│   ├───utils/
│   │   ├───dates.ts
│   │   ├───openGraph.tsx
│   │   └───remark-reading-time.mjs
│   ├───.DS_Store
│   ├───content.config.ts
│   └───site.config.ts
├───supabase/
│   ├───.branches/
│   │   └───_current_branch
│   ├───.temp/
│   │   └───cli-latest
│   ├───migrations/
│   │   ├───20250227195823_user_management_starter.sql
│   │   └───20250227200050_newsletter_subscriptions.sql
│   ├───.gitignore
│   └───config.toml
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
