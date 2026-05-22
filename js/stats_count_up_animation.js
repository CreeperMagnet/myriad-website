const animateCount = (element, target, duration = 1200) => {
  const startTime = performance.now();

  const step = (now) => {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = Math.floor(progress * target);
    element.textContent = value.toLocaleString();

    if (progress < 1) requestAnimationFrame(step);

    if (progress == 1 & value > 1000) {
      element.textContent = element.textContent + "+";
    }
  };

  requestAnimationFrame(step);
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target, 10);
      animateCount(entry.target, target);
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.count-up-anim').forEach(el => {
  observer.observe(el);
});