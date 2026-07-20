document.addEventListener("DOMContentLoaded", () => {
const carousels = document.querySelectorAll(".home-lab-carousel, .news-photo-carousel");

for (const carousel of carousels) {
  const images = [...carousel.querySelectorAll(":scope > img")];
  if (images.length < 2) continue;

  let activeIndex = 0;
  let timer;

  const dots = document.createElement("div");
  dots.className = "photo-carousel-dots";
  dots.setAttribute("aria-label", "Choose photo");

  const dotButtons = images.map((image, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "photo-carousel-dot";
    dot.setAttribute("aria-label", `Show photo ${index + 1} of ${images.length}`);
    dot.addEventListener("click", () => show(index, true));
    dots.append(dot);
    image.setAttribute("aria-hidden", index === 0 ? "false" : "true");
    return dot;
  });

  function show(index, restart = false) {
    activeIndex = (index + images.length) % images.length;
    images.forEach((image, imageIndex) => {
      const active = imageIndex === activeIndex;
      image.classList.toggle("is-active", active);
      image.setAttribute("aria-hidden", String(!active));
    });
    dotButtons.forEach((dot, dotIndex) =>
      dot.setAttribute("aria-current", String(dotIndex === activeIndex))
    );
    if (restart) startTimer();
  }

  function startTimer() {
    clearInterval(timer);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer = setInterval(() => show(activeIndex + 1), 6000);
    }
  }

  carousel.addEventListener("mouseenter", () => clearInterval(timer));
  carousel.addEventListener("mouseleave", startTimer);
  carousel.append(dots);
  show(0);
  startTimer();
}
});
