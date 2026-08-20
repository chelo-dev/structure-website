let _initialized = false;

/**
 * Scroll reveal con variantes de dirección y stagger automático.
 *
 * Uso:
 *   <div data-reveal="up|left|right|scale|fade">
 *   <div data-reveal-stagger="80">   → indexa a sus hijos [data-reveal] cada 80ms
 *   <div data-reveal data-reveal-delay="150">  → retraso explícito
 */
export function initReveal() {
  if (_initialized) return;
  _initialized = true;

  const revealElements =
    document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (!revealElements.length) return;

  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add('revealed'));
    return;
  }

  // Calcula el retraso de cada elemento a partir de su contenedor con stagger,
  // salvo que traiga un data-reveal-delay explícito.
  document
    .querySelectorAll<HTMLElement>('[data-reveal-stagger]')
    .forEach((group) => {
      const step = parseInt(group.dataset.revealStagger || '80', 10);
      const children = group.querySelectorAll<HTMLElement>('[data-reveal]');

      children.forEach((child, index) => {
        if (child.dataset.revealDelay === undefined) {
          child.dataset.revealDelay = String(index * step);
        }
      });
    });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target as HTMLElement;
        const delay = parseInt(el.dataset.revealDelay || '0', 10);

        if (delay > 0) {
          setTimeout(() => el.classList.add('revealed'), delay);
        } else {
          el.classList.add('revealed');
        }

        observer.unobserve(el);
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}
