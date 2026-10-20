document.addEventListener("DOMContentLoaded", () => {
const carousels = document.querySelectorAll(".home-lab-carousel, .news-photo-carousel");

for (const carousel of carousels) {
  const images = [...carousel.querySelectorAll(":scope > img")];
  if (images.length < 2) continue;

  const manual = carousel.classList.contains("home-lab-carousel");
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
    if (!manual && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timer = setInterval(() => show(activeIndex + 1), 6000);
    }
  }

  carousel.addEventListener("mouseenter", () => clearInterval(timer));
  carousel.addEventListener("mouseleave", startTimer);
  if (manual) {
    for (const [direction, label, symbol] of [[-1, "Previous photo", "‹"], [1, "Next photo", "›"]]) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `photo-carousel-arrow ${direction < 0 ? "previous" : "next"}`;
      button.setAttribute("aria-label", label);
      button.textContent = symbol;
      button.addEventListener("click", () => show(activeIndex + direction));
      carousel.append(button);
    }
    carousel.tabIndex = 0;
    carousel.addEventListener("keydown", event => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        show(activeIndex + (event.key === "ArrowLeft" ? -1 : 1));
      }
    });
  } else {
    carousel.append(dots);
  }
  show(0);
  startTimer();
}
});
