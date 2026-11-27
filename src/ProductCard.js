export function ProductCard({ title, desc, img, amount, term, rate }) {
  return `
    <section class="loans-list-section">
      <div class="loan-card">
        <div class="loan-card-visual yellow-bg">
          <img src="${img}" alt="${title}" class="loan-card-img">
        </div>

        <div class="loan-card-content">
          <h2 class="loan-card-title">${title}</h2>
          <p class="loan-card-desc">${desc}</p>

          <div class="loan-stats">
            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">${amount}</span>
              <span class="stat-bottom">Գումար</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">մինչև</span>
              <span class="stat-value">${term}</span>
              <span class="stat-bottom">Ժամկետ</span>
            </div>

            <div class="stat-item">
              <span class="stat-top">սկսած</span>
              <span class="stat-value">${rate}</span>
              <span class="stat-bottom">Տոկոսադրույք</span>
            </div>
          </div>

          <a href="#" class="loan-detail-btn">Մանրամասն</a>
        </div>
      </div>
    </section>
  `;
}
