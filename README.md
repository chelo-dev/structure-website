# Astro Starter Kit: Web Site

```sh
npm run dev
```

## 🚀 Project Structure


```text
└── 📁kharma-solutions
    └── 📁public
        ├── favicon.ico
        ├── favicon.svg
        ├── manifest.json
        ├── robots.txt
    └── 📁src
        └── 📁assets
            └── 📁images
                ├── logo.svg
        └── 📁components
            └── 📁global
                ├── Footer.astro
                ├── Header.astro
                ├── WhatsAppButton.astro
            └── 📁sections
                ├── About.astro
                ├── Contact.astro
                ├── Hero.astro
                ├── Plans.astro
                ├── Services.astro
            └── 📁seo
                ├── SchemaMarkup.astro
                ├── SEOHead.astro
            └── 📁ui
                ├── Button.astro
                ├── Card.astro
                ├── SectionTitle.astro
        └── 📁data
            ├── plans.ts
            ├── services.ts
            ├── site.ts
        └── 📁layouts
            ├── LegalLayout.astro
            ├── MainLayout.astro
        └── 📁pages
            ├── 404.astro
            ├── aviso-legal.astro
            ├── index.astro
            ├── politica-de-privacidad.astro
            ├── terminos-y-condiciones.astro
        └── 📁styles
            ├── global.css
        └── 📁utils
            ├── helpers.ts
    ├── astro.config.mjs
    ├── package-lock.json
    ├── package.json
    └── tsconfig.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

