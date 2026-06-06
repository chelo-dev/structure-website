Actúa como un Arquitecto Frontend Senior especializado en Astro 5, SEO Técnico, Core Web Vitals, Arquitectura Escalable de Frontend y Optimización Web.

Analiza mi proyecto Astro y realiza una auditoría completa.

Objetivos:

1. Maximizar SEO técnico y SEO local para México.
2. Obtener una puntuación Lighthouse superior a 95 en:

   * Performance
   * Accessibility
   * Best Practices
   * SEO
3. Reducir al mínimo el JavaScript enviado al cliente.
4. Optimizar imágenes, fuentes y assets.
5. Mejorar Core Web Vitals:

   * LCP
   * CLS
   * INP
6. Preparar la arquitectura para crecimiento futuro:

   * Blog
   * Casos de éxito
   * Páginas de servicios
   * Landing pages específicas
7. Aplicar buenas prácticas de Astro 5.

Información del proyecto:

Framework:

* Astro 5.17.1

Dependencias:

* @astrojs/sitemap
* astro-seo
* astro-particles
* tsparticles
* tsparticles-engine
* tsparticles-slim

Estructura actual:
```
└── 📁kharma-solutions
    └── 📁.astro
        └── 📁collections
        ├── content-assets.mjs
        ├── content-modules.mjs
        ├── content.d.ts
        ├── data-store.json
        ├── settings.json
        ├── types.d.ts
    └── 📁.vscode
        ├── extensions.json
        ├── launch.json
    └── 📁public
        └── 📁fonts
            ├── Inter-400.woff
            ├── Inter-400.woff2
            ├── Inter-500.woff
            ├── Inter-500.woff2
            ├── Inter-600.woff
            ├── Inter-600.woff2
            ├── Inter-700.woff
            ├── Inter-700.woff2
            ├── Inter-800.woff
            ├── Inter-800.woff2
            ├── Inter-Variable.ttf
            ├── Inter-Variable.woff
            ├── Inter-Variable.woff2
        └── 📁images
            └── 📁channels
                ├── google.svg
                ├── instagram.svg
                ├── messenger.svg
                ├── sms.svg
                ├── telegram.svg
                ├── whatsapp.svg
        ├── favicon-min.svg
        ├── favicon.ico
        ├── favicon.svg
        ├── manifest.json
        ├── robots.txt
    └── 📁src
        └── 📁assets
            └── 📁images
                └── 📁channels
                    ├── google.svg
                    ├── instagram.svg
                    ├── messenger.svg
                    ├── sms.svg
                    ├── telegram.svg
                    ├── whatsapp.svg
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
            ├── about.ts
            ├── contact.ts
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
            ├── reveal.ts
    ├── .gitignore
    ├── astro.config.mjs
    ├── CLAUDE.md
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── tsconfig.json
```

Archivos principales:

package.json

src/pages/index.astro

src/layouts/MainLayout.astro

Necesito que generes:

1. Auditoría técnica completa.
2. Problemas detectados.
3. Riesgos de rendimiento.
4. Riesgos SEO.
5. Nueva estructura de carpetas recomendada.
6. Estrategia de modularización.
7. Estrategia de Content Collections.
8. Estrategia SEO Local para México.
9. Estrategia de Schema Markup.
10. Estrategia de optimización de imágenes.
11. Estrategia de optimización de fuentes.
12. Estrategia de carga diferida.
13. Estrategia para minimizar JavaScript.
14. Estrategia para escalabilidad futura.
15. Roadmap de migración paso a paso priorizado por impacto.

Para cada recomendación incluye:

* Beneficio esperado.
* Complejidad.
* Impacto SEO.
* Impacto en Performance.
* Ejemplos de implementación.

Analiza y refactoriza el archivo:

src/components/sections/Contact.astro

Objetivo:
Sustituir completamente la implementación actual de envío de formularios por EmailJS.

Requisitos obligatorios:

Mantener exactamente la misma interfaz visual:
No modificar HTML innecesariamente.
No modificar estilos existentes.
No modificar clases CSS.
No modificar la experiencia visual del usuario.
Mantener la misma funcionalidad actual:
Validaciones existentes.
Estados de carga.
Mensajes de éxito.
Mensajes de error.
Comportamiento del formulario.
Reemplazar únicamente la lógica de integración de la API actual por EmailJS.
Implementar EmailJS utilizando:

Service ID:
service_f7f1dl3

Template ID:
template_9j99ogs

Public Key:
vXKaY9x-tJwvz2FXX

Mapear los campos del formulario a las variables del template:

{{nombre}} -> nombre
{{asunto}} -> asunto
{{email}} -> email
{{phone}} -> phone

Donde:

nombre es obligatorio
asunto es obligatorio
email es obligatorio
phone es opcional
La llamada debe utilizar la siguiente estructura:

emailjs.send(
"service_f7f1dl3",
"template_9j99ogs",
{
name: nombre,
subject: asunto,
email: email,
phone: telefono
}
);

Aplicar buenas prácticas:
Manejo de errores con try/catch.
Deshabilitar el botón durante el envío.
Evitar múltiples envíos simultáneos.
Limpiar el formulario después de un envío exitoso.
Mostrar errores amigables al usuario.
Tipado correcto en TypeScript.
No utilizar librerías adicionales distintas a EmailJS.
No exponer información sensible en el cliente.
Explicar detalladamente:
Qué cambios realizaste.
Qué código eliminaste.
Qué código agregaste.
Posibles mejoras futuras.

Entrega:

Código completo refactorizado.
Explicación paso a paso.
Justificación técnica de cada cambio.

