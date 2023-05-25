import { galleryItems } from './gallery-items.js';
// Change code below this line


// const refs = {
//     gallery: document.querySelector(".gallery"), // знаходжу доступ до самої галереї (ul)
// }

// const card = galleryItems.map(({ preview, original, description }) => { // за допомогою методу (map) трансформую масив
//     return `<li class="gallery__item">
//         <a class="gallery__link" href="${original}">
//             <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"
//             />
//         </a>
//     </li>`
// }).join("") // з масиву строк або елементів за допомогою методу (join) я роблю одну строку (join сшиваэ все в одну строку)

// refs.gallery.innerHTML = card; // за допомогою innerHTML я вставляю в HTML свою картку(card)

// refs.gallery.addEventListener("click", openModal) // списку я даю прослуховувача(вішаю івент) з методом (click) и вказую функцію

// function openModal(evt) {
//     evt.preventDefault(); // я забороняю виконувати дефолтні дії

//     if (evt.target.nodeName !== "IMG") { // кажу якщо на те що ти нажав не є (img), виходь з ф-ції
//         return;
//     }

//     const imgUrl = evt.target.dataset.source; // роблю змінну в якій буде зберігатися посилання на данну картинку
//     console.log(imgUrl);

//     const instance = basicLightbox.create( // за допомогою lightbox я створюю popup з картинкою для появлення 
//         `<img src="${imgUrl}" width="800" height="600">`
//     );
//     instance.show();

//     const visible = instance.visible; // 
    
//     document.addEventListener("keydown", closeModal) // даю прослуховувача на закриття при натиску на клавішу
    
//     function closeModal(evt) {
//         if (evt.code === "Escape" && visible) { // якщо клавыша на яку нажав дорывнює (escape) 
//             instance.close(); // робимо закриття картинки
//             document.removeEventListener("keydown", closeModal) // та видаляємо ф-цію (прослуховувача) на закриття 
//             // console.log(visible);
//         }
//     }
// }




const gallery = document.querySelector('.gallery');

const create = createGallery(galleryItems);

gallery.innerHTML = create;

gallery.addEventListener('click', openModal);

function createGallery(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`
    }).join('');
}

function openModal(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== "IMG") {
        return;
    }

    console.log(evt.target.dataset.source);

    const url = evt.target.dataset.source;

    const instance = basicLightbox.create(
        `<img src="${url}" width="800" height="600">`
    )
    instance.show();

    const visible = basicLightbox.visible();

    document.addEventListener('keydown', closeModal)

    function closeModal(evt) {
        if (evt.code === "Escape" && visible) {
            instance.close();
            document.removeEventListener('keydown', closeModal);
        } 
    }
}






// помічник для знаходження на клавіатурі значення клавіш

// document.addEventListener('keydown', event => {
//     console.log(`key: `, event.key);
//     console.log(`code: `, event.code);

// })
    
    
    
    