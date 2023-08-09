import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const galleryMarcup = createGalleryMarcup(galleryItems);

function createGalleryMarcup(galleryItems) {
    return galleryItems
    .map(({preview, original, description}) =>{
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", galleryMarcup);

let lightBox = new SimpleLightbox ('.gallery a', {
    captions: 'true',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});