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
      data-source="${original}"
      alt= "${description}"/></a></li>`;
    })
    .join('');
}

const onItemsClick = evt => {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const source = evt.target.dataset.source;
  const alt = evt.target.alt;
  const instance = basicLightbox.create(`<img src="${source}" alt="${alt}" />`);

  instance.show();

  const instanceClose = () => {
    instance.close();
    document.removeEventListener('keydown', keyDown);
  };

  const keyDown = evt => {
    if (evt.key === 'Escape') {
      instanceClose();
    }
  };
  document.addEventListener('keydown', keyDown);
};
galleryRef.addEventListener('click', onItemsClick);
