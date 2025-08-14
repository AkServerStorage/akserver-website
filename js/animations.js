/**
 * animations.js
 * -------------
 * Initializes scroll-based animations using AOS library.
 * - Include AOS CSS in <head> and this JS at the bottom.
 * 
 * Usage:
 * Include on pages that use scroll animations.
 */

document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init();
  }
});
