(() => {
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const mobileMenu = document.querySelector(".menu-container");
  const body = document.querySelector('body');

  const toggleMenu = () => {
    const isMenuOpened = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpened);
      
    mobileMenu.classList.toggle("is-open");
    openMenuBtn.classList.toggle('is-open');
    body.classList.toggle("no-scroll");

    // const scrollLockMethod = !isMenuOpened ? 'disableBodyScroll' : 'enableBodyScroll';
    // bodyScrollLock[scrollLockMethod](document.body);    

  };

   openMenuBtn.addEventListener('click',toggleMenu);
   closeMenuBtn.addEventListener('click',toggleMenu);
  

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    
    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.remove('is-open');
    body.classList.remove('no-scroll');
    MenuBtn.setAttribute('aria-expanded', false);
    
  });

})();