import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryToAdd = document.querySelector('.gallery');
const galleryItem = createGalleryItem(galleryItems);
galleryToAdd.insertAdjacentHTML('beforeend', galleryItem);
function createGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>` })
        .join('');

    
}
galleryToAdd.addEventListener('click', modalOpen);
function modalOpen(evt) {
    // 
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return
    }
    // console.log(e.target);
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);
    instance.show();

    galleryToAdd.addEventListener('keydown', (evt) => {
        if (evt.code === 'Escape') {
            instance.close();
        }
    });
}



