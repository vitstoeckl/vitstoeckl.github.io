/**
 * Reveal on scroll: adds `.is-revealed` to every `[data-reveal]` element the first time it
 * comes into view. The fade itself is CSS (global.css) and is skipped under reduced motion.
 * `data-reveal-delay="120"` staggers tiles in one row.
 */
const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduced || !('IntersectionObserver' in window)) {
  elements.forEach((el) => el.classList.add('is-revealed'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  elements.forEach((el) => {
    const delay = el.dataset.revealDelay;
    if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`);
    observer.observe(el);
  });
}
