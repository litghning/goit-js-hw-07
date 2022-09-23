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

refs.addEventListener("click", onImageClick)

function onImageClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG")
    { return; }
 

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
   
});
refs.addEventListener('keydown', (evt) => {
    if (evt.code === 'Escape') {
        instance.close();
    }
});
}








// const refs = document.querySelector('.gallery');
// const addGalleryMerkup = createGalleryMarkup(galleryItems);

// refs.insertAdjacentHTML('beforeend', addGalleryMerkup);
// function createGalleryMarkup(galleryItems) {
//     return galleryItems
//         .map(
//         ({preview, original, description}) => `<li class="gallery__item">
//                     <a class="gallery__link" href="${original}">
//                         <img 
//                             class="gallery__image"
//                             src="${preview}"
//                             data-source="${original}"
//                             alt="${description}"
//                 />
//                 </a>
//                 </li>`
//         )
//         .join("");
// }



// const lightbox = new SimpleLightbox('.gallery a', {
//     captionsData: "alt",
//     captionsType: "alt",
//     captionDelay: 250,
//     captionPosiotion: "bottom",
// });

// function onImageClick(evt) {
//     evt.preventDefault();
//     if (evt.target.nodeName !== "IMG") {
//         return
//     }
// }

// refs.addEventListener("click", onImageClick);

    
// refs.addEventListener('keydown', (evt) => {
//     if (evt.code === 'Escape') {
//         instance.close();
//     }
// });
// }

