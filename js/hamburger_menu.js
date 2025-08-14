document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");

  if (!hamburger || !menu) return;

  const closeMenu = () => {
    menu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  };

  // Toggle menu on hamburger click
  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = menu.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Close menu when clicking/tapping outside
  document.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
  });

  document.addEventListener("touchstart", (e) => {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) closeMenu();
  });

  // Close menu on mobile menu link click
  menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
});
