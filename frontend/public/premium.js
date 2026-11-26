/**
 * INFRASLIM — PREMIUM ANIMATION ENGINE v2.0
 */
(function() {
  'use strict';
  if (typeof gsap === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  function initScrollProgress() {
    const bar = document.getElementById('progress-bar') || document.querySelector('.scroll-progress');
    if (!bar) return;
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: self => { bar.style.width = (self.progress * 100) + '%'; }
    });
  }

  function initNavbar() {
    const header = document.querySelector('.header') || document.querySelector('.navbar');
    if (!header) return;
    ScrollTrigger.create({
      start: 60,
      onEnter: () => header.classList.add('scrolled'),
      onLeaveBack: () => header.classList.remove('scrolled')
    });
  }

  function initScrollAnimations() {
    gsap.utils.toArray('.reveal, .fade-up').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true }
        }
      );
    });

    document.querySelectorAll('[data-count]').forEach(el => {
      const target = parseInt(el.getAttribute('data-count'), 10);
      if (isNaN(target)) return;
      let animated = false;
      ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        once: true,
        onEnter: () => {
          if (animated) return;
          animated = true;
          const obj = { n: 0 };
          gsap.to(obj, {
            n: target, duration: 2, ease: 'power2.out',
            onUpdate: () => { el.textContent = Math.floor(obj.n); }
          });
        }
      });
    });
  }

  function init() {
    initScrollProgress();
    initNavbar();
    initScrollAnimations();
    ScrollTrigger.refresh();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
