/**
 * forms.js
 * --------
 * Handles form submission feedback and button states.
 * - Displays alert after submitting contact form.
 * - Handles download button feedback.
 * 
 * Usage:
 * Include only on pages with contact or download forms.
 */

document.addEventListener("DOMContentLoaded", () => {
  // Contact form feedback
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const button = contactForm.querySelector('button');
      button.textContent = 'Sending...';
      button.disabled = true;
      setTimeout(() => {
        alert('Thank you for your enquiry! We’ll get back to you soon.');
        contactForm.reset();
        button.textContent = 'Send Enquiry';
        button.disabled = false;
      }, 1000);
    });
  }

  // Download button feedback
  const downloadBtn = document.querySelector('.btn-primary.secondary');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      alert('Starting download for AkServerInstaller.exe...');
    });
  }
});
