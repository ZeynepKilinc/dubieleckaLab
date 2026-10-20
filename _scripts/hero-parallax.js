/* Circular image refraction, rendered locally without external dependencies. */
(() => {
  function start() {
    document.querySelectorAll('[data-parallax-hero]').forEach(hero => {
      const image = hero.querySelector('.hero-bg img');
      if (!image) return;
      const canvas = document.createElement('canvas');
      canvas.className = 'hero-refraction';
      canvas.setAttribute('aria-hidden', 'true');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      hero.querySelector('.hero-bg').append(canvas);
      const motion = matchMedia('(prefers-reduced-motion: reduce)');
      let width = 0, height = 0, x = 0, y = 0, tx = 0, ty = 0, frame = 0, last = 0;
      function draw() {
        if (!image.complete || !image.naturalWidth) return;
        const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight) * 1.08;
        const iw = image.naturalWidth * scale, ih = image.naturalHeight * scale;
        const left = (width - iw) / 2, top = (height - ih) / 2;
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(image, left + x * 5, top + y * 5, iw, ih);
        const radius = Math.max(width * 0.19, height * 0.6);
        const circles = [[0.13,0.85,0.82], [0.46,0.05,1.15], [0.76,0.85,1.1], [1.02,0.1,0.85]];
        circles.forEach(([cx, cy, size], index) => {
          const direction = index % 2 ? 1 : -1;
          ctx.save();
          ctx.beginPath();
          ctx.arc(width * cx + x * 14 * direction, height * cy + y * 12, radius * size, 0, Math.PI * 2);
          ctx.clip();
          const zoom = 1.055;
          ctx.drawImage(image, left - iw * (zoom - 1) / 2 + direction * 23 + x * 22,
            top - ih * (zoom - 1) / 2 + direction * 12 + y * 18, iw * zoom, ih * zoom);
          ctx.restore();
        });
      }
      function animate(now) {
        const dt = Math.min((now - (last || now - 16.7)) / 1000, 0.05);
        last = now;
        const ease = 1 - Math.exp(-7 * dt);
        x += (tx - x) * ease; y += (ty - y) * ease;
        draw();
        if (Math.abs(tx - x) + Math.abs(ty - y) > 0.001) frame = requestAnimationFrame(animate);
        else { frame = 0; last = 0; }
      }
      function kick() { if (!frame) frame = requestAnimationFrame(animate); }
      function resize() {
        const rect = canvas.getBoundingClientRect();
        width = rect.width; height = rect.height;
        const dpr = Math.min(devicePixelRatio || 1, 2);
        canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); draw();
      }
      hero.addEventListener('pointermove', event => {
        if (motion.matches || event.pointerType === 'touch') return;
        const rect = hero.getBoundingClientRect();
        tx = (event.clientX - rect.left) / rect.width * 2 - 1;
        ty = (event.clientY - rect.top) / rect.height * 2 - 1;
        kick();
      });
      hero.addEventListener('pointerleave', () => { tx = 0; ty = 0; kick(); });
      motion.addEventListener('change', () => { tx = 0; ty = 0; x = 0; y = 0; draw(); });
      new ResizeObserver(resize).observe(hero);
      image.addEventListener('load', resize);
      resize();
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
