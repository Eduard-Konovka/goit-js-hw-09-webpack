import { currentLargeImage } from './refs'

// - Подмена значения атрибута `src` элемента `img.lightbox__image`.
export function getLargerImageLink(targetImage) {
  currentLargeImage.setAttribute('src', targetImage.dataset.source)
  currentLargeImage.setAttribute('alt', targetImage.alt)
}
