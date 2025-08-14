/**
 * animations.js
 * -------------
 * Initializes scroll-based animations using AOS library.
 *
 * Important:
 * - Include AOS CSS in <head>:
 *   <link href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css" rel="stylesheet">
 * - Include AOS JS before this file:
 *   <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
 *
 * Usage:
 * - Add data-aos attributes to HTML elements.
 */

document.addEventListener("DOMContentLoaded", () => {
  if (window.AOS) {
    AOS.init();
});
