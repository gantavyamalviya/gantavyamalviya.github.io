/* =========================================================
   Portfolio — scripts/index.js
   Vanilla JS, no dependencies.
   ========================================================= */

'use strict';

/* ── Nav scroll effect ──────────────────────────────────── */
const nav       = document.getElementById('nav');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const allLinks  = document.querySelectorAll('.nav__link');

function onScroll() {
  // Frosted-glass nav on scroll
  nav.classList.toggle('scrolled', window.scrollY > 20);

  // Highlight the active section link
  const scrollMid = window.scrollY + window.innerHeight / 3;
  document.querySelectorAll('section[id]').forEach(section => {
    const link = document.querySelector(`.nav__link[href="#${section.id}"]`);
    if (!link) return;
    const inView = scrollMid >= section.offsetTop &&
                   scrollMid < section.offsetTop + section.offsetHeight;
    link.classList.toggle('active', inView);
  });

  // Back-to-top button
  const btn = document.getElementById('backToTop');
  if (btn) btn.hidden = window.scrollY < 400;
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll(); // run once on load

/* ── Hamburger menu ─────────────────────────────────────── */
function closeMenu() {
  navLinks.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

// Close on nav link click (mobile)
allLinks.forEach(link => link.addEventListener('click', closeMenu));

// Close on outside click
document.addEventListener('click', e => {
  if (!nav.contains(e.target)) closeMenu();
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});

/* ── Scroll reveal (IntersectionObserver) ───────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Typewriter effect ──────────────────────────────────── */
(function typewriter() {
  const el = document.getElementById('roleType');
  if (!el) return;

  const roles = [
    'AWS Engineer',
    'Problem Solver',
    'Content Creator',
    'Competitive Programmer',
  ];
  let roleIdx  = 0;
  let charIdx  = 0;
  let deleting = false;
  let paused   = false;

  function tick() {
    const current = roles[roleIdx];

    if (paused) {
      paused   = false;
      deleting = true;
      setTimeout(tick, 1600);
      return;
    }

    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx);
      if (charIdx === current.length) { paused = true; }
    } else {
      el.textContent = current.slice(0, --charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx  = (roleIdx + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? 55 : 105);
  }

  tick();
})();

/* ── Back to top ────────────────────────────────────────── */
const backToTop = document.getElementById('backToTop');
if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
