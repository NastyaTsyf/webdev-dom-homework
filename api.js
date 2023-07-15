"use strict";
const host = "https://wedev-api.sky.pro/api/v2/NastyaTsyf/comments";
export function getComments({ token }) {
    return fetch(host, {
        method: "GET",
        headers: {
          Authorization: token
        }
        })
          .then((response) => {
            if (response.status === 500) {
              throw new Error("Сервер сломался");
            } else {
              return response.json();
            }
          })
}

export function addComment({ token, name, text}) {
    return fetch(host, {
      method: "POST",
        headers: {
        Authorization: token
      },
      body: JSON.stringify({
        name,
        date: new Date(),
        text,
        likes: 0,
        isLiked: false
      })
    })  
    .then((response) => {
        if (response.status === 500) {
          throw new Error("Сервер сломался");
        } else if (response.status === 400) {
          throw new Error("Плохой запрос");
        } else {
          document.getElementById("load").classList.remove('hidden');
          document.getElementById("add").classList.add('hidden');
          return response.json();
        }
      })
}