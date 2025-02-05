# Codary.tech

**Codary.tech** es el sitio web oficial basado en el [Astro Starter Kit: Basics](https://astro.build). Está construido con tecnologías modernas para ofrecer un sitio rápido, escalable y fácil de mantener.

## Tabla de Contenidos

- [Codary.tech](#codarytech)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Descripción](#descripción)
  - [Características](#características)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Requisitos Previos](#requisitos-previos)
  - [Instalación](#instalación)
  - [Scripts y Comandos](#scripts-y-comandos)
  - [Despliegue](#despliegue)
  - [Contribuciones](#contribuciones)
  - [Licencia](#licencia)
  - [Contacto](#contacto)

## Descripción

Este proyecto es el sitio web de **Codary.tech**. Basado en Astro, aprovecha lo último en tecnologías web para generar páginas estáticas con tiempos de carga ultrarrápidos y una estructura modular que facilita su mantenimiento y escalabilidad.

## Características

- **Rendimiento Optimizado:** Construido con Astro para generar páginas estáticas y ligeras.
- **Código Modular:** Organización por componentes y layouts que facilitan el desarrollo y la ampliación.
- **Soporte Multilenguaje:** Utiliza tecnologías como TypeScript, JavaScript, CSS y MDX para una experiencia de desarrollo moderna.
- **Despliegue Sencillo:** Genera una carpeta de producción (`./dist`) lista para desplegar en servicios como Netlify, Vercel o GitHub Pages.

## Tecnologías Utilizadas

- [Astro](https://astro.build) – Framework moderno para crear sitios web estáticos.
- [TypeScript](https://www.typescriptlang.org) – Superset de JavaScript con tipado estático.
- [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) – Lenguaje de programación esencial para la web.
- [CSS](https://developer.mozilla.org/es/docs/Web/CSS) – Para el estilizado de la interfaz.
- [MDX](https://mdxjs.com) – Permite integrar JSX en archivos Markdown.

## Estructura del Proyecto

La organización del repositorio es la siguiente:

```
/
├── public/               # Archivos estáticos (imágenes, favicons, etc.)
├── src/                  # Código fuente del proyecto
│   ├── layouts/          # Layouts de la aplicación
│   └── pages/            # Páginas del sitio web
├── scripts/              # Scripts y herramientas auxiliares
├── .github/              # Configuraciones de GitHub (workflows, issues, etc.)
├── astro.config.mjs      # Configuración principal de Astro
├── package.json          # Dependencias y scripts del proyecto
├── pnpm-lock.yaml        # Archivo de lock para pnpm
└── tsconfig.json         # Configuración de TypeScript
```

## Requisitos Previos

- [Node.js](https://nodejs.org) v14 o superior.
- [npm](https://www.npmjs.com) o [pnpm](https://pnpm.io).

## Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/yacosta738/codary.tech.git
   ```

2. **Accede al directorio del proyecto:**

   ```bash
   cd codary.tech
   ```

3. **Instala las dependencias:**

   Con npm:
   ```bash
   npm install
   ```
   O, si prefieres pnpm:
   ```bash
   pnpm install
   ```

## Scripts y Comandos

Desde la raíz del proyecto, utiliza los siguientes comandos:

- **Instalar dependencias:**

  ```bash
  npm install
  ```

- **Iniciar el servidor de desarrollo:**

  ```bash
  npm run dev
  ```
  Accede a `http://localhost:4321` para ver el sitio en funcionamiento.

- **Construir el sitio para producción:**

  ```bash
  npm run build
  ```

- **Previsualizar la build de producción:**

  ```bash
  npm run preview
  ```

- **Ejecutar comandos de Astro:**

  ```bash
  npm run astro -- --help
  ```

## Despliegue

Para desplegar el sitio en producción:

1. **Construye el sitio:**

   ```bash
   npm run build
   ```

2. **La versión de producción se genera en la carpeta `./dist/`.**

3. **Despliega el contenido de `dist` en la plataforma de hosting de tu elección** (por ejemplo, Netlify, Vercel o GitHub Pages).

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas ayudar a mejorar este proyecto, sigue estos pasos:

1. Haz un *fork* del repositorio.
2. Crea una rama para la nueva funcionalidad o corrección:

   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```

3. Realiza tus cambios y haz un commit:

   ```bash
   git commit -m "Añadir nueva funcionalidad"
   ```

4. Envía un *pull request* describiendo los cambios realizados.

## Licencia

Actualmente este proyecto **no especifica una licencia**. Si deseas utilizar o modificar el código, por favor contacta al autor para definir los términos de uso.

## Contacto

- **Autor:** [yacosta738](https://github.com/yacosta738)
- **Sitio Web:** [codary.tech](https://codary.tech)
- **Soporte y Consultas:** Abre un issue en el repositorio o contacta al autor a través de sus redes sociales.
