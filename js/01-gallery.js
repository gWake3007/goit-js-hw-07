import { galleryItems } from "./gallery-items.js";
// Change code below this line

// const gallery = document.querySelector(".gallery");

// gallery.addEventListener("click", handleClick);

// function createMarcup() {
//   let marcup = "";
//   for (let i = 0; i < galleryItems.length; i++) {
//     marcup += `<li class="gallery__item">
//         <a class="gallery__link" href="${galleryItems[i].original}">
//           <img
//             class="gallery__image"
//             src="${galleryItems[i].preview}"
//             data-source="${galleryItems[i].original}"
//             alt="${galleryItems[i].description}"
//           />
//         </a>
//       </li>`;
//   }
//   gallery.innerHTML = marcup;
// }

// createMarcup();

// function handleClick(event) {
//     event.preventDefault()
//     for (let i = 0; i < galleryItems.length; i++) {
//         if(event.target.getAttribute("src") === galleryItems[i].preview) {
//             const instance = basicLightbox.create(`
//             <img src="${galleryItems[i].original}" width="800" height="600">
//         `);
//         instance.show()
//         document.body.addEventListener("keydown", (e) => {
//             if(e.code === "Escape") {
//                 instance.close();
//                         }
//         });
//         }
//     }
// }









// target.getAttribute("src") === galleryItems[i].preview

// function handleClick(target) {
//   target.preventDefault();
//     const instance = basicLightbox.create(`
//                 <img src="${galleryItems.original}" width="800" height="600">
//             `,{
//               onShow:(instance) =>
//               console.log(`keydown`,onCloseEscape),
//               onClose:(instance) =>
//               console.log(`keydown`,onCloseEscape)
//           });
//     instance.show();
//     console.dir(instance);
//     function onCloseEscape(evt) {
//       if (evt.code === "Escape") {
//       instance.close();
//       }
//       };
// }


// const galleryList = document.querySelector(".gallery");
// galleryList.addEventListener("click", onClickGallery);
// setGalleryHtml("beforeend", galleryElCreateMarkup(galleryItems));

// function onClickGallery(evt) {
//   evt.preventDefault();
//   if (evt.target.nodeName !== "IMG") {
//     return;
//   }
//   openFullImages(evt.target.dataset.source);
// }

// function galleryElCreateMarkup(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<li class = "gallery__item">
//               <a class ="gallery__link">
//               <img
//               class ="gallery__image"
//               src="${preview}"
//               data-source="${original}"
//               alt="${description}"
//               />
//               </a>
//        </li>`;
//     })
//     .join("");
// }

// function setGalleryHtml(place, gallery) {
//   galleryList.insertAdjacentHTML(place, gallery);
// }

// function openFullImages(target) {
//   const instance = basicLightbox.create(
//     `<img src="${target}"  width="800" height="600">`,
//     {
//       onShow: (instance) => console.log(`keydown`, onCloseEscape),
//       onClose: (instance) => console.log(`keydown`, onCloseEscape),
//     }
//   );
//   instance.show();
//   console.dir(instance);
//   function onCloseEscape(evt) {
//     if (evt.target.dataset.source === "Escape") {
//       instance.close();
//     }
//   }
// }

const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (element) =>
      `<li class="gallery__item">
      <a class="gallery__link" href=${element.original}>
        <img
          class="gallery__image"
          src=${element.preview}
          data-source=${element.original}
          alt=${element.description}
        />
      </a>
    </li>`
  )
  .join("");

gallery.insertAdjacentHTML("afterbegin", markup);


gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName != "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    
    <img src="${event.target.dataset.source}" width="800", height ="600">
  `);

  instance.show();

  gallery.addEventListener("keydown", (event) => {

    if (event.code == "Escape") {
      instance.close();
    }
    
  });
});
