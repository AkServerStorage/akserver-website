/**
 * scroll.js
 * ---------
 * Provides smooth scrolling for anchor links and page sections.
 * - Scrolls smoothly to sections when links with href="#id" are clicked.
 * - Accounts for fixed navbar height.
 * - Optional: can reset scroll to top on page load if no hash.
 * 
 * Usage:
 * Include on all pages with in-page anchor links (#home, #features, etc.).
 */

document.addEventListener("DOMContentLoaded", () => {
  const navbarOffset = 48; // adjust if navbar height changes

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - navbarOffset,
          behavior: 'smooth'
        });
      }
    });
  });

  window.addEventListener('load', () => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});
