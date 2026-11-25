function ThumbCard({ img, alt }) {
  return `
    <div class="thumb-card">
      <img src="${img}" alt="${alt}">
    </div>
  `;
}

export const thumbCardsHTML = evocaBestCards.map(card => ThumbCard(card)).join('');
