import { currentLargeImage } from './refs'

// - Очистка значения атрибута `src` элемента `img.lightbox__image`.
// Это необходимо для того, чтобы при следующем открытии
//  модального окна, пока грузится изображение, мы не видели предыдущее.
export function resetLargerImageLink() {
  currentLargeImage.setAttribute('src', '')
  currentLargeImage.setAttribute('alt', '')
}
