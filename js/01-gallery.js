import { galleryItems } from './gallery-items.js';
const refs = document.querySelector('.gallery');

function createGalleryMarkup(elements) {
    return elements
        .map(
        (element) => `<div class="gallery__item">
                    <a class="gallery__link" href="${element.original}">
                        <img 
                            class="gallery__image"
                            src="${element.preview}"
                            data-source="${element.original}"
                            alt="${element.description}"
                />
                </a>
                </div>`
        )
        .join("");
}
const addGalleryMerkup = createGalleryMarkup(galleryItems);

refs.innerHTML = addGalleryMerkup;

refs.addEventListener("click", onImageClick)

function onImageClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG")
    { return; }
 

    const instance = basicLightbox.create(`<img src ="${evt.target.dataset.source}" width = "800" heigth = "600">`,
        {
            onShow: (instance) => {
                document.addEventListener('keydown', keyDawnClose)
            },
               onClose: (instance) => {
                document.removeEventListener('keydown', keyDawnClose)
        }
    }
    );
    instance.show();
    
function keyDawnClose(evt) {
    if (evt.code === 'Escape') {
        instance.close();
    }
}
}
