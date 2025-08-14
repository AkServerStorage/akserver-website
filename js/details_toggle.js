/**
 * details_toggle.js
 * -----------------
 * Toggles summary text for <details> elements.
 *
 * Purpose:
 * - Changes summary text when <details> is opened/closed.
 *
 * Usage:
 * Include on pages using <details> for collapsible sections.
 */

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("details").forEach(details => {
    const summary = details.querySelector("summary");
    const openText = "Show less";
    const closeText = "Learn more";
    summary.textContent = closeText;

    details.addEventListener("toggle", () => {
      summary.textContent = details.open ? openText : closeText;
    });
  });
});
