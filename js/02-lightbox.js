import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const galleryItemsNew = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', galleryItemsNew);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class= "gallery__item"><a class= "gallery__link" href = "${original}">
      <img
      class="gallery__image"
      src="${preview}"
    alt= "${description}"/></a></li>`;
    })
    .join('');
}
galleryRef.insertAdjacentHTML('beforeend', galleryItemsNew);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
