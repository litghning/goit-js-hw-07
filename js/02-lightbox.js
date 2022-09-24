import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = document.querySelector('.gallery');

function createGalleryMarkup(elements) {
    return elements
        .map(
        (element) => `<li class="gallery__item">
                    <a class="gallery__link" href="${element.original}">
                        <img 
                            class="gallery__image"
                            src="${element.preview}"
                            data-source="${element.original}"
                            alt="${element.description}"
                />
                </a>
                </li>`
        )
        .join("");
}
const addGalleryMerkup = createGalleryMarkup(galleryItems);

refs.innerHTML = addGalleryMerkup;


const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
});
