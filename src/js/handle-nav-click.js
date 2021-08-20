import { toOpenLightbox } from './to-open-lightbox'
import { getLargerImageLink } from './get-larger-image-link'

// - Реализация делегирования на галерее `ul.js-gallery`
// и получение`url` большого изображения.
export function handleNavClick(event) {
  event.preventDefault()

  const { target } = event

  if (target.nodeName !== 'IMG') return

  toOpenLightbox()
  getLargerImageLink(target)
}
