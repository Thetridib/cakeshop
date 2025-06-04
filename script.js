

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.nav-left .nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });


