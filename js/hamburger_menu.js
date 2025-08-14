document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu"); // your actual mobile menu

  if (!hamburger || !menu) return; // safety check

  // Function to close menu
  const closeMenu = () => {
    menu.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  };

  // Toggle menu on hamburger click/tap
  hamburger.addEventListener("click", function (e) {
    e.stopPropagation(); // prevent triggering document click
    const isOpen = menu.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", isOpen);
  });

  // Close menu when clicking/tapping outside
  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });

  // Close menu on mobile link clicks
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });

  // Handle touch events for mobile
  document.addEventListener("touchstart", function (e) {
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
      closeMenu();
    }
  });
});
