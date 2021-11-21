let modal = document.querySelector(".c-coffee__modal");
let modalSecond = document.querySelector(".c-coffee__modal1");

let btn = document.getElementById("js-swiper-first-btn1");
let btnSecond = document.getElementById("js-swiper-first-btn2");

let btnClose = document.getElementById("js-btn-close");

// Когда пользователь нажимает на кнопку, откройтся модальное окно
btn.addEventListener("click", () => {
  modal.style.display = "block";
});
btnSecond.addEventListener("click", () => {
  modalSecond.style.display = "block";
});
// Когда пользователь нажимает на кнопку закрыть, закройтся модальное окно
// btnClose.onclick = function () {
//   modal.style.display = "none";
// };
btnClose.addEventListener("click", () => {
  modal.style.display = "none";
});
btnClose.addEventListener("click", () => {
  modalSecond.style.display = "none";
});

// Когда пользователь щелкает в любом месте за пределами модального окна, оно закройтся
window.addEventListener("click", (e) => {
  if (e.target == modal && e.target == modalSecond) {
    modal.style.display = "none";
    modalSecond.style.display = "none";
  }
});
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };
