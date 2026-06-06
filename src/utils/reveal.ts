let _initialized = false;

export function initReveal() {
  if (_initialized) return;
  _initialized = true;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  const revealElements = document.querySelectorAll('[data-reveal]');

  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add('revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const delay = parseInt(el.dataset.revealDelay || '0', 10);

          setTimeout(() => {
            el.classList.add('revealed');
          }, delay);

          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}