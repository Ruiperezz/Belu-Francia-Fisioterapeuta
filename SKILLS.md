# SKILLS — Belu Francia Fisioterapia
## Guía completa de skills para Claude Code + Cursor

> Añade este archivo al repo: `docs/SKILLS.md`
> Claude Code lo leerá junto al CLAUDE.md para saber exactamente qué herramientas tiene disponibles y cuándo usarlas.

---

## RESUMEN RÁPIDO

| Prioridad | Skill | Para qué | Instalar |
|---|---|---|---|
| 🔴 OBLIGATORIA | `adrian-saenz-hostinger-premium-website` | Reglas técnicas, imágenes WebP, checklist deploy | Ya instalada |
| 🔴 OBLIGATORIA | `frontend-design` | Criterio de diseño, tipografía, copy editorial | Ya instalada |
| 🟡 IMPORTANTE | `wellness-product-copywriter` | Copy humano de servicios (fisioterapia, osteopatía...) | Ya instalada |
| 🟡 IMPORTANTE | `searchfit-seo:seo-audit` | SEO técnico, schema.org, meta tags | Instalar |
| 🟡 IMPORTANTE | `searchfit-seo:schema-markup` | JSON-LD para LocalBusiness + MedicalClinic | Instalar |
| 🟡 IMPORTANTE | `searchfit-seo:on-page-seo` | Títulos, descripciones, estructura H1/H2/H3 | Instalar |
| 🟢 ÚTIL | `wellness-social-content` | Posts de Instagram/Facebook si los necesitas | Ya instalada |
| 🟢 ÚTIL | `engineering:code-review` | Revisar el HTML/CSS/JS antes de publicar | Instalar |
| 🟢 ÚTIL | `design:accessibility-review` | WCAG AA, contraste, teclado | Instalar |
| ⚪ OPCIONAL | `operations:runbook` | Documentar el proceso de deploy a Hostinger | Instalar |

---

## SKILLS YA INSTALADAS (las tienes, solo actívalas en Cursor)

### 🔴 1. `adrian-saenz-hostinger-premium-website`
**Ruta:** `~/.claude/skills/user/adrian-saenz-hostinger-premium-website/`

Esta es la más importante del proyecto. Contiene:

**Qué hace:**
- Reglas técnicas no negociables (sin módulos ES, IIFE, cache busters)
- Pipeline de imágenes: descarga, convierte a WebP, optimiza por categoría
- Catálogo de efectos (cursor, reveals, GSAP card tilt, ticker, count-up)
- 10 arquetipos de diseño con paletas y efectos específicos
- Checklist de pre-deploy con 13 puntos verificables
- Guía de deploy a Hostinger (caché 3 capas)
- Gotchas críticos que rompen la web silenciosamente

**Cuándo Claude Code debe usarla:**
- Al tocar CUALQUIER HTML, CSS o JS del proyecto
- Al convertir imágenes
- Al verificar el proyecto antes de subir
- Al añadir animaciones o efectos

**Archivos de referencia clave:**
```
reference/01-stack-and-conventions.md  → reglas de stack
reference/03-effects-catalog.md        → cómo implementar cursor, reveals, GSAP...
reference/04-critical-gotchas.md       → errores que rompen la web silenciosamente
reference/05-image-and-asset-pipeline.md → WebP, tamaños, lazy loading
reference/08-pre-deploy-checklist.md   → checklist de 13 puntos antes de publicar
reference/10-deployment-and-cache.md   → cómo subir a Hostinger correctamente
```

**Scripts incluidos:**
```bash
# Convierte todas las imágenes a WebP automáticamente
python scripts/webp_convert.py --project belu-local

# Verifica que el proyecto no tiene errores técnicos
python scripts/verify_project.py --project belu-local
```

---

### 🔴 2. `frontend-design`
**Ruta:** `~/.claude/skills/public/frontend-design/`

**Qué hace:**
- Obliga a tomar decisiones de diseño deliberadas, no genéricas
- Criterio para tipografía: qué fuentes, qué pesos, qué escala
- Copy editorial: cómo escribir los textos para que no suenen a plantilla
- Autocrítica: "¿esto parece un tema de WordPress?"
- Restricción del gasto de "atención visual" en UN elemento principal

**Cuándo usarla:**
- Al revisar si el diseño tiene "wow factor"
- Al escribir o revisar copy de secciones
- Al decidir si añadir un efecto más o si ya hay suficientes
- Al elegir espaciados, márgenes, proporciones

**Principio clave que debe aplicar:**
> "Spend your boldness in one place. Let the signature element be the one memorable thing, keep everything around it quiet and disciplined."

En este proyecto: el elemento firma es el **hero con foto full-bleed + serif editorial + trust bar animado**. El resto debe ser austero.

---

### 🟡 3. `wellness-product-copywriter`
**Ruta:** `~/.claude/skills/user/wellness-product-copywriter/`

**Qué hace:**
- Genera copy persuasivo para servicios de salud y bienestar
- Evita el lenguaje clínico frío o el lenguaje de "influencer wellness"
- Tono: humano, cercano, sin exagerar promesas médicas
- Estructura: problema del paciente → método → resultado esperado

**Cuándo usarla:**
- Al revisar o reescribir las descripciones de servicios en index.html
- Al crear copy para páginas de servicio individuales (pages/servicios/)
- Al escribir el texto de la sección "Sobre mí"
- Al crear contenido para el blog (si se añade)

**Restricción importante para este proyecto:**
No inventar información médica. Solo usar lo que está en CLAUDE.md → sección "Servicios".

---

### 🟢 4. `wellness-social-content`
**Ruta:** `~/.claude/skills/user/wellness-social-content/`

**Cuándo usarla:**
- Si Belu pide crear posts de Instagram/Facebook para promocionar la web
- Al redactar el copy de la sección testimonios (tono de paciente real)
- Para crear una sección de blog básica

**No es prioritaria para el proyecto actual.** La web primero.

---

## SKILLS A INSTALAR (las necesitas para hacer un trabajo profesional completo)

### 🟡 5. `searchfit-seo:seo-audit`

**Qué hace:**
Auditoría SEO técnica completa. Revisa títulos, meta descriptions, estructura de headings, velocidad, indexabilidad, canonicals, robots.txt, sitemap.

**Por qué es necesaria:**
La web de Belu compite con otras clínicas locales en Cartagena. Sin SEO básico correcto, Google no la va a mostrar. Esta skill identifica exactamente qué falta.

**Cómo instalar:**
```
En Cursor → Claude Code → escribe:
"Instala la skill searchfit-seo:seo-audit"
```
O desde Claude.ai en la sección de skills del marketplace.

**Cuándo usarla en el proyecto:**
```
Prompt para Claude Code:
"Usa la skill searchfit-seo:seo-audit para auditar index.html y decirme
qué falta o está mal para el SEO local de una clínica en Cartagena"
```

---

### 🟡 6. `searchfit-seo:schema-markup`

**Qué hace:**
Genera JSON-LD de schema.org. Para este proyecto necesitamos:
- `LocalBusiness`
- `MedicalClinic` o `Physician`
- `Service` por cada servicio
- `FAQPage` (si se añade una sección de preguntas frecuentes)
- `Review` / `AggregateRating` para las reseñas

**Por qué es necesaria:**
El schema.org correcto hace que Google muestre la clínica con estrellitas, horario y dirección directamente en los resultados. Es la diferencia entre aparecer como un enlace genérico o como un resultado rico.

**Cómo instalar:**
```
En Cursor → Claude Code → escribe:
"Instala la skill searchfit-seo:schema-markup"
```

**Cuándo usarla:**
```
Prompt para Claude Code:
"Usa la skill searchfit-seo:schema-markup para generar el JSON-LD
completo de LocalBusiness + MedicalClinic para Belu Francia.
Datos en CLAUDE.md sección 'Datos de contacto'."
```

---

### 🟡 7. `searchfit-seo:on-page-seo`

**Qué hace:**
Optimiza una página específica para una keyword. Para `index.html` la keyword principal es **"fisioterapia Cartagena"** y secundarias **"osteopatía Cartagena"**, **"fisioterapeuta Cartagena"**.

**Por qué es necesaria:**
- Verifica que el H1 contiene la keyword
- Revisa densidad de keywords en el copy
- Sugiere mejoras en titles y meta descriptions
- Detecta si hay keyword stuffing (exceso que penaliza)

**Cuándo usarla:**
```
Prompt para Claude Code:
"Usa la skill searchfit-seo:on-page-seo para optimizar index.html
para la keyword principal 'fisioterapia Cartagena' y secundarias
'osteopatía Cartagena' y 'fisioterapeuta Cartagena Murcia'"
```

---

### 🟢 8. `engineering:code-review`

**Qué hace:**
Revisa el código buscando: seguridad, rendimiento, corrección, edge cases, errores silenciosos.

**Por qué es útil:**
Antes de subir la web a producción, pasa una revisión de código sobre `index.html`, `css/main.css`, `css/components.css` y `js/main.js`. Puede detectar:
- Fugas de memoria en los IntersectionObservers
- Event listeners que no se limpian
- CSS que causa layout shift (CLS malo para Core Web Vitals)
- Inputs de formulario sin sanitización

**Cuándo usarla:**
```
Prompt para Claude Code:
"Usa la skill engineering:code-review para revisar js/main.js
buscando fugas de memoria, event listeners sin limpiar y
errores silenciosos que puedan romper la web en producción"
```

---

### 🟢 9. `design:accessibility-review`

**Qué hace:**
Auditoría WCAG 2.1 AA. Revisa contraste de colores, navegación por teclado, screen readers, touch targets en móvil, focus visible.

**Por qué es importante:**
- En España hay legislación de accesibilidad web (RD 1112/2018)
- Afecta al SEO (Google considera accesibilidad en ranking)
- Belu tiene pacientes mayores que pueden tener dificultades visuales

**Cuándo usarla:**
```
Prompt para Claude Code:
"Usa la skill design:accessibility-review para auditar index.html
con foco en: contraste de texto sobre el hero oscuro, navegación
por teclado del formulario y las tarjetas de servicio, y touch
targets correctos en móvil para personas mayores"
```

---

### ⚪ 10. `operations:runbook`

**Qué hace:**
Genera un runbook (manual de operaciones) paso a paso para procesos repetibles.

**Por qué es útil:**
Documentar el proceso de deploy a Hostinger para que Belu (o cualquiera) pueda actualizar la web en el futuro sin necesidad de un técnico.

**Cuándo usarla:**
Al terminar el proyecto, para generar `docs/DEPLOY.md`:
```
Prompt para Claude Code:
"Usa la skill operations:runbook para documentar el proceso completo
de actualizar y subir la web de Belu Francia a Hostinger por FTP,
incluyendo: qué archivos cambiar, cómo hacer cache busting,
cómo hacer backup antes de subir, y cómo verificar que todo funciona"
```

---

## SKILLS QUE NO NECESITAS PARA ESTE PROYECTO

| Skill | Por qué no aplica |
|---|---|
| `shopify-*` (todas) | Son para Zenconfort, no para una web estática |
| `shopify-seo-audit` | Es SEO específico de Shopify, usa searchfit-seo en su lugar |
| `wellness-email-marketing` | Solo cuando Belu quiera campañas de email (futuro) |
| `mcp-builder` | No hay MCPs en este proyecto |
| `algorithmic-art` | Arte generativo, no aplica a web de clínica |
| `canvas-design` | Para pósters y diseños estáticos, no para web |
| `slack-gif-creator` | No relevante |

---

## CÓMO ACTIVAR LAS SKILLS EN CURSOR

### Método 1 — Desde Claude Code directamente
Escribe en el chat de Claude Code:
```
Quiero que uses las siguientes skills para este proyecto:
- adrian-saenz-hostinger-premium-website (ya instalada)
- frontend-design (ya instalada)
- wellness-product-copywriter (ya instalada)
Lee sus SKILL.md antes de empezar a trabajar.
```

### Método 2 — Instalar skills que faltan
Para las skills de searchfit-seo y las demás que no tienes:
```bash
# Desde la terminal de Cursor
claude plugin marketplace search searchfit-seo
claude plugin marketplace add searchfit-seo:seo-audit
claude plugin marketplace add searchfit-seo:schema-markup
claude plugin marketplace add searchfit-seo:on-page-seo
claude plugin marketplace add engineering:code-review
claude plugin marketplace add design:accessibility-review
```

### Método 3 — Añadir al CLAUDE.md del proyecto
Añade esta sección al final de `CLAUDE.md`:

```markdown
## Skills activas para este proyecto

Claude Code debe usar estas skills en las situaciones indicadas:

- `adrian-saenz-hostinger-premium-website`: SIEMPRE que toques HTML/CSS/JS
- `frontend-design`: Al revisar diseño, copy o efectos
- `wellness-product-copywriter`: Al escribir copy de servicios
- `searchfit-seo:schema-markup`: Para el JSON-LD de schema.org
- `searchfit-seo:on-page-seo`: Al revisar SEO de páginas
- `engineering:code-review`: Antes de publicar, para revisar JS
- `design:accessibility-review`: Para verificar WCAG AA
```

---

## ORDEN DE USO EN EL PROYECTO

Este es el orden en el que debes usar las skills mientras trabajas:

```
INICIO DEL PROYECTO
│
├─ 1. adrian-saenz-hostinger-premium-website
│     → Descargar imágenes, convertir a WebP
│     → Verificar que index.html cumple las reglas técnicas
│
├─ 2. frontend-design
│     → Revisar que el diseño no parece template genérico
│     → Verificar que el copy es editorial, no de folleto
│
├─ 3. wellness-product-copywriter
│     → Mejorar descripciones de servicios si suenan muy clínicas
│
├─ 4. searchfit-seo:schema-markup
│     → Generar JSON-LD de LocalBusiness + MedicalClinic
│     → Añadir al <head> de index.html
│
├─ 5. searchfit-seo:on-page-seo
│     → Optimizar para "fisioterapia Cartagena"
│     → Revisar H1, meta description, densidad keywords
│
├─ 6. engineering:code-review
│     → Revisar js/main.js antes de publicar
│     → Buscar memory leaks y event listeners huérfanos
│
├─ 7. design:accessibility-review
│     → Verificar contraste, teclado, touch targets
│
├─ 8. adrian-saenz-hostinger-premium-website (checklist)
│     → Ejecutar scripts/verify_project.py
│     → Pasar la pre-deploy checklist de 13 puntos
│
└─ DEPLOY A HOSTINGER
      → Guía en reference/10-deployment-and-cache.md
```

---

## PROMPT RÁPIDO PARA EMPEZAR

Copia esto en Claude Code cuando abras el proyecto en Cursor:

```
Lee CLAUDE.md y docs/SKILLS.md antes de empezar.

Para este proyecto tienes activas las siguientes skills:
- adrian-saenz-hostinger-premium-website: úsala para reglas técnicas,
  conversión de imágenes a WebP y checklist de pre-deploy
- frontend-design: úsala al revisar diseño y copy
- wellness-product-copywriter: úsala al tocar descripciones de servicios

Las skills de SEO (searchfit-seo) las instalaremos cuando lleguemos
a la Fase 4 del CLAUDE.md.

Empieza por la Fase 1: descargar las imágenes de docs/IMAGENES.md,
convertirlas a WebP usando el pipeline de la skill
adrian-saenz-hostinger-premium-website, y actualizar los src
en index.html con las rutas locales.
```

---

## NOTAS FINALES

**Por qué no más skills:**
Más skills = más contexto que Claude Code tiene que procesar = respuestas más lentas y menos precisas. Con estas 7-8 skills tienes cubierto el 100% de lo que necesita este proyecto.

**Skills propias a crear (futuro):**
Si trabajas mucho con clínicas de fisioterapia en el futuro, tiene sentido crear una skill personalizada `fisioterapia-web-local` que combine las reglas de diseño, el copy de salud y el SEO local en un solo archivo. Usa la skill `skill-creator` cuando llegue ese momento.

**Actualizar este documento:**
Cuando instales las skills de searchfit-seo, cambia su estado de "Instalar" a "Instalada" en la tabla de resumen al inicio.
