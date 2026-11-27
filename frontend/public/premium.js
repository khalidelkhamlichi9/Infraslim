/**
 * INFRASLIM — ADVANCED LUXURY ANIMATION & INTERACTION ENGINE v6.0
 * GSAP + ScrollTrigger + Per-Section Choreography + Sticky Form + 3D Cards
 */
(function() {
  'use strict';
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // 1. SCROLL PROGRESS BAR WITH GRADIENT
  function initScrollProgress() {
    const bar = document.getElementById('progress-bar') || document.querySelector('.scroll-progress');
    if (!bar) return;
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: self => {
        bar.style.width = (self.progress * 100) + '%';
      }
    });
  }

  // 2. NAVBAR SCROLL GLASSMORPHISM & SHRINK EFFECT
  function initNavbar() {
    const header = document.querySelector('.header') || document.querySelector('.navbar');
    if (!header) return;
    ScrollTrigger.create({
      start: 40,
      onEnter: () => header.classList.add('scrolled'),
      onLeaveBack: () => header.classList.remove('scrolled')
    });
  }

  // Utilitaire : découpe proprement les titres en mots masqués sans casser <em>, <strong> ou <br>
  function splitTitleWords(el) {
    if (!el || el.dataset.wordsSplit === 'true') return [];
    el.dataset.wordsSplit = 'true';
    const inners = [];

    function walk(node) {
      const children = Array.from(node.childNodes);
      children.forEach(child => {
        if (child.nodeType === Node.TEXT_NODE) {
          const text = child.textContent;
          if (!text || !text.trim()) return;
          const frag = document.createDocumentFragment();
          const parts = text.split(/(\s+)/);
          parts.forEach(part => {
            if (!part) return;
            if (/^\s+$/.test(part)) {
              frag.appendChild(document.createTextNode(part));
            } else {
              const mask = document.createElement('span');
              mask.className = 'word-mask';
              const inner = document.createElement('span');
              inner.className = 'word-inner';
              inner.textContent = part;
              mask.appendChild(inner);
              frag.appendChild(mask);
              inners.push(inner);
            }
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'BR') {
          walk(child);
        }
      });
    }

    walk(el);
    return inners;
  }

  // 3. HERO ENTRANCE STAGGER TIMELINE (ALL PAGES)
  function initHeroEntrance() {
    const heroMeta = document.querySelectorAll('.breadcrumb, .hero-eyebrow, .service-detail-hero .eyebrow');
    if (heroMeta.length > 0) {
      gsap.fromTo(heroMeta,
        { opacity: 0, y: 24, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
          clearProps: 'transform,filter'
        }
      );
    }

    // Révélation progressive mot par mot des grands titres Hero
    gsap.utils.toArray('.hero-title, .service-detail-hero h1').forEach(title => {
      const words = splitTitleWords(title);
      if (words.length > 0) {
        gsap.set(title, { opacity: 1 });
        gsap.fromTo(words,
          { yPercent: 115, opacity: 0, rotateX: 16, transformPerspective: 800 },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.9,
            delay: 0.22,
            stagger: 0.085,
            ease: 'power3.out',
            clearProps: 'transform'
          }
        );
      }
    });

    const heroDesc = document.querySelectorAll('.hero-desc, .hero-subtitle, .service-detail-hero .subtitle');
    if (heroDesc.length > 0) {
      gsap.fromTo(heroDesc,
        { opacity: 0, y: 24, filter: 'blur(3px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          delay: 0.55,
          ease: 'power3.out',
          clearProps: 'transform,filter'
        }
      );
    }

    // Parallax background image in Hero sections
    gsap.utils.toArray('.hero-bg-photo, .hero-parallax-bg').forEach(bg => {
      gsap.to(bg, {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: bg.parentElement,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    });
  }

  // 4. PER-SECTION HEADERS, DIVIDERS & TEXT REVEALS
  function initSectionHeadersAnimation() {
    // Révélation progressive mot par mot pour tous les titres de section
    gsap.utils.toArray('.section-title, .ps-title, .wlc-title, .cta-title, .wa-title, .inbody-title, .ht-title').forEach(title => {
      const words = splitTitleWords(title);
      if (words.length > 0) {
        gsap.set(title, { opacity: 1 });
        gsap.fromTo(words,
          { yPercent: 110, opacity: 0, rotateX: 12, transformPerspective: 800 },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: 0,
            duration: 0.8,
            stagger: 0.065,
            ease: 'power3.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: title,
              start: 'top 90%',
              once: true
            }
          }
        );
      }
    });

    // Eyebrows / tags slide-in
    gsap.utils.toArray('.section-tag, .section-eyebrow, .section-label, .ps-label').forEach(tag => {
      gsap.fromTo(tag,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: 'power2.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: tag,
            start: 'top 90%',
            once: true
          }
        }
      );
    });

    // Horizontal divider line draw
    gsap.utils.toArray('.divider').forEach(div => {
      gsap.fromTo(div,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 0.85,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: div,
            start: 'top 90%',
            once: true
          }
        }
      );
    });
  }

  // 5. 3D SCROLL UNFOLD & STAGGERED GRIDS + LISTS ACROSS ALL SECTIONS
  function initScrollAnimations() {
    // Single reveals with 3D perspective unfold
    gsap.utils.toArray('.reveal, .fade-up, .pricing-section-block, .faq-group, .service-universe-card, .inbody-callout-card, .welcome-lounge-card, .pack-callout, .in-form-card').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 40, scale: 0.975, rotationX: 5, transformPerspective: 1000 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 0.85,
          ease: 'power3.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true
          }
        }
      );
    });

    // Staggered card grids with 3D cascade
    gsap.utils.toArray('.stagger-cards, .univers-grid, .blog-grid, .pricing-plans, .ritual-grid, .contact-cards, .trust-grid, .practical-grid, .hammam-gallery-mosaic, .tech-pillars, .stats-card-white, .about-stats').forEach(grid => {
      const children = grid.children;
      if (!children || children.length === 0) return;
      gsap.fromTo(children,
        { opacity: 0, y: 42, scale: 0.94, rotationY: -5, transformPerspective: 900 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.18)',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: grid,
            start: 'top 87%',
            once: true
          }
        }
      );
    });

    // Staggered list items, table rows & legal/FAQ cards inside every section
    gsap.utils.toArray('.featured-services-list, .sub-list, .benefits-grid, .pricing-table tbody, .legal-content, .hours-info, .visit-box').forEach(container => {
      const items = container.children;
      if (!items || items.length === 0) return;
      gsap.fromTo(items,
        { opacity: 0, y: 18 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
          ease: 'power2.out',
          clearProps: 'transform',
          scrollTrigger: {
            trigger: container,
            start: 'top 90%',
            once: true
          }
        }
      );
    });

    // Scrubbed visual parallax on featured images & overlapping frames
    gsap.utils.toArray('.parallax-img, [data-parallax], .featured-visual, .wv-inset-photo, .about-inset-photo').forEach(img => {
      gsap.to(img, {
        yPercent: -10,
        ease: 'none',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2
        }
      });
    });

    // Animated number counters
    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      if (isNaN(target)) return;
      let animated = false;
      ScrollTrigger.create({
        trigger: el,
        start: 'top 88%',
        once: true,
        onEnter: () => {
          if (animated) return;
          animated = true;
          const obj = { n: 0 };
          gsap.to(obj, {
            n: target,
            duration: 1.8,
            ease: 'power2.out',
            onUpdate: () => {
              el.textContent = Math.floor(obj.n).toLocaleString('fr-FR');
            }
          });
        }
      });
    });
  }

  // 6. STICKY SERVICE SIDEBAR FORM ANIMATION
  function initStickySidebar() {
    const sidebar = document.querySelector('.detail-sidebar');
    const detailBody = document.querySelector('.detail-body');
    if (!sidebar || !detailBody) return;

    // Entrance slide-in from right
    gsap.fromTo(sidebar,
      { opacity: 0, x: 40, scale: 0.97 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.9,
        delay: 0.25,
        ease: 'power3.out',
        clearProps: 'transform'
      }
    );

    // Pinned glow state while scrolling through service details
    ScrollTrigger.create({
      trigger: detailBody,
      start: 'top 95px',
      end: 'bottom bottom',
      onEnter: () => sidebar.classList.add('sidebar-pinned'),
      onLeave: () => sidebar.classList.remove('sidebar-pinned'),
      onEnterBack: () => sidebar.classList.add('sidebar-pinned'),
      onLeaveBack: () => sidebar.classList.remove('sidebar-pinned')
    });
  }

  // 7. MAGNETIC BUTTON HOVER EFFECT (LUXE BESPOKE FEEL)
  function initMagneticButtons() {
    const magneticBtns = document.querySelectorAll('.ht-btn-red, .btn-primary, .btn-tech-outline, .btn-inbody-rdv, .btn-wa-big, .float-wa-btn, .ps-cta-btn, .btn-pack-wa, .mf-btn, .pp-btn, .btn-rdv-submit, .ht-btn-white, .btn-wa-direct-lg');
    magneticBtns.forEach(btn => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(btn, {
          x: x * 0.22,
          y: y * 0.22,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.55,
          ease: 'elastic.out(1, 0.38)'
        });
      });
    });
  }

  // 8. 3D INTERACTIVE TILT + SPOTLIGHT POUR TOUTES LES CARDS (SANS EFFET D'IA, PUR PHYSIQUE CSS)
  function initCardTiltAndSpotlight() {
    const tiltCards = document.querySelectorAll('.univers-card, .service-card, .service-universe-card, .plan, .cc, .hg-card, .ritual-step, .blog-card, .tech-pillar, .stat-box, .prac-item, .pp-card, .pro-card, .inbody-callout-card');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;
        const x = relX / rect.width - 0.5;
        const y = relY / rect.height - 0.5;

        card.style.setProperty('--mouse-x', `${relX}px`);
        card.style.setProperty('--mouse-y', `${relY}px`);

        gsap.to(card, {
          rotationY: x * 8,
          rotationX: -y * 8,
          y: -6,
          scale: 1.015,
          transformPerspective: 1000,
          duration: 0.35,
          ease: 'power2.out'
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotationY: 0,
          rotationX: 0,
          y: 0,
          scale: 1,
          duration: 0.65,
          ease: 'elastic.out(1, 0.5)'
        });
      });
    });
  }

  function init() {
    initScrollProgress();
    initNavbar();
    initHeroEntrance();
    initSectionHeadersAnimation();
    initScrollAnimations();
    initStickySidebar();
    initMagneticButtons();
    initCardTiltAndSpotlight();
    ScrollTrigger.refresh();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
