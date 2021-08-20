import { toCloseLightbox } from './to-close-lightbox'
import { toSlideLeft, toSlideRight } from './to-slide'

// - Закрытие модального окна по нажатию клавиши `ESC`.
export function lightboxByKey(event) {
  if (event.code === 'Escape') {
    toCloseLightbox()
  }
  if (event.code === 'ArrowLeft') {
    toSlideLeft()
  }
  if (event.code === 'ArrowRight') {
    toSlideRight()
  }
}
