document.querySelectorAll('.footer-logo').forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('active');
  });
});