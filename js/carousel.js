/**
 * carousel.js
 * -----------
 * Handles carousel/slider functionality:
 * - Scroll left/right with buttons or arrow keys.
 * - Auto-scroll with interval.
 * - Dots navigation to jump to a slide.
 * - Pauses auto-scroll on mouse hover.
 * 
 * Usage:
 * Include on pages that have a carousel with class "carousel-track".
 */

document.addEventListener("DOMContentLoaded", () => {
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselDots = document.querySelectorAll('.carousel-dots .dot');
  const scrollLeftBtn = document.querySelector('.carousel-btn.left');
  const scrollRightBtn = document.querySelector('.carousel-btn.right');

  if (!carouselTrack || !carouselDots.length) return;

  const cardWidth = () => carouselTrack.querySelector('.carousel-card').offsetWidth + 24;

  const updateDots = () => {
    const index = Math.round(carouselTrack.scrollLeft / cardWidth());
    carouselDots.forEach(dot => dot.classList.remove('active'));
    carouselDots[index]?.classList.add('active');
  };

  scrollLeftBtn?.addEventListener('click', () => {
    carouselTrack.scrollBy({ left: -cardWidth(), behavior: 'smooth' });
    updateDots();
  });

  scrollRightBtn?.addEventListener('click', () => {
    carouselTrack.scrollBy({ left: cardWidth(), behavior: 'smooth' });
    updateDots();
  });

  carouselDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index);
      carouselTrack.scrollTo({ left: index * cardWidth(), behavior: 'smooth' });
      updateDots();
    });
  });

  let autoScroll = setInterval(() => {
    if (carouselTrack.scrollLeft + carouselTrack.offsetWidth >= carouselTrack.scrollWidth) {
      carouselTrack.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carouselTrack.scrollBy({ left: cardWidth(), behavior: 'smooth' });
    }
    updateDots();
  }, 8000);

  carouselTrack.addEventListener('mouseenter', () => clearInterval(autoScroll));
  carouselTrack.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
      if (carouselTrack.scrollLeft + carouselTrack.offsetWidth >= carouselTrack.scrollWidth) {
        carouselTrack.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carouselTrack.scrollBy({ left: cardWidth(), behavior: 'smooth' });
      }
      updateDots();
    }, 8000);
  });

  carouselTrack.addEventListener('scroll', updateDots);
});
