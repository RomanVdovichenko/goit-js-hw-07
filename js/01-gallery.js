import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const markup = galleryItems
  .map(({ original, preview, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
    data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

galleryEl.addEventListener("click", (evt) => {
  evt.preventDefault();
  onClickModalOpen(evt);
});

function onClickModalOpen(evt) {
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(`
    <img src=${evt.target.dataset.source} width="800" height="600">
`);

  instance.show();

  galleryEl.addEventListener("keydown", (evt) => {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
  });
}
