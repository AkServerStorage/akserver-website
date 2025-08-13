// Function to load HTML content into an element
function loadComponent(elementId, filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).innerHTML = data;
    })
    .catch(error => console.error(`Error loading ${filePath}:`, error));
}

// Load common components
document.addEventListener('DOMContentLoaded', () => {
  loadComponent('navbar', 'navbar.html');
  loadComponent('footer', 'footer.html');
  loadComponent('scripts', 'scripts.html');
});
