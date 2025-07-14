// Component loader for header and footer
(function() {
  // Function to load HTML components
  async function loadComponent(elementId, componentPath) {
    try {
      const response = await fetch(componentPath);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = html;
      }
    } catch (error) {
      console.error(`Error loading component ${componentPath}:`, error);
    }
  }

  // Load header and footer components when DOM is ready
  document.addEventListener('DOMContentLoaded', function() {
    // Load header if header-placeholder exists
    if (document.getElementById('header-placeholder')) {
      loadComponent('header-placeholder', 'header.html');
    }
    
    // Load footer if footer-placeholder exists
    if (document.getElementById('footer-placeholder')) {
      loadComponent('footer-placeholder', 'footer.html');
    }
  });
})(); 