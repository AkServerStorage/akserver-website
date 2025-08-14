/**
 * smooth_scroll.js
 * ----------------
 * Smooth scroll to anchor links with navbar offset.
 *
 * Purpose:
 * - Handles all internal anchor links starting with '#'.
 * - Adjusts scroll offset (example: navbar height 48px).
 *
 * Usage:
 * Include on all pages with internal anchor links.
 */

document.addEventListener("DOMContentLoaded", () => {
  const offset = 48; // Navbar height offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - offset,
          behavior: "smooth"
        });
      }
    });
  });

  // Ensure page loads at top if no hash
  window.addEventListener("load", () => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});
