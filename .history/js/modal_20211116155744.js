let modal = document.querySelector(".c-coffee__modal");
let modalSecond = document.querySelector(".");

let btn = document.getElementById("js-swiper-first-btn1");

let btnClose = document.getElementById("js-btn-close");

// Когда пользователь нажимает на кнопку, откройтся модальное окно
btn.addEventListener("click", () => {
  modal.style.display = "block";
});

// Когда пользователь нажимает на кнопку закрыть, закройтся модальное окно
// btnClose.onclick = function () {
//   modal.style.display = "none";
// };
btnClose.addEventListener("click", () => {
  modal.style.display = "none";
});

// Когда пользователь щелкает в любом месте за пределами модального окна, оно закройтся
window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
