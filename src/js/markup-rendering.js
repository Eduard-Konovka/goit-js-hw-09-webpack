import { gallery } from './accesses'
import galleryItems from './bd'

// - Создание и рендер разметки по массиву данных `galleryItems`
// из`app.js` и предоставленному шаблону.
gallery.insertAdjacentHTML(
  'beforeend',
  galleryItems
    .map(
      image =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${image.original}">
            <img
              class="gallery__image"
              src="${image.preview}"
              data-source="${image.original}"
              alt="${image.description}"
            />  
          </a>
        </li>`,
    )
    .join(''),
)
