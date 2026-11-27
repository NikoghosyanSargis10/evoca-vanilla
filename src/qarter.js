import './qarter.css';
import { Footer } from './footer.js';
import { Header } from './header.js';
import { ProductCard } from './ProductCard.js';
import { cardsData } from './data.js';

export function showQarter() {
  const allCardsHTML = cardsData.map(card => ProductCard(card)).join('');

  document.querySelector('#app').innerHTML = `
    ${Header()}
    <div class="sub-header">
      <a href="#" class="sub-link active">Քարտեր</a>
      <a href="#" class="sub-link">Քարտային փաթեթներ</a>
      <a href="#" class="sub-link">Կարևոր տեղեկատվություն</a>
      <a href="#" class="sub-link">Evoca Benefits</a>
    </div>

    <div class="breadcrumb-container">
      <a onclick="openHome()" class="breadcrumb-home" style="cursor:pointer;">
        <img src="https://img.icons8.com/fluent-systems-regular/1200/home.jpg" alt="Home" class="home-icon">
      </a>
      <span class="breadcrumb-sep">></span>
      <a class="breadcrumb-item">Անհատ</a>
      <span class="breadcrumb-sep">></span>
      <a class="breadcrumb-item">Քարտեր</a>
      <span class="breadcrumb-sep">></span>
      <span class="breadcrumb-item">Քարտեր</span>
    </div>

    <section class="varker-header-section">
      <h1 class="varker-page-title">Քարտեր</h1>
      <div class="varker-filters">
        <button class="filter-btn active">Բոլորը</button>
        <button class="filter-btn">Պրեմիում</button>
        <button class="filter-btn">Նվեր քարտեր</button>
        <button class="filter-btn">Թվային քարտեր</button>
        <button class="filter-btn"><img src="https://www.evoca.am/images-cache/menu/1/17485004055849/50x24.png" alt="ArCa" style="height: 16px; display: block;"></button>
        <button class="filter-btn"><img src="https://www.evoca.am/images-cache/menu/1/16137249251612/50x24.png" alt="Visa" style="height: 16px; display: block;"></button>
        <button class="filter-btn"><img src="https://www.evoca.am/images-cache/menu/1/16137249504065/50x24.png" alt="MasterCard" style="height: 16px; display: block;"></button>
        <button class="filter-btn"><img src="https://www.evoca.am/images-cache/menu/1/17288945044615/50x24.png" alt="UnionPay" style="height: 16px; display: block;"></button>
      </div>
    </section>

    ${allCardsHTML}

    ${Footer()}
    </div>
  `;
}
