/**
 * hamburger_menu.js
 * ----------------
 * Handles the mobile hamburger menu toggle.
 * - Toggles menu visibility on hamburger click.
 * - Closes menu when clicking/tapping outside.
 * - Closes menu when a link inside the menu is clicked.
 * 
 * Usage:
 * Include on all pages that have the navbar with a hamburger menu.
 */

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");

  if (!hamburger || !menu) return;

  const closeMenu = () => {
    menu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  };

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
  });

  document.addEventListener("touchstart", (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
  });

  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
});
