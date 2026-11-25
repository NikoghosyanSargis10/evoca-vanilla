import { newsData } from './data.js';

export function NewsCard({ img, category, categoryColor, title, date }) {
  return `
    <div class="news-single-card">
      <div class="news-card-img-box">
        <img src="${img}" alt="${title}" class="news-card-img">
      </div>
      <div class="news-card-body">
        <span class="news-category" style="border-left: 3px solid ${categoryColor}; padding-left: 8px; color: ${categoryColor};">
          ${category}
        </span>
        <h3 class="news-card-title">${title}</h3>
        <span class="news-card-date">${date}</span>
      </div>
    </div>
  `;
}

export const newsCardsHTML = newsData.map(news => NewsCard(news)).join('');
