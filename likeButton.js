"use strict";
import renderUsers from "./render.js";
// кнопка лайка
const initLikeButton = (element, callback, object, comment) =>{
    const likeButtonElements = document.querySelectorAll(".like-button");
    for (const likeButtonElement of likeButtonElements){
      likeButtonElement.addEventListener("click", (event) => {
        event.stopPropagation();
        const index = likeButtonElement.dataset.index;
        if (object[index].isLiked === false) {
          object[index].likes = object[index].likes + 1;
          object[index].isLiked = true;
        } else {
          object[index].likes = object[index].likes - 1;
          object[index].isLiked = false;
        }
        renderUsers(element, callback, object, comment);
        }
      )
    }
  }

  export default initLikeButton;