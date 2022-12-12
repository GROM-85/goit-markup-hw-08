(() => {
  const openMenuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".menu-container")
  const body = document.querySelector('body')

    openMenuBtn.addEventListener("click", () => {
      const isMenuOpened = openMenuBtn.getAttribute("aria-expanded") === "true" || false;
      openMenuBtn.setAttribute("aria-expanded", !isMenuOpened);     
      
      mobileMenu.classList.toggle("is-open");
      openMenuBtn.classList.toggle('is-open');
      body.classList.toggle("no-scroll")      

      // const scrollLockMethod = !isMenuOpened ? 'disableBodyScroll' : 'ebnableBodyScroll';
      // bodyScrollLock[scrollLockMethod](document.body);    

  })

  openMenuBtn.addEventListener('click', toggleMenu);
  

  

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.classList.remove('is-open');
    body.classList.remove('no-scroll');
    MenuBtn.setAttribute('aria-expanded', false);
    
  });

})();