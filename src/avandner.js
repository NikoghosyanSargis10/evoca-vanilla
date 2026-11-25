import './avandner.css';
import { Header } from './header.js';
import { Footer } from './footer.js';

export function avandnerQarter() {
  document.querySelector('#app').innerHTML = `
    ${Header()}

    <div class="sub-header">
      <a href="#" class="sub-link active">Ավանդներ</a>
      <a href="#" class="sub-link">Կարևոր տեղեկատվություն</a>
    </div>

    <div class="breadcrumb-container">
      <a onclick="openHome()" class="breadcrumb-home" style="cursor:pointer;">
        <img src="https://img.icons8.com/fluent-systems-regular/1200/home.jpg" alt="Home" class="home-icon">
      </a>
      <span class="breadcrumb-sep">></span>
      <a class="breadcrumb-item">Անհատ</a>
      <span class="breadcrumb-sep">></span>
      <span class="breadcrumb-item">Ավանդներ</span>
       <span class="breadcrumb-sep">></span>
      <span class="breadcrumb-item">Ավանդներ</span>
    </div>

    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg" alt="EvocaONLINE Ավանդ" class="loan-card-img">
        </div>
        <div class="loan-card-content">
          <h2 class="loan-card-title">Դասական ավանդ</h2>
          <p class="loan-card-desc">
            Ներդիր ավանդ EvocaTOUCH հավելվածով և ստացիր ավելի բարձր տարեկան տոկոսադրույք՝ առանց բանկ այցելելու։
          </p>
          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">100,000 ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">24 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>
            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">10.25%</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>
          <a href="#" class="loan-detail-btn">Մանրամասն</a>
        </div>
      </div>
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg" alt="EvocaONLINE Ավանդ" class="loan-card-img">
        </div>
        <div class="loan-card-content">
          <h2 class="loan-card-title">Դասական ավանդ</h2>
          <p class="loan-card-desc">
            Ներդիր ավանդ EvocaTOUCH հավելվածով և ստացիր ավելի բարձր տարեկան տոկոսադրույք՝ առանց բանկ այցելելու։
          </p>
          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">100,000 ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">24 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>
            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">10.25%</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>
          <a href="#" class="loan-detail-btn">Մանրամասն</a>
        </div>
      </div>
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg" alt="EvocaONLINE Ավանդ" class="loan-card-img">
        </div>
        <div class="loan-card-content">
          <h2 class="loan-card-title">Դասական ավանդ</h2>
          <p class="loan-card-desc">
            Ներդիր ավանդ EvocaTOUCH հավելվածով և ստացիր ավելի բարձր տարեկան տոկոսադրույք՝ առանց բանկ այցելելու։
          </p>
          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">100,000 ֏</span>
              <span class="stat-bottom">Գումար</span>
            </div>
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">24 ամիս</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>
            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">10.25%</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>
          <a href="#" class="loan-detail-btn">Մանրամասն</a>
        </div>
      </div>
    </section>
    ${Footer()}
    </div>
  `;
}
