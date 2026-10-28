(function () {
  'use strict';

  const headerHTML = `
  <header id="mainHeader">
    <div class="container header-content">
      <div class="logo-container" onclick="window.scrollTo({top:0, behavior:'smooth'})">
        <img src="Kachoo.png" alt="KACHOO Logo" class="logo-img" />
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
          <a href="https://thekachoo.github.io/CHON
