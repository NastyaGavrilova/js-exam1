let modal = document.querySelector(".c-coffee__modal");
let modalSecond = document.querySelector(".c-coffee__modal1");
let modalThird = document.querySelector(".c-coffee__modal2");
let modalFourth = document.querySelector(".c-coffee__modal3");
let modalFifth = document.querySelector(".c-coffee__modal4");

let btn = document.getElementById("js-swiper-first-btn1");
let btnSecond = document.getElementById("js-swiper-first-btn2");
let btnThird = document.getElementById("js-swiper-first-btn3");
let btnFourth = document.getElementById("js-swiper-second-btn1");
let btnFifth = document.getElementById("js-swiper-second-btn2");

let btnClose = document.getElementById("js-btn-close");
let btnCloseSec = document.getElementById("js-btn-close1");
let btnCloseThird = document.getElementById("js-btn-close2");
let btnCloseFourth = document.getElementById("js-btn-close3");
let btnCloseFifth = document.getElementById("js-btn-close4");

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
btnFourth.addEventListener("click", () => {
  modalFourth.style.display = "block";
});
btnFifth.addEventListener("click", () => {
  modalFifth.style.display = "block";
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
btnCloseFourth.addEventListener("click", () => {
  modalFourth.style.display = "none";
});
btnCloseFifth.addEventListener("click", () => {
  modalFifth.style.display = "none";
});

// Когда пользователь щелкает в любом месте за пределами модального окна, оно закройтся
window.addEventListener("click", (e) => {
  if (
    e.target == modal ||
    e.target == modalSecond ||
    e.target == modalThird ||
    e.target == modalFourth ||
    e.target == modalFifth
  ) {
    modal.style.display = "none";
    modalSecond.style.display = "none";
    modalThird.style.display = "none";
    modalFourth.style.display = "none";
    modalFifth.style.display = "none";
  }
});
