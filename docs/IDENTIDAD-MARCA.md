# Identidad de marca — Kharma Solutions

## 1. Identidad

- **Nombre:** Kharma Solutions
- **Tagline:** Desarrollo Web & Sistemas a Medida
- **Descripción:** Sitio de Angel Paredes Torres, desarrollador web independiente. Crea sitios web y sistemas administrativos personalizados para negocios y emprendedores.
- **Mercado:** México (locale `es_MX`), con foco en Morelos.
- **Persona detrás de la marca:** Angel Paredes Torres — Desarrollador Web.
- **Tono visual:** profesional, técnico, confiable — navy oscuro para autoridad/seriedad, cyan brillante como acento de energía/tecnología.
- **Tipografía:** Inter (400/500/600/700/800), local y subsetada por peso, con fallback métrico `Inter Fallback` (basado en Arial) para evitar CLS.

## 2. Paleta de colores

Origen: derivada del logo (`src/assets/logo.svg`) — **navy `#132e59`** + **cyan `#2eaad0` / `#59c4e2`**.
Definida en `src/styles/global.css` como custom properties en `:root`. Los componentes consumen **solo los tokens semánticos** (sección 2.3), nunca los valores de escala directamente.

### 2.1 Escala Navy (superficies oscuras, texto)

| Token CSS      | Hex       | Uso típico                     |
|-----------------|-----------|---------------------------------|
| `--navy-900`    | `#08182f` | Superficie inversa (fondo oscuro más profundo), texto fuerte |
| `--navy-800`    | `#0d2344` | Superficie inversa elevada (cards sobre fondo oscuro) |
| `--navy-700`    | `#132e59` | Color de marca principal — texto base, skip-link |
| `--navy-600`    | `#1d4174` | Gradiente de acento (inicio) |
| `--navy-500`    | `#2a568f` | Hover de borde en botón secundario |
| `--navy-tint-200` | `#a8bdd4` | Texto secundario sobre navy (9.2:1) |
| `--navy-tint-300` | `#7f99b8` | Variante de tint sobre navy |

### 2.2 Escala Cyan (acento de marca)

| Token CSS     | Hex       | Uso típico                          |
|----------------|-----------|---------------------------------------|
| `--cyan-200`   | `#b3e5f2` | Tinte muy claro |
| `--cyan-300`   | `#7dd3ea` | Hover de botón sobre fondo oscuro |
| `--cyan-400`   | `#59c4e2` | Acento sobre fondo oscuro (8.8:1) |
| `--cyan-500`   | `#2eaad0` | Acento decorativo — 2.7:1, **nunca** como texto ni UI informativa |
| `--cyan-600`   | `#1c87a8` | Anillo de foco (`--focus-ring`) |
| `--cyan-700`   | `#146b87` | Texto/enlaces de acento — 6.0:1 sobre blanco |
| `--cyan-800`   | `#125d75` | Hover de botón primario (oscurece) |

### 2.3 Neutros

| Token CSS   | Hex       |
|--------------|-----------|
| `--white`    | `#ffffff` |
| `--gray-50`  | `#f7f9fc` |
| `--gray-100` | `#eef2f8` |
| `--gray-200` | `#dde5ef` |
| `--gray-300` | `#c3cfde` |
| `--gray-400` | `#93a3b8` |
| `--gray-500` | `#64748b` |
| `--gray-600` | `#475569` |
| `--gray-700` | `#334155` |

### 2.4 Tokens semánticos (los que se usan en componentes)

**Superficies**
- `--surface: var(--white)` — fondo base claro
- `--surface-sunken: var(--gray-50)` — secciones alternas (`.section--sunken`)
- `--surface-raised: var(--white)` — cards
- `--surface-inverse: var(--navy-900)` — secciones oscuras (`.section--inverse`)
- `--surface-inverse-raised: var(--navy-800)` — cards sobre fondo oscuro

**Texto**
- `--text: var(--navy-700)` — texto base, 13.4:1 sobre blanco
- `--text-strong: var(--navy-900)` — títulos
- `--text-muted: var(--gray-500)` — texto secundario
- `--text-inverse: var(--white)` — texto sobre fondo oscuro, 17.8:1
- `--text-inverse-muted: var(--navy-tint-200)` — texto secundario sobre fondo oscuro, 9.2:1

**Acento**
- `--accent: var(--cyan-500)` — relleno decorativo únicamente
- `--accent-graphic: var(--cyan-700)` — gráficos que comunican info (WCAG 1.4.11), 6.0:1
- `--accent-strong: var(--cyan-800)` — hover de botón primario
- `--accent-text: var(--cyan-700)` — texto/enlaces de acento, 6.0:1 sobre blanco
- `--accent-on-dark: var(--cyan-400)` — acento sobre navy, 8.8:1
- `--accent-soft: rgba(46, 170, 208, 0.1)` — fondo sutil (halo, chip)
- `--accent-soft-border: rgba(46, 170, 208, 0.24)` — borde sutil a juego

**Bordes**
- `--border: var(--gray-200)`
- `--border-subtle: var(--gray-100)`
- `--border-strong: var(--gray-300)`
- `--border-inverse: rgba(255, 255, 255, 0.12)`
- `--border-inverse-strong: rgba(255, 255, 255, 0.22)`

**Foco (WCAG 2.4.7)**
- `--focus-ring: var(--cyan-600)`
- `--focus-ring-inverse: var(--cyan-300)`

**Degradados** (uso restringido: 2-3 apariciones por página)
- `--gradient-accent: linear-gradient(135deg, var(--navy-600), var(--cyan-500))`
- `--gradient-accent-bright: linear-gradient(135deg, var(--cyan-500), var(--cyan-300))`

**Sombras** (teñidas de navy, no negro puro)
- `--shadow-sm: 0 1px 2px rgba(8, 24, 47, 0.06)`
- `--shadow-md: 0 4px 16px rgba(8, 24, 47, 0.08)`
- `--shadow-lg: 0 12px 32px rgba(8, 24, 47, 0.1)`
- `--shadow-xl: 0 24px 56px rgba(8, 24, 47, 0.14)`

### 2.5 Clases utilitarias relacionadas con color

| Clase | Efecto |
|---|---|
| `.section` | fondo `--surface` |
| `.section--sunken` | fondo `--surface-sunken` |
| `.section--inverse` | fondo `--surface-inverse`, texto `--text-inverse`; ajusta automáticamente `.eyebrow`, `.section-title`, `.section-lead`, `.link-underline` a sus variantes "on-dark" |
| `.btn--primary` | texto blanco sobre `--accent-text` (cyan-700), hover `--accent-strong` (cyan-800) |
| `.btn--secondary` | texto `--text`, borde `--border-strong`, hover fondo `--gray-50` / borde `--navy-500` |
| `.btn--on-dark` | texto `--navy-900` sobre `--accent-on-dark` (cyan-400), hover `--cyan-300` |
| `.btn--ghost-on-dark` | texto `--text-inverse`, borde `--border-inverse-strong` |
| `.link-underline` | color `--accent-text`; sobre `.section--inverse` cambia a `--accent-on-dark` |
| `.eyebrow` | color `--accent-text`; sobre `.section--inverse` cambia a `--accent-on-dark` |
| `.on-dark` | fuerza el anillo de foco a `--focus-ring-inverse` |

### 2.6 Reglas de accesibilidad de color (ya aplicadas, no romper)

- `--cyan-500` (`#2eaad0`, ratio 2.7:1) es **solo decorativo** — nunca usarlo como color de texto ni de UI informativa.
- Todo texto de acento usa `--cyan-700` (6.0:1) o `--cyan-400` sobre fondo oscuro (8.8:1).
- El hover de botones primarios siempre **oscurece** (cyan-700 → cyan-800), nunca aclara, para mantener contraste.
- Los anillos de foco cambian de `--cyan-600` a `--cyan-300` sobre superficies oscuras (clase `.on-dark`).

## 3. Tipografía

- **Familia:** `'Inter', 'Inter Fallback', system-ui, -apple-system, sans-serif`
- **Pesos disponibles:** 400, 500, 600, 700, 800 (WOFF2 local, subsetados)
- **Escala fluida** (`clamp()`): `--text-xs` (0.75rem) → `--text-5xl` (2.5rem–4.5rem)
- **Tracking:** `--tracking-tight: -0.02em`, `--tracking-tighter: -0.035em` (títulos), `--tracking-wide: 0.1em` (eyebrows/mayúsculas)

## 4. Radios y transiciones (identidad de interacción)

- **Radios:** `--radius-sm: 0.375rem` → `--radius-full: 9999px` (botones tipo píldora)
- **Transiciones:** `--transition-fast: 0.18s`, `--transition-base: 0.32s`, curva `--ease-out-expo` para scroll-reveal
- **Transiciones de página:** nativas vía `@view-transition` (0 KB de JS)

---
Fuente única de verdad: `src/styles/global.css`. Actualizar este documento si se modifican tokens.
