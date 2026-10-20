document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lab-slider').forEach(slider => {
    const track = slider.querySelector('.lab-slider-track');
    const slides = [...track.children];
    const status = slider.querySelector('.lab-slider-status');
    let current = 0;
    function render() {
      const offset = Math.min(slides[current].offsetLeft, track.scrollWidth - slider.clientWidth);
      track.style.transform = `translateX(-${Math.max(0, offset)}px)`;
      status.textContent = `Photo ${current + 1} of ${slides.length}`;
    }
    function move(step) { current = (current + step + slides.length) % slides.length; render(); }
    slider.querySelector('.previous').addEventListener('click', () => move(-1));
    slider.querySelector('.next').addEventListener('click', () => move(1));
    slider.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); move(event.key === 'ArrowLeft' ? -1 : 1);
      }
    });
    new ResizeObserver(render).observe(slider);
    render();
  });
});
