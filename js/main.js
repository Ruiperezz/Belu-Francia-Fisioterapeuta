/* ============================================================
   BELU FRANCIA · main.js · v20260629
   IIFE pattern — sin ES modules — funciona en file:// y Hostinger
   ============================================================ */
(function () {
  'use strict';

  /* ──────────────────────────────────────────────────────────
     SAFETY NET — Si JS falla o GSAP no carga, revela todo a 5s
     ────────────────────────────────────────────────────────── */
  var safetyTimer = setTimeout(function () {
    document.querySelectorAll('.r-up, .r-l, .r-r').forEach(function (el) {
      el.classList.add('r-done');
    });
  }, 5000);

  /* ──────────────────────────────────────────────────────────
     HELPER — envuelve cada init en try/catch para no romper el resto
     ────────────────────────────────────────────────────────── */
  function safe(fn, name) {
    try { fn(); }
    catch (e) { console.warn('[belufisio] ' + name + ' falló:', e.message); }
  }

  /* ──────────────────────────────────────────────────────────
     NAV — solidifica en scroll
     ────────────────────────────────────────────────────────── */
  function initNav() {
    var nav = document.getElementById('mainNav');
    if (!nav) return;
    function update() {
      nav.classList.toggle('solid', window.scrollY > 64);
    }
    window.addEventListener('scroll', update, { passive: true });
    update(); // estado inicial
  }

  /* ──────────────────────────────────────────────────────────
     MOBILE MENU
     ────────────────────────────────────────────────────────── */
  function initMobileMenu() {
    var burger  = document.getElementById('navBurger');
    var menu    = document.getElementById('mobileMenu');
    var overlay = document.getElementById('mobileOverlay');
    if (!burger || !menu) return;

    function openMenu() {
      menu.classList.add('open');
      if (overlay) overlay.classList.add('open');
      burger.classList.add('open');
      burger.setAttribute('aria-expanded', 'true');
      menu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
    function closeMenu() {
      menu.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    burger.addEventListener('click', function () {
      menu.classList.contains('open') ? closeMenu() : openMenu();
    });
    if (overlay) overlay.addEventListener('click', closeMenu);
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* ──────────────────────────────────────────────────────────
     SCROLL REVEALS — IntersectionObserver
     ────────────────────────────────────────────────────────── */
  function initReveals() {
    var els = document.querySelectorAll('.r-up, .r-l, .r-r');
    if (!els.length) return;

    // Fallback sin IntersectionObserver
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('in'); });
      return;
    }

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.06,
      rootMargin: '0px 0px -50px 0px'
    });

    els.forEach(function (el) { obs.observe(el); });
  }

  /* ──────────────────────────────────────────────────────────
     COUNT-UP — animación de números en trust bar
     ────────────────────────────────────────────────────────── */
  function initCountUp() {
    var els = document.querySelectorAll('[data-count]');
    if (!els.length || !('IntersectionObserver' in window)) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el     = entry.target;
        var target = parseInt(el.getAttribute('data-count'), 10);
        var t0     = null;
        var dur    = 1500; // ms

        (function step(ts) {
          if (!t0) t0 = ts;
          var progress = Math.min((ts - t0) / dur, 1);
          var ease     = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          el.textContent = Math.round(target * ease);
          if (progress < 1) requestAnimationFrame(step);
        })(performance.now());

        obs.unobserve(el);
      });
    }, { threshold: 0.5 });

    els.forEach(function (el) { obs.observe(el); });
  }

  /* ──────────────────────────────────────────────────────────
     SMOOTH ANCHORS — scroll suave para links internos
     ────────────────────────────────────────────────────────── */
  function initAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = this.getAttribute('href').slice(1);
        if (!id) return;
        var target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 72;
        var top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ──────────────────────────────────────────────────────────
     GSAP ANIMATIONS — se activa solo si GSAP está disponible
     ────────────────────────────────────────────────────────── */
  function initGSAP() {
    if (typeof gsap === 'undefined') return;
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    /* Nota: los reveals (.r-up/.r-l/.r-r → .in) los gestiona únicamente
       initReveals() vía IntersectionObserver + el safety net de 5s.
       GSAP aquí solo añade el card tilt — no se duplica el sistema de
       entrada para evitar que un fallo de ScrollTrigger dependiente del
       layout deje contenido con opacity:0 inline permanentemente. */

    /* Card tilt en hover — solo desktop */
    if (matchMedia('(hover: hover)').matches) {
      document.querySelectorAll('.tec-card, .test-card, .porque-card').forEach(function (card) {
        card.addEventListener('mousemove', function (e) {
          var r  = card.getBoundingClientRect();
          var cx = (e.clientX - r.left - r.width  / 2) / (r.width  / 2);
          var cy = (e.clientY - r.top  - r.height / 2) / (r.height / 2);
          gsap.to(card, {
            rotateX: -cy * 4,  // máx 4° en X
            rotateY:  cx * 4,  // máx 4° en Y
            duration: 0.35, ease: 'power2.out',
            transformPerspective: 900
          });
        });
        card.addEventListener('mouseleave', function () {
          gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: 'power2.out' });
        });
      });
    }

  }

  /* ──────────────────────────────────────────────────────────
     FORMULARIO DE CONTACTO
     NOTA: Conectar con Formspree, EmailJS u otro servicio real.
     Ver CLAUDE.md → "Integraciones pendientes"
     ────────────────────────────────────────────────────────── */
  function initForm() {
    var form    = document.getElementById('contactForm');
    var success = document.getElementById('formSuccess');
    if (!form || !success) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validación mínima
      var nombre    = form.querySelector('[name="nombre"]');
      var telefono  = form.querySelector('[name="telefono"]');
      var privacidad = form.querySelector('[name="privacidad"]');

      if (!nombre || !nombre.value.trim()) {
        nombre && nombre.focus(); return;
      }
      if (!telefono || !telefono.value.trim()) {
        telefono && telefono.focus(); return;
      }
      if (!privacidad || !privacidad.checked) {
        privacidad && privacidad.focus(); return;
      }

      var submitBtn = form.querySelector('.btn-submit');
      if (submitBtn) {
        submitBtn.disabled    = true;
        submitBtn.textContent = 'Enviando…';
      }

      /* TODO: Reemplazar con endpoint real:
       *
       * fetch('https://formspree.io/f/XXXXXXXX', {
       *   method: 'POST',
       *   headers: { 'Accept': 'application/json' },
       *   body: new FormData(form)
       * })
       * .then(function(r) {
       *   if (r.ok) {
       *     form.style.display = 'none';
       *     success.style.display = 'block';
       *   }
       * });
       *
       * Por ahora, simulación:
       */
      setTimeout(function () {
        form.style.display    = 'none';
        success.style.display = 'block';
      }, 1100);
    });
  }

  /* ──────────────────────────────────────────────────────────
     HEADER ACTIVE LINK — marca el link activo según sección visible
     ────────────────────────────────────────────────────────── */
  function initActiveLinks() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    if (!sections.length || !navLinks.length) return;
    if (!('IntersectionObserver' in window)) return;

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            var matches = link.getAttribute('href') === '#' + id;
            link.setAttribute('aria-current', matches ? 'page' : 'false');
          });
        }
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    sections.forEach(function (s) { obs.observe(s); });
  }

  /* ──────────────────────────────────────────────────────────
     INIT — arranca todo
     ────────────────────────────────────────────────────────── */
  function init() {
    safe(initNav,         'nav');
    safe(initMobileMenu,  'mobileMenu');
    safe(initReveals,     'reveals');
    safe(initCountUp,     'countUp');
    safe(initAnchors,     'anchors');
    safe(initActiveLinks, 'activeLinks');
    safe(initForm,        'form');

    // GSAP: si ya está disponible (scripts defer en orden), arranca;
    // si no, reintenta en 500ms
    if (typeof gsap !== 'undefined') {
      safe(initGSAP, 'gsap');
    } else {
      setTimeout(function () { safe(initGSAP, 'gsap-delayed'); }, 500);
    }
  }

  // Esperar DOMContentLoaded si la página aún está cargando
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
