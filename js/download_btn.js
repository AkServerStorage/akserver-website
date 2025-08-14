/**
 * download_btn.js
 * ----------------
 * Handles download button feedback.
 *
 * Purpose:
 * - Displays alert when download button clicked.
 *
 * Usage:
 * Include on pages with .btn-primary.secondary element.
 */

document.addEventListener("DOMContentLoaded", () => {
  const downloadBtn = document.querySelector(".btn-primary.secondary");
  if (!downloadBtn) return;

  downloadBtn.addEventListener("click", () => {
    alert("Starting download for AkServerInstaller.exe...");
  });
});
