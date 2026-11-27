import './varker.css';
import { Footer } from './footer.js';
import { Header } from './header.js';
import { ProductCard } from './ProductCard.js';
import { loansData } from './data.js';

export function showVarker() {
  const allLoansHTML = loansData.map(loan => ProductCard(loan)).join('');

  document.querySelector('#app').innerHTML = `
    ${Header()}
    <div class="sub-header">
      <a href="#" class="sub-link active">Վարկեր</a>
      <a href="#" class="sub-link">Վարկային պատմություն և սքոր</a>
      <a href="#" class="sub-link">Կարևոր տեղեկատվություն</a>
    </div>

    <div class="breadcrumb-container">
      <a onclick="openHome()" class="breadcrumb-home" style="cursor:pointer;">
        <img src="https://img.icons8.com/fluent-systems-regular/1200/home.jpg" alt="Home" class="home-icon">
      </a>
      <span class="breadcrumb-sep">></span>
      <a class="breadcrumb-item">Անհատ</a>
      <span class="breadcrumb-sep">></span>
      <a class="breadcrumb-item">Վարկեր</a>
      <span class="breadcrumb-sep">></span>
      <span class="breadcrumb-item">Վարկեր</span>
    </div>

    <section class="varker-header-section">
      <h1 class="varker-page-title">Վարկեր</h1>
      <div class="varker-filters">
        <button class="filter-btn active">Բոլորը</button>
        <button class="filter-btn">Գրավով ապահովված սպառողական վարկեր</button>
        <button class="filter-btn">Անգրավ սպառողական վարկեր</button>
        <button class="filter-btn">Հիփոթեքային վարկեր</button>
        <button class="filter-btn">Ավտոմեքենաների ձեռքբերման ֆինանսավորում</button>
        <button class="filter-btn">Ապառիկ</button>
        <button class="filter-btn">Օնլայն վարկեր</button>
      </div>
    </section>

    ${allLoansHTML}

    ${Footer()}
    </div>
  `;
}
