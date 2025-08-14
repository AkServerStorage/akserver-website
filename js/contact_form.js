/**
 * contact_form.js
 * ----------------
 * Handles contact form submission feedback.
 *
 * Purpose:
 * - Provides fake "sending" feedback with alert.
 * - Resets form after submission.
 *
 * Usage:
 * Include on pages with .contact-form element.
 */

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const button = contactForm.querySelector("button");
    button.textContent = "Sending...";
    button.disabled = true;

    setTimeout(() => {
      alert("Thank you for your enquiry! We’ll get back to you soon.");
      contactForm.reset();
      button.textContent = "Send Enquiry";
      button.disabled = false;
    }, 1000);
  });
});
