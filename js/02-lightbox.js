import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ original, preview, description }) => {
    return `<li><a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a></li>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
