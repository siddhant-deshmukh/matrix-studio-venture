export function setupAnimationObserver(selector: string, animationClass: string, options: { threshold?: number, once?: boolean } = {}) {
  const { threshold = 0.1, once = true } = options;
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) {
    return;
  }

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
        if (once) {
          observerInstance.unobserve(entry.target);
        }
      } else {
        if (!once) {
          entry.target.classList.remove(animationClass);
        }
      }
    });
  }, { threshold });

  elements.forEach(element => {
    observer.observe(element);
  });

  return observer;
}