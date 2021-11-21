let modal = document.querySelector(".c-coffee__modal");

let btn = document.getElementById("js-swiper-first-btn1");

// let btnClose = document.getElementById("js-btn-close");

// Когда пользователь нажимает на кнопку, откройтся модальное окно
btn.addEventListener("click", () => {
  // modal.classList.remove("c-coffee__modal");
  // modal.classList.add("c-coffee__modal--show");
  modal.style.display = "block";
});
// btn.addEventListener("click", () => {
//
//   // modal.classList.remove("c-modal-window");
//   // modal.classList.add("c-modal-window__shoe");
// });

// Когда пользователь нажимает на кнопку закрыть, закройтся модальное окно
// btnClose.onclick = function () {
//   modal.style.display = "none";
// };
// btnClose.addEventListener("click", () => {
//   modal.style.display = "none";
// });

// Когда пользователь щелкает в любом месте за пределами модального окна, оно закройтся
window.addEventListener;
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
