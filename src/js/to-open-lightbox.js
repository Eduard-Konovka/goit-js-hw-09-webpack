import { lightbox, lightboxCloseOverlay, lightboxCloseBtn } from './refs'
import { toCloseLightbox } from './to-close-lightbox'
import { lightboxByKey } from './lightbox-by-key'

// - Открытие модального окна по клику на элементе галереи.
// - Закрытие модального окна по клику на `div.lightbox__overlay`.
export function toOpenLightbox() {
  lightbox.classList.add('is-open')

  lightboxCloseBtn.addEventListener('click', toCloseLightbox)
  lightboxCloseOverlay.addEventListener('click', toCloseLightbox)
  window.addEventListener('keydown', lightboxByKey)
}
