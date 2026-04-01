/* POTSystem — Mobile Nav Toggle */
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const toggle  = document.querySelector('.nav-toggle');
    const links   = document.querySelector('.nav-links');
    const overlay = document.querySelector('.nav-overlay');
    if (!toggle || !links) return;

    function open() {
      toggle.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      links.classList.add('open');
      if (overlay) overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', function () {
      links.classList.contains('open') ? close() : open();
    });

    if (overlay) overlay.addEventListener('click', close);

    // Close on nav link tap (mobile)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', close);
    });

    // Close on resize to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) close();
    });
  });
})();
