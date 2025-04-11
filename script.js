 // Add class to body if on touch device
  window.addEventListener('DOMContentLoaded', () => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      document.body.classList.add('touch-enabled');

      const blocks = document.querySelectorAll('.img-block');

      blocks.forEach(block => {
        block.addEventListener('click', () => {
          blocks.forEach(b => b.classList.remove('active')); // remove from others
          block.classList.toggle('active'); // toggle current
        });
      });
    }
  });
