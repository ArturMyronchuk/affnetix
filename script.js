
(function () {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
  
    if (!burger || !nav) return;
  
    const toggle = (open) => {
      nav.classList.toggle('is-open', open);
      burger.setAttribute('aria-expanded', String(open));
    };
  
    burger.addEventListener('click', function (e) {
  
      e.preventDefault();
      const isOpen = nav.classList.contains('is-open');
      toggle(!isOpen);
    });
  
    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('is-open')) return;
      const withinMenu = nav.contains(e.target);
      const withinBurger = burger.contains(e.target);
      if (!withinMenu && !withinBurger) toggle(false);
    });
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') toggle(false);
    });
  })();
  