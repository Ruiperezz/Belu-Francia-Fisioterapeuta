# CLAUDE.md — Belu Francia Fisioterapia
## Instrucciones para Claude Code + Cursor

> **Lee este archivo entero antes de tocar cualquier código.**  
> Contiene todo el contexto del proyecto, decisiones de diseño, datos reales de la clínica y las tareas pendientes.

---

## 🏥 El proyecto

**Cliente:** Belu Francia  
**Negocio:** Clínica de Fisioterapia y Osteopatía  
**Web actual (a reemplazar):** https://belufisio.com/  
**Repo:** https://github.com/Ruiperezz/Belu-Francia-Fisioterapeuta  
**Desarrollador:** Ruipérez Studio (ruiperezstudio.es)

### Objetivo
Web estática premium en HTML/CSS/JS puro. Sin frameworks, sin npm, sin build step.  
Debe ser drag-and-drop a Hostinger por FTP.  
Diseño orientado a **captación de pacientes locales en Cartagena**.

---

## 📁 Estructura del proyecto

```
/
├── index.html              ← Home (página principal)
├── pages/
│   ├── servicios.html      ← Página de servicios detallada
│   ├── tecnologia.html     ← Tecnología y aparatología
│   ├── sobre-mi.html       ← Quién soy / método
│   └── contacto.html       ← Contacto y formulario
├── css/
│   ├── main.css            ← Estilos globales + tokens
│   ├── components.css      ← Componentes reutilizables (nav, footer, cards...)
│   └── animations.css      ← Reveals, transitions, GSAP helpers
├── js/
│   ├── main.js             ← IIFE principal (nav, cursor, reveals, form)
│   ├── gsap.min.js         ← GSAP 3.12.5 (local, sin CDN)
│   └── ScrollTrigger.min.js← ScrollTrigger plugin (local)
├── assets/
│   ├── img/
│   │   ├── hero/           ← Foto principal hero (descargar de belufisio.com)
│   │   ├── servicios/      ← Fotos por servicio
│   │   ├── tecnologia/     ← Fotos del equipamiento
│   │   ├── galeria/        ← Galería de la clínica
│   │   └── sobre-mi/       ← Foto de Belu
│   ├── icons/              ← SVG icons (inline en HTML, no como img)
│   └── fonts/              ← Si se usan fuentes locales (por ahora CDN)
├── components/             ← Fragmentos HTML reutilizables (referencia)
│   ├── nav.html
│   ├── footer.html
│   └── cookie-banner.html
├── docs/
│   ├── CONTENIDO.md        ← Todo el contenido real de la web
│   ├── IMAGENES.md         ← Mapa de imágenes (URLs originales → destino)
│   └── TAREAS.md           ← Lista de tareas pendientes por orden
├── .htaccess               ← Cache headers para Hostinger
├── CLAUDE.md               ← Este archivo
└── README.md               ← Documentación del proyecto
```

---

## 🎨 Sistema de diseño

### Paleta de colores (tokens CSS)

```css
:root {
  /* BASE */
  --bg:          #F7F3EE;   /* crema cálido — fondo principal */
  --bg-2:        #EDE8E1;   /* arena — fondo alternativo (secciones) */
  --paper:       #FFFFFF;   /* blanco puro — cards, formularios */
  --ink:         #1C1917;   /* casi negro cálido — textos principales */
  --ink-soft:    #44403C;   /* texto cuerpo */
  --ink-mute:    #78716C;   /* texto secundario, placeholders */

  /* PALETA PRINCIPAL */
  --azul:        #1D4ED8;   /* Confianza clínica — CTAs principales, links */
  --azul-hover:  #1E40AF;   /* Hover de azul */
  --azul-pale:   #EFF6FF;   /* Fondo suave azul — banners, info */
  --azul-mid:    #3B82F6;   /* Azul medio — hover states */

  --teal:        #0D9488;   /* Bienestar activo — checks, éxito, acentos */
  --teal-pale:   #F0FDFA;   /* Fondo suave teal */

  --tierra:      #B45309;   /* Calidez humana — ATM section, blockquotes */
  --tierra-lt:   #FEF3C7;   /* Fondo tierra claro */
  --tierra-acc:  #D97706;   /* Acento tierra más brillante */

  /* UI */
  --line:        rgba(28,25,23,0.10);   /* bordes */
  --line-soft:   rgba(28,25,23,0.055);  /* bordes muy suaves */
  --shadow:      0 2px 24px rgba(28,25,23,0.07);
  --shadow-lg:   0 12px 48px rgba(28,25,23,0.12);

  /* LAYOUT */
  --nav-h:  72px;
  --max-w:  1180px;
  --pad:    clamp(20px, 5vw, 52px);

  /* RADIUS */
  --r:      16px;
  --r-sm:   8px;
  --r-lg:   24px;

  /* TIPOGRAFÍA */
  --ff-serif: 'Fraunces', Georgia, serif;
  --ff-sans:  'Inter', system-ui, -apple-system, sans-serif;
}
```

### Tipografía

| Rol | Fuente | Peso | Uso |
|-----|--------|------|-----|
| Display / Headlines | Fraunces (variable) | 300–500 | h1, h2, h3, logo |
| Body | Inter | 300–600 | Todo el texto body |
| Eyebrow | Inter | 500 | Etiquetas de sección uppercase |

```html
<!-- En <head> de cada página -->
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;1,9..144,300;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet"/>
```

### Botones

```css
/* Siempre border-radius: 100px (píldora) */
.btn-primary   → background: var(--azul), color: #fff
.btn-secondary → border: 1.5px solid var(--line), background: transparent
.btn-wa        → background: #25D366, color: #fff (WhatsApp)
.btn-ghost     → sin fondo, solo border-bottom, para fondos oscuros
```

---

## 📋 Contenido real de la clínica

### Datos de contacto (reales, no inventar)

```
Nombre:    Belu Francia
Teléfono:  639 290 762
Email:     belufrancia@gmail.com
WhatsApp:  https://wa.me/message/27PLZRZVNFRQN1
Instagram: https://www.instagram.com/belufisio/
Facebook:  https://www.facebook.com/belufisio/
Ubicación: Cartagena, Murcia
Horario:   Lunes–Viernes 9:00–20:00 / Sábado 9:00–14:00
```

### Formación acreditada de Belu (real)

- Diplomada en Fisioterapia — Universidad de Murcia
- Osteópata C.O. — Formación Belgo-española de Osteopatía (FBEO)
- Especialista en terapia manual, punción seca y electropunción
- Especialista en ecografía clínica
- Más de 15 años de experiencia

### Trust bar (hero)

```
+15 años de experiencia | +200 pacientes recuperados | ★ 5.0 Google Reviews
```

---

## 🩺 Servicios (contenido real extraído de belufisio.com)

### 1. Fisioterapia personalizada

**Enfoque:** Combinación de terapia manual, ejercicio terapéutico y técnicas avanzadas para tratar la causa del dolor, no solo el síntoma. Método integrativo basado en diagnóstico neuromuscular.

**Tratamientos:**
- Dolor cervical, dorsal y lumbar
- Contracturas y tensión muscular
- Lesiones deportivas (tendinitis, esguinces, sobrecargas)
- Recuperación muscular y optimización del rendimiento
- Rehabilitación post-operatoria
- Prevención de lesiones y desequilibrios posturales

**Imagen:** `assets/img/servicios/fisioterapia.jpg`  
**URL original:** `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-16-25-09-scaled.jpg`

---

### 2. Osteopatía

**Enfoque:** Trata el cuerpo como un todo buscando el origen real de la alteración. Técnicas manuales suaves para el sistema músculo-esquelético, visceral y craneal.

**Tratamientos:**
- Osteopatía estructural (articulaciones, músculos, tejidos)
- Bloqueos articulares y restricciones de movilidad
- Dolor de cabeza y migrañas de origen tensional
- Problemas musculares y articulares de origen no claro
- Valoración postural integrada (VAF INTECC)

**Imagen:** `assets/img/servicios/osteopatia.jpg`  
**URL original:** `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-17-34-04-scaled.jpg`

---

### 3. Rehabilitación y readaptación

**Enfoque:** Recuperación funcional tras lesión o cirugía de forma progresiva y supervisada. Objetivo: volver a moverse con confianza y sin miedo a recaer.

**Tratamientos:**
- Rehabilitación deportiva (esguinces, roturas, sobrecargas)
- Readaptación tras lesiones musculares o articulares
- Recuperación funcional post-cirugía
- Vuelta progresiva al deporte o la actividad laboral
- Corrección de patrones de movimiento y prevención de recaídas

**Imagen:** `assets/img/servicios/rehabilitacion.jpg`  
**URL original:** `https://belufisio.com/wp-content/uploads/2024/12/IMG_4343.jpg`

---

### 4. Ejercicio terapéutico

**Enfoque:** Movimiento bien prescrito para mantener resultados. Programas individualizados adaptados al estado y objetivos de cada paciente.

**Tratamientos:**
- Corrección postural y control corporal
- Activación funcional y estabilidad articular
- Recuperación de movilidad y amplitud de movimiento
- Programas individualizados de prevención
- Ejercicio adaptado a dolor crónico

**Imagen:** `assets/img/servicios/ejercicio.jpg`  
**URL original:** `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-17-28-16-scaled.jpg`

---

### 5. ATM y Bruxismo (servicio destacado)

**Enfoque:** La articulación temporomandibular puede provocar dolor de cabeza, tensión cervical, mareos y pitidos en oídos. Tratamiento multidisciplinar con terapia manual + radiofrecuencia + ejercicios específicos.

**Imagen:** `assets/img/servicios/atm.jpg`  
**URL original:** `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-16-46-04-scaled.jpg`

---

## 🔬 Tecnología real de la clínica

### 1. Diatermia · SYMPHIUM-ONE PLUS®
- **Qué es:** Ondas electromagnéticas que generan calor en tejidos profundos
- **Para qué:** Activa metabolismo celular, mejora circulación, elimina desechos
- **Indicaciones:** Tendinitis, bursitis, calcificaciones, roturas fibrilares, artrosis, edema óseo, fascitis plantar, metatarsalgias, neuromas
- **Imagen:** `assets/img/tecnologia/diatermia.jpg`
- **URL original:** `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-17-43-56-1-scaled.jpg`

### 2. Ondas de choque · SYMPHIUM-ELEVEN PLUS®
- **Qué es:** Ondas sonoras de alta potencia con efectos mecánicos y biológicos
- **Para qué:** Alivian dolor, reducen inflamación, fragmentan depósitos de calcio, estimulan regeneración tisular
- **Indicaciones:** Tendinopatías, fascitis, espolones, calcificaciones, pseudoartrosis
- **Imagen:** `assets/img/tecnologia/ondas-choque.jpg`
- **URL original:** `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-17-40-41-scaled.jpg`

### 3. Ecografía · V SCAN Air™ SL
- **Qué es:** Diagnóstico por imagen directamente en consulta
- **Software:** Caption Guidance™ (guía en tiempo real)
- **Para qué:** Imágenes de calidad diagnóstica para guiar el tratamiento con precisión
- **Imagen:** `assets/img/tecnologia/ecografia.jpg`
- **URL original:** `https://belufisio.com/wp-content/uploads/2024/12/93FD7461-22CD-43D4-8BDF-BFE721F09EFE.jpg`

### 4. Presoterapia · PACK SIZEN 8e®
- **Qué es:** Presión estratégica de aire que activa el sistema linfático
- **Para qué:** Mejora circulación sanguínea, reduce edema, relaja tejidos
- **Indicaciones:** Deportistas (recuperación activa), retención de líquidos, pesadez de piernas
- **Imagen:** `assets/img/tecnologia/presoterapia.jpg`
- **URL original:** `https://belufisio.com/wp-content/uploads/2024/12/IMG_4416.jpg`

### 5. Electroneuroacupuntura · EnA®
- **Qué es:** Integra neuromodulación, punción seca y electrolisis
- **Para qué:** Modula sistema nervioso vegetativo e inmune a nivel local y global
- **Protocolo:** Único y específico por paciente
- **Imagen:** `assets/img/tecnologia/ena.jpg`
- **URL original:** `https://belufisio.com/wp-content/uploads/2024/12/Foto-5-11-24-16-35-56-scaled.jpg`

### 6. Valoración postural · VAF INTECC
- **Qué es:** Análisis objetivo de cómo se organiza el cuerpo mediante fotografías y mediciones
- **Para qué:** Evalúa alineación, curvas de columna, pelvis, hombros, compensaciones
- **Resultado:** Informe detallado + explicación clínica + ejercicios correctivos personalizados
- **Imagen:** `assets/img/tecnologia/vaf.jpg`
- **URL original:** `https://belufisio.com/wp-content/uploads/2026/05/228762da43615752cdbe11922a2cd6d4-e1778493980444.jpg`

---

## 🖼️ Imágenes (mapa completo)

> **IMPORTANTE:** Las imágenes del preview HTML cargan directamente desde belufisio.com.  
> Para producción hay que descargarlas, optimizarlas a WebP y servirlas localmente.  
> Ver `docs/IMAGENES.md` para el proceso completo.

| Archivo local | URL original en belufisio.com | Sección |
|---|---|---|
| `assets/img/hero/hero-principal.jpg` | `Foto-5-11-24-17-03-16-scaled.jpg` | Hero |
| `assets/img/servicios/fisioterapia.jpg` | `Foto-5-11-24-16-25-09-scaled.jpg` | Servicio 1 |
| `assets/img/servicios/osteopatia.jpg` | `Foto-5-11-24-17-34-04-scaled.jpg` | Servicio 2 |
| `assets/img/servicios/rehabilitacion.jpg` | `IMG_4343.jpg` | Servicio 3 |
| `assets/img/servicios/ejercicio.jpg` | `Foto-5-11-24-17-28-16-scaled.jpg` | Servicio 4 |
| `assets/img/servicios/atm.jpg` | `Foto-5-11-24-16-46-04-scaled.jpg` | ATM |
| `assets/img/tecnologia/diatermia.jpg` | `Foto-5-11-24-17-43-56-1-scaled.jpg` | Tec 1 |
| `assets/img/tecnologia/ondas-choque.jpg` | `Foto-5-11-24-17-40-41-scaled.jpg` | Tec 2 |
| `assets/img/tecnologia/ecografia.jpg` | `93FD7461-22CD-43D4-8BDF-BFE721F09EFE.jpg` | Tec 3 |
| `assets/img/tecnologia/presoterapia.jpg` | `IMG_4416.jpg` | Tec 4 |
| `assets/img/tecnologia/ena.jpg` | `Foto-5-11-24-16-35-56-scaled.jpg` | Tec 5 |
| `assets/img/tecnologia/vaf.jpg` | `228762da43615752cdbe11922a2cd6d4-e1778493980444.jpg` | Tec 6 |
| `assets/img/sobre-mi/belu-principal.jpg` | `IMG_0240-scaled.jpg` | Sobre mí |
| `assets/img/galeria/galeria-1.jpg` | `Foto-5-11-24-17-03-16-scaled.jpg` | Galería |
| `assets/img/galeria/galeria-2.jpg` | `Foto-5-11-24-17-20-06-scaled.jpg` | Galería |
| `assets/img/galeria/galeria-3.jpg` | `IMG_0210-scaled.jpg` | Galería |
| `assets/img/galeria/galeria-4.jpg` | `IMG_0196-scaled.jpg` | Galería |
| `assets/img/galeria/galeria-5.jpg` | `IMG_0215-scaled.jpg` | Galería |
| `assets/img/metodo/metodo-1.jpg` | `Foto-5-11-24-17-19-51-1-scaled-e1778491140750.jpg` | Método |

---

## ⚙️ Reglas técnicas obligatorias

### 1. NUNCA usar `type="module"`
```html
<!-- ✅ CORRECTO -->
<script defer src="js/gsap.min.js"></script>
<script defer src="js/main.js"></script>

<!-- ❌ PROHIBIDO — falla en file:// y en Hostinger sin config -->
<script type="module" src="js/main.js"></script>
```

### 2. SIEMPRE IIFE en JavaScript
```javascript
// ✅ CORRECTO
(function() {
  'use strict';
  // todo el código aquí
})();

// ❌ PROHIBIDO
import { gsap } from './gsap.js';
export default function init() {}
```

### 3. Cache busters en todos los assets
```html
<link rel="stylesheet" href="css/main.css?v=20260629"/>
<script defer src="js/main.js?v=20260629"></script>
```

### 4. Safety net de 5 segundos para animaciones
```javascript
// Al inicio del JS, siempre:
setTimeout(function() {
  document.querySelectorAll('.r-up, .r-l, .r-r').forEach(function(el) {
    el.classList.add('r-done');
  });
}, 5000);
```

### 5. prefers-reduced-motion — NO desactivar micro-interacciones
Solo desactivar: partículas, parallax >40px, loops rápidos.  
NO desactivar: hover tilt, fades on scroll, cursor, count-up.

### 6. GSAP siempre local (no CDN)
Los archivos `js/gsap.min.js` y `js/ScrollTrigger.min.js` deben estar en el repo.  
No usar `<script src="https://cdnjs.cloudflare.com/...">`.

---

## 🎯 Efectos a implementar (exactamente estos 4-5)

1. **Custom cursor** — dos círculos, dot fijo + ring con lag (18% lerp)
2. **Scroll reveals** — IntersectionObserver, clases `.r-up`, `.r-l`, `.r-r` → `.in`
3. **GSAP card tilt** — hover en tarjetas, máximo 4°, `transformPerspective: 900`
4. **Count-up animado** — en trust bar del hero, `data-count` attribute
5. **Ticker infinito** — animación CSS pura, `pause on hover`

**NO añadir más efectos.** Más de 5 = web que parece showcase, no producto.

---

## 📝 Secciones de la Home (index.html)

1. **Nav** — Sticky, transparente → sólido en scroll. Logo + links + CTA "Pedir cita"
2. **Hero** — Foto full-bleed, scrim oscuro, headline serif + trust bar
3. **Ticker** — Barra azul con servicios en loop
4. **Método** — Grid 2 cols: foto Belu + 3 pasos del método
5. **Servicios** — 4 bloques alternados con foto real + lista de tratamientos
6. **ATM Highlight** — Sección destacada sobre ATM/bruxismo (fondo tierra claro)
7. **Tecnología** — Grid de 6 tarjetas con foto + nombre aparato + tags
8. **Sobre mí** — Foto Belu + formación + cita blockquote
9. **Galería** — Grid asimétrico de 5 fotos de la clínica
10. **Por qué Belu Francia** — 4 razones con número grande
11. **Testimonios** — 6 reseñas en grid
12. **CTA Banner** — Fondo oscuro, "Primera consulta gratuita"
13. **Contacto** — Form + datos de contacto
14. **Footer** — Logo + servicios + tecnología + contacto

---

## 🔗 Integraciones pendientes (para Claude Code)

> Estas NO están implementadas en el preview HTML. Son el trabajo principal de Claude Code.

### Formulario de contacto
**Recomendado:** [Formspree](https://formspree.io) — gratuito hasta 50 envíos/mes  
```html
<!-- Cambiar action con el endpoint real de Formspree -->
<form action="https://formspree.io/f/XXXXXXXX" method="POST">
```
**Alternativa:** EmailJS (JavaScript puro, sin backend)

### Google Maps embed
```html
<!-- Añadir en la sección de contacto -->
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!..." 
  width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy">
</iframe>
```
→ Pedir a Belu la dirección exacta para generar el embed.

### Cookie banner / RGPD
Ver `components/cookie-banner.html` — implementar antes de publicar.

### Google Analytics / GA4
Añadir el snippet de seguimiento cuando se tenga el ID de propiedad.

### WhatsApp Business API (opcional)
El enlace actual `https://wa.me/message/27PLZRZVNFRQN1` es suficiente por ahora.

---

## 🚀 Deploy en Hostinger

1. Comprimir toda la carpeta del proyecto en `.zip`
2. Subir por FTP al directorio raíz (`public_html/`)
3. Verificar que `.htaccess` está en la raíz (maneja caché)
4. Configurar SSL en el panel de Hostinger
5. Apuntar el dominio `belufisio.com` al servidor de Hostinger

---

## ❌ Qué NO hacer

- No inventar información sobre Belu, sus servicios o su formación
- No añadir servicios que no existen en la web actual
- No usar frameworks (React, Vue, Angular...)
- No usar npm, webpack, vite, ni ningún bundler
- No usar `import`/`export` en el JavaScript del cliente
- No añadir más de 5 efectos visuales
- No usar CDN para GSAP (debe ser local)
- No copiar el diseño de la web anterior — empezamos desde cero

---

## ✅ Estado actual

- [x] Preview HTML completo en `/preview/belufisio_preview.html`
- [x] Estructura de carpetas creada
- [x] CLAUDE.md con todo el contexto
- [x] Contenido real extraído de belufisio.com
- [ ] `index.html` — Pasar del preview a archivos separados (HTML + CSS + JS)
- [ ] `css/main.css` — Extraer CSS del preview
- [ ] `css/components.css` — Componentes separados
- [ ] `js/main.js` — Extraer JS del preview
- [ ] Descargar imágenes localmente y optimizar a WebP
- [ ] `pages/servicios.html` — Página dedicada de servicios
- [ ] `pages/tecnologia.html` — Página dedicada de tecnología
- [ ] `pages/sobre-mi.html` — Página sobre Belu y su método
- [ ] `pages/contacto.html` — Página de contacto con mapa
- [ ] Integrar Formspree en formulario
- [ ] Añadir Google Maps
- [ ] Cookie banner RGPD
- [ ] Google Analytics
- [ ] `.htaccess` con cache headers
- [ ] Test en móvil (iOS + Android)
- [ ] Test en Safari (WebP fallback si necesario)
- [ ] Deploy en Hostinger
