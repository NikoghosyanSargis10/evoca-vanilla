import './avandner.css';
import { Header } from './header.js';
import { Footer } from './footer.js';
import { ProductCard } from './ProductCard.js';
import { depositsData } from './data.js';

export function avandnerQarter() {
  const allDepositsHTML = depositsData.map(item => ProductCard(item)).join('');

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
      <a class="breadcrumb-item">Ավանդներ</a>
      <span class="breadcrumb-sep">></span>
      <span class="breadcrumb-item">Ավանդներ</span>
    </div>

    <section class="varker-header-section">
      <h1 class="varker-page-title">Ավանդներ</h1>
      <div class="varker-filters">
        <button class="filter-btn active">Բոլորը</button>
        <button class="filter-btn">Ժամկետային</button>
        <button class="filter-btn">Կուտակային</button>
        <button class="filter-btn">Օնլայն</button>
      </div>
    </section>

    ${allDepositsHTML}

    ${Footer()}
    </div>
  `;
}
