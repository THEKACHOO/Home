(function () {
  'use strict';

  const headerHTML = `
  <header id="mainHeader">
    <div class="container header-content">
      <div class="logo-container" onclick="window.scrollTo({top:0, behavior:'smooth'})">
        <img src="Logo/Kachoo.png" alt="KACHOO Logo" class="logo-img" />
        <div class="logo-text">KACHOO</div>
      </div>

      <div class="desktop-nav-container">
        <button class="desktop-nav-trigger" id="desktopNavTrigger">
          <span>Menu</span>
          <i class="fas fa-chevron-down"></i>
        </button>
        <div class="desktop-nav-dropdown" id="desktopNavDropdown">
          <a href="https://thekachoo.github.io/Office/About.html" class="nav-button">About Kachoo</a>
          <a href="kafkapages.html" class="nav-button" target="_blank">Kafkapages</a>
          <a href="https://thekachoo.github.io/KAZINE/COLLECTION.html" class="nav-button" target="_blank">Kazine</a>
          <a href="https://thekachoo.github.io/KABOOM/" class="nav-button" target="_blank">Kaboom</a>
          <a href="https://thekachoo.github.io/CHOBANK/" class="nav-button" target="_blank">Chobank</a>
          <a href="https://thekachoo.github.io/CHONNECT/" class="nav-button" target="_blank">Chonnect</a>
          <a href="https://thekachoo.github.io/CHOSONG/" class="nav-button" target="_blank">Chosong</a>
          <a href="https://thekachoo.github.io/CHODATE/" class="nav-button" target="_blank">Chodate</a>
          <a href="guidelines.html" class="nav-button">Guidelines</a>
        </div>
      </div>

      <button class="mobile-menu-btn" id="mobileMenuBtn">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </header>

  <div class="mobile-menu-overlay" id="mobileMenuOverlay"></div>
  <div class="mobile-menu" id="mobileMenu">
    <button class="mobile-menu-close" id="mobileMenuClose">
      <i class="fas fa-times"></i>
    </button>
    <ul class="mobile-menu-list">
      <li class="mobile-menu-item"><a href="https://thekachoo.github.io/Office/About.html" class="mobile-menu-link">About Kachoo</a></li>
      <li class="mobile-menu-item"><a href="kafkapages.html" class="mobile-menu-link" target="_blank">Kafkapages</a></li>
      <li class="mobile-menu-item"><a href="https://thekachoo.github.io/KAZINE/COLLECTION.html" class="mobile-menu-link" target="_blank">Kazine</a></li>
      <li class="mobile-menu-item"><a href="https://thekachoo.github.io/KABOOM/" class="mobile-menu-link" target="_blank">Kaboom</a></li>
      <li class="mobile-menu-item"><a href="https://thekachoo.github.io/CHOBANK/" class="mobile-menu-link" target="_blank">Chobank</a></li>
      <li class="mobile-menu-item"><a href="https://thekachoo.github.io/CHONNECT/" class="mobile-menu-link" target="_blank">Chonnect</a></li>
      <li class="mobile-menu-item"><a href="https://thekachoo.github.io/CHOSONG/" class="mobile-menu-link" target="_blank">Chosong</a></li>
      <li class="mobile-menu-item"><a href="https://thekachoo.github.io/CHODATE/" class="mobile-menu-link" target="_blank">Chodate</a></li>
      <li class="mobile-menu-item"><a href="guidelines.html" class="mobile-menu-link">Guidelines</a></li>
    </ul>
  </div>
  `;

  const footerHTML = `
  <footer>
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>KACHOO</h3>
          <p style="margin-top:16px;max-width:300px;">Kachoo is a digital media and news company that develops projects including magazines, news platforms, and integrated digital systems.</p>
          <div class="social-links">
            <a href="mailto:ohkachoo@gmail.com" class="social-link"><i class="fas fa-envelope"></i></a>
            <a href="https://twitter.com/thekachoo" target="_blank" class="social-link"><span class="x-logo">𝕏</span></a>
          </div>
        </div>
        <div class="footer-section">
          <h3>Platforms</h3>
          <ul class="footer-links">
            <li><a href="https://thekachoo.github.io/Home/kafkapages.html" target="_blank">KAFKAPAGES</a></li>
            <li><a href="https://thekachoo.github.io/KAZINE/COLLECTION.html" target="_blank">KAZINE</a></li>
            <li><a href="https://thekachoo.github.io/KABOOM/" target="_blank">KABOOM</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Contact</h3>
          <ul class="footer-links">
            <li><a href="https://twitter.com/TheKachoo" target="_blank">@TheKachoo (Official)</a></li>
            <li><a href="https://twitter.com/HaiKachoo" target="_blank">@HaiKachoo (Contact Person)</a></li>
            <li><a href="mailto:ohkachoo@gmail.com">ohkachoo@gmail.com</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Address</h3>
          <ul class="footer-links">
            <li style="color:rgba(255,255,255,0.68);margin-bottom:20px;">
              <i class="fas fa-map-marker-alt" style="margin-right:10px;"></i>
              Jenderal Sudirman Avenue,<br />Lots 61–62,<br />South Jakarta 12930,<br />Indonesia
            </li>
          </ul>
        </div>
      </div>
      <div class="copyright">&copy; 2026 The Kachoo. All rights reserved.</div>
    </div>
  </footer>
  `;

  function injectLayout() {
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  function initHeaderInteractions() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
    const mobileMenuClose = document.getElementById('mobileMenuClose');

    function openMobileMenu() {
      mobileMenu.classList.add('active');
      mobileMenuOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
    function closeMobileMenu() {
      mobileMenu.classList.remove('active');
      mobileMenuOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
    if (mobileMenuClose) mobileMenuClose.addEventListener('click', closeMobileMenu);
    if (mobileMenuOverlay) mobileMenuOverlay.addEventListener('click', closeMobileMenu);

    document.querySelectorAll('.mobile-menu-link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    const desktopNavTrigger = document.getElementById('desktopNavTrigger');
    const desktopNavDropdown = document.getElementById('desktopNavDropdown');

    if (desktopNavTrigger && desktopNavDropdown) {
      desktopNavTrigger.addEventListener('click', function (e) {
        e.stopPropagation();
        this.classList.toggle('active');
        desktopNavDropdown.classList.toggle('active');
      });

      document.addEventListener('click', function (e) {
        if (!desktopNavTrigger.contains(e.target) && !desktopNavDropdown.contains(e.target)) {
          desktopNavTrigger.classList.remove('active');
          desktopNavDropdown.classList.remove('active');
        }
      });
    }

    let lastScrollY = window.scrollY;
    const header = document.getElementById('mainHeader');

    if (header) {
      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 80) {
          header.classList.add('hide');
        } else if (currentScrollY < lastScrollY) {
          header.classList.remove('hide');
        }

        if (currentScrollY > 100) {
          header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)';
        } else {
          header.style.boxShadow = 'none';
        }

        lastScrollY = currentScrollY;
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectLayout();
    initHeaderInteractions();
  });
})();
