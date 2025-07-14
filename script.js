// Hide navbar if user doesn't scroll for 7 seconds, show on scroll
(function() {
  const navbar = document.querySelector('.navbar');
  let hideTimeout;

  function showNavbar() {
    if (navbar) {
      navbar.style.opacity = '1';
      navbar.style.pointerEvents = 'auto';
    }
  }

  function hideNavbar() {
    if (navbar) {
      navbar.style.opacity = '0';
      navbar.style.pointerEvents = 'none';
    }
  }

  function resetHideTimer() {
    showNavbar();
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(hideNavbar, 3000);
  }

  window.addEventListener('scroll', resetHideTimer, { passive: true });
  window.addEventListener('mousemove', resetHideTimer, { passive: true });
  window.addEventListener('keydown', resetHideTimer, { passive: true });

  // Initial timer
  resetHideTimer();
})(); 