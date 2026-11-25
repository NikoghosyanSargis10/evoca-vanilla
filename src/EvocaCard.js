import { ecoCardsData } from './data.js';

export function EcoCard({ badge, title, desc }) {
  return `
    <div class="eco-card">
      <span class="card-badge bg-purple">${badge}</span>
      <h3 class="card-title">${title}</h3>
      <p class="card-desc">${desc}</p>
    </div>
  `;
}

export const ecoCardsHTML = ecoCardsData.map(card => EcoCard(card)).join('');
