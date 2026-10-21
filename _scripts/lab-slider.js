document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lab-slider').forEach(slider => {
    const track = slider.querySelector('.lab-slider-track');
    const slides = [...track.children];
    const status = slider.querySelector('.lab-slider-status');
    let current = 0;
    const polished = slider.classList.contains('news-highlight-slider');
    let dots = [], counter;
    if (polished) {
      const controls = document.createElement('div');
      controls.className = 'highlight-photo-controls';
      const indicators = document.createElement('div');
      indicators.className = 'highlight-photo-dots';
      dots = slides.map((slide, index) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.setAttribute('aria-label', `Show highlight photo ${index + 1}`);
        dot.addEventListener('click', () => { current = index; render(); });
        indicators.append(dot);
        return dot;
      });
      counter = document.createElement('span');
      counter.className = 'highlight-photo-counter';
      counter.setAttribute('aria-hidden', 'true');
      controls.append(slider.querySelector('.previous'), indicators, counter, slider.querySelector('.next'));
      slider.append(controls);
    }

    function render() {
      const offset = Math.min(slides[current].offsetLeft, track.scrollWidth - slider.clientWidth);
      if (polished) {
        slides.forEach((slide, index) => {
          slide.classList.toggle('is-current', index === current);
          slide.setAttribute('aria-hidden', String(index !== current));
          dots[index].setAttribute('aria-current', String(index === current));
        });
        counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
      } else {
        track.style.transform = `translateX(-${Math.max(0, offset)}px)`;
      }
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
