import { galleryItems } from './gallery-items.js';
// Change code below this line
const divGallery = document.querySelector('.gallery');

const linkArr = [];

galleryItems.forEach((item) => {
    const link = `<a class="gallery__link" href="${item.original}"><img class="gallery__image" 
    src="${item.preview} 
    "data-source="${item.original} 
    "alt="${item.description}"></a>`
    linkArr.push(link);
});

divGallery.addEventListener('click', e => {
    e.preventDefault();
    const itemKey = e.target.dataset.source;
    if (e.target.nodeName !== "IMG") { 
        return  
    }  
    const instance = basicLightbox.create(
    `<img src="${itemKey}" width="800" height="600">`
)
    instance.show();

    divGallery.addEventListener("keydown", closeImg); 
 
    function closeImg(e) { 
    if (e.key === "Escape") { 
    instance.close() 
    } 
}; 
    
});

 divGallery.insertAdjacentHTML('beforeEnd', linkArr.join(''));
console.log(galleryItems);


