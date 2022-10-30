import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryToAdd = document.querySelector('.gallery');
const galleryItem = createGalleryItem(galleryItems);

galleryToAdd.insertAdjacentHTML('beforeend', galleryItem);

galleryToAdd.addEventListener('click', modalOpen);

function createGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
    <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      ` })
        .join('');

    
}


function modalOpen(evt) {
    
    evt.preventDefault();
    
    if (evt.target.nodeName !== "IMG") {
        return;
    }
    const lightBox = new SimpleLightbox('.gallery a', {
        captionsData: "alt",
        captionsDelay: 250
    });
} lightBox.open();

