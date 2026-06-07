# Notas del proyecto — Portfolio Martin Acebey

## Stack
Next.js + Tailwind + Framer Motion. Bilingüe (es/en).

## Separación de datos

| Archivo | Qué va ahí |
|---|---|
| `config/site.config.ts` | Datos no traducibles: URLs, años, institución, `descriptionKey` |
| `lib/translations.ts` | Todos los textos visibles al usuario en `en` y `es` |
| `types/index.ts` | Tipos TypeScript para `SiteConfig` |

## Internacionalización

- Hook `useTranslation()` devuelve `{ t, language }`.
- **Regla:** ningún texto visible al usuario va hardcodeado en un componente ni solo en español en el config.
- Para arrays del config con texto traducible (publications, community): agregar un `descriptionKey` en el config que mapee a una key en `translations.publicationDescriptions` o `translations.communityItems`.

## Espaciado de secciones

- Secciones usan `py-14 px-6`.
- Hero no usa `min-h-screen` — esa clase causaba exceso de espacio vertical.

## Convención de componentes

- Datos estáticos estructurales (title, year, icon, type, url) → `site.config.ts`
- Textos de descripción/rol visibles → `translations.ts` bajo una key tipada

## Patrón para entradas con texto traducible (ej. Experience)

- En `content/*.json` o `site.config.ts`: solo datos estructurales (id, company, period, techStack) + una `roleKey`/`descriptionKey` que mapea a `translations.ts`.
- En `translations.ts`: un objeto `experienceRoles` (o similar) con un sub-objeto por key, en `en` y `es`, conteniendo todos los campos visibles (role, periodLabel, duration, industry, achievements). Mismo patrón ya usado en `publicationDescriptions`/`communityItems`.
- Campos como `location` que mezclan dato estructural y texto traducible (ej. "(Remoto)"/"(Remote)") → mover a un mapa de traducción separado (`experienceLocations`) keyed por id de empresa, no dejarlos en el JSON estructural.
- Al portar datos legacy con texto hardcodeado en español: SIEMPRE revisar y traducir antes de reestructurar — es fácil arrastrar el texto en español a la nueva key sin notarlo.

## UI/UX para listas jerárquicas (ej. una empresa con varios roles)

- Agrupar visualmente como LinkedIn: un header de empresa una sola vez + roles apilados verticalmente con su propia mini-timeline interna — NO usar slider/carrusel para esto (probado y rechazado por el usuario).
- Detalles largos (achievements, tech stack) → colapsados por defecto en un acordeón por rol, excepto el rol más reciente/actual (`period.end === null`), que debe mostrarse expandido por defecto.
- Mostrar el conector de timeline (punto + línea) solo cuando una entidad tiene múltiples sub-items (`roles.length > 1`); ocultarlo si solo hay uno.
