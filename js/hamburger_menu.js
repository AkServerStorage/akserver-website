// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    const expanded = mobileMenu.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", expanded);
  });
  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", false);
    });
  });
}
