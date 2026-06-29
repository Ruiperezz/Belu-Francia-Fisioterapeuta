# TAREAS.md — Lista de trabajo por orden de prioridad

## FASE 1 — Imprescindible para publicar (hacer primero)

- [ ] **Separar HTML de páginas adicionales** 
  - `pages/servicios.html` — página completa de servicios
  - `pages/sobre-mi.html` — quién soy + método
  - `pages/contacto.html` — formulario + mapa

- [ ] **Integrar formulario con Formspree**
  - Crear cuenta en https://formspree.io
  - Obtener endpoint `https://formspree.io/f/XXXXXXXX`
  - Reemplazar el `TODO` en `index.html` sección contacto
  - Cambiar `<form id="contactForm">` por `<form action="https://formspree.io/f/XXXXXXXX" method="POST">`

- [ ] **Descargar y optimizar imágenes**
  - Ver `docs/IMAGENES.md` para la lista completa
  - Descargar desde belufisio.com (URLs en CLAUDE.md)
  - Convertir a WebP con `cwebp` o Squoosh
  - Reemplazar los `src="https://belufisio.com/..."` por `src="assets/img/..."`
  - Añadir `<picture>` con fallback JPG para Safari antiguo si necesario

- [ ] **Añadir Google Maps embed**
  - Pedir a Belu la dirección exacta de la clínica
  - Generar embed en https://maps.google.com
  - Añadir en la sección de contacto (`index.html` y `pages/contacto.html`)

- [ ] **Cookie banner RGPD**
  - Implementar el componente de `components/cookie-banner.html`
  - Debe gestionar: cookies necesarias, analítica, marketing
  - Guardar preferencias en `localStorage`

## FASE 2 — Antes del lanzamiento

- [ ] **Google Analytics / GA4**
  - Obtener ID de propiedad de Belu (o crear una nueva)
  - Añadir snippet SOLO si el usuario ha aceptado cookies de analítica

- [ ] **SEO local**
  - Revisar `<title>` y `<meta description>` en todas las páginas
  - Añadir schema.org LocalBusiness en JSON-LD
  - Añadir schema.org MedicalClinic
  - Verificar en Search Console

- [ ] **Responsive — revisión móvil**
  - Test en iOS Safari (iPhone 12+)
  - Test en Android Chrome
  - Test en tablet (iPad)
  - Breakpoints problemáticos: `sobre-mi` card flotante, `serv-block` grid

- [ ] **Performance**
  - Imágenes con `loading="lazy"` (ya está en hero: `eager`)
  - Fonts: añadir `font-display: swap` si se usan locales
  - Minificar CSS y JS para producción

- [ ] **Accesibilidad**
  - Revisar contraste en todos los textos (mínimo 4.5:1)
  - Verificar navegación por teclado
  - Revisar `alt` en todas las imágenes

## FASE 3 — Mejoras post-lanzamiento

- [ ] **Blog / Artículos** (si Belu quiere)
  - Sistema simple: archivos HTML en `pages/blog/`

- [ ] **Multiidioma** (inglés)
  - La web actual en belufisio.com tiene versión EN
  - Crear `en/index.html` y actualizar nav

- [ ] **Automatizaciones** (hacer con n8n + Claude Code)
  - Auto-respuesta por email al enviar formulario
  - Notificación a Belu por WhatsApp/email de nueva cita
  - Integración con Google Calendar
  - Ver plantillas en `Plantillasn8n.rar`

