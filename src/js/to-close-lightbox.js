import { lightbox, lightboxCloseOverlay, lightboxCloseBtn } from './accesses'
import { lightboxByKey } from './lightbox-by-key'
import { resetLargerImageLink } from './reset-larger-image-link'

// - Закрытие модального окна по клику на кнопку
// `button[data-action="close-lightbox"]`.
export function toCloseLightbox() {
  lightbox.classList.remove('is-open')
  resetLargerImageLink()

  lightboxCloseBtn.removeEventListener('click', toCloseLightbox)
  lightboxCloseOverlay.removeEventListener('click', toCloseLightbox)
  window.removeEventListener('keydown', lightboxByKey)
}
