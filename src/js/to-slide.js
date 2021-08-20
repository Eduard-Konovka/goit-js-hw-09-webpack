import { currentLargeImage } from './accesses'
import galleryItems from './bd'

// - Пролистывание изображений галереи в открытом модальном окне
// клавишами "влево" и "вправо".
const lengthArray = galleryItems.length

export function toSlideLeft() {
  for (let i = 0; i < lengthArray; i += 1) {
    if (currentLargeImage.getAttribute('src') === galleryItems[i].original) {
      currentLargeImage.setAttribute('alt', galleryItems[i - 1].description)
      currentLargeImage.setAttribute('src', galleryItems[i - 1].original)
      return
    }
  }
}

export function toSlideRight() {
  for (let i = 0; i < lengthArray; i += 1) {
    if (currentLargeImage.getAttribute('src') === galleryItems[i].original) {
      currentLargeImage.setAttribute('alt', galleryItems[i + 1].description)
      currentLargeImage.setAttribute('src', galleryItems[i + 1].original)
      return
    }
  }
}
