/**
 * carousel.js
 * -----------
 * Handles carousel scrolling, dots navigation, and auto-scroll.
 *
 * Purpose:
 * - Left/right buttons scroll carousel.
 * - Dots update with scroll position.
 * - Auto-scroll every 8 seconds.
 * - Pauses on hover.
 *
 * Usage:
 * Include on pages with carousel.
 */

document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack = document.querySelector(".carousel-track");
  const carouselDots = document.querySelectorAll(".carousel-dots .dot");
  const scrollLeftBtn = document.querySelector(".carousel-btn.left");
  const scrollRightBtn = document.querySelector(".carousel-btn.right");

  if (!carouselTrack || !carouselDots.length) return;

  const cardWidth = () => carouselTrack.querySelector(".carousel-card").offsetWidth + 24;

  const updateDots = () => {
    const scrollIndex = Math.round(carouselTrack.scrollLeft / cardWidth());
    carouselDots.forEach(dot => dot.classList.remove("active"));
    carouselDots[scrollIndex]?.classList.add("active");
  };

  // Scroll buttons
  scrollLeftBtn?.addEventListener("click", () => {
    carouselTrack.scrollBy({ left: -cardWidth(), behavior: "smooth" });
    updateDots();
  });
  scrollRightBtn?.addEventListener("click", () => {
    carouselTrack.scrollBy({ left: cardWidth(), behavior: "smooth" });
    updateDots();
  });

  // Dots click
  carouselDots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index);
      carouselTrack.scrollTo({ left: index * cardWidth(), behavior: "smooth" });
      updateDots();
    });
  });

  // Auto-scroll
  let autoScroll = setInterval(() => {
    if (carouselTrack.scrollLeft + carouselTrack.offsetWidth >= carouselTrack.scrollWidth) {
      carouselTrack.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carouselTrack.scrollBy({ left: cardWidth(), behavior: "smooth" });
    }
    updateDots();
  }, 8000);

  // Pause auto-scroll on hover
  carouselTrack.addEventListener("mouseenter", () => clearInterval(autoScroll));
  carouselTrack.addEventListener("mouseleave", () => {
    autoScroll = setInterval(() => {
      if (carouselTrack.scrollLeft + carouselTrack.offsetWidth >= carouselTrack.scrollWidth) {
        carouselTrack.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        carouselTrack.scrollBy({ left: cardWidth(), behavior: "smooth" });
      }
      updateDots();
    }, 8000);
  });

  carouselTrack.addEventListener("scroll", updateDots);
});
