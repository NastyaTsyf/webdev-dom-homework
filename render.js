"use strict";

import initLikeButton from "./likeButton.js";
import replyТoСomment from "./reply.js";
//рендер списка
const renderUsers = (element, callback, object, comment) =>{
    const usersHtml = object.map((user, index) => callback(user, index)).join('');
    element.innerHTML = usersHtml;
    initLikeButton(element, callback, object, comment);
    replyТoСomment(comment);
  };

  export default renderUsers;