let modal = document.querySelector(".c-coffee__modal");
let modalSecond = document.querySelector(".c-coffee__modal1");
let modalThird = document.querySelector(".c-coffee__modal2");

let btn = document.getElementById("js-swiper-first-btn1");
let btnSecond = document.getElementById("js-swiper-first-btn2");
let btnThird = document.getElementById("js-swiper-first-btn3");

let btnClose = document.getElementById("js-btn-close");
let btnCloseSec = document.getElementById("js-btn-close1");
let btnCloseThird = document.getElementById("js-btn-close2");

// Когда пользователь нажимает на кнопку, откройтся модальное окно
btn.addEventListener("click", () => {
  modal.style.display = "block";
});
btnSecond.addEventListener("click", () => {
  modalSecond.style.display = "block";
});
btnThird.addEventListener("click", () => {
  modalThird.style.display = "block";
});
// Когда пользователь нажимает на кнопку закрыть, закройтся модальное окно
// btnClose.onclick = function () {
//   modal.style.display = "none";
// };
btnClose.addEventListener("click", () => {
  modal.style.display = "none";
});
btnCloseSec.addEventListener("click", () => {
  modalSecond.style.display = "none";
});
btnCloseThird.addEventListener("click", () => {
  modalThird.style.display = "none";
});

// Когда пользователь щелкает в любом месте за пределами модального окна, оно закройтся
window.addEventListener("click", (e) => {
  if (e.target == modal || e.target == modalSecond || e.target == modalThird) {
    modal.style.display = "none";
    modalSecond.style.display = "none";
    modalThird.style.display = "none";
  }
});
