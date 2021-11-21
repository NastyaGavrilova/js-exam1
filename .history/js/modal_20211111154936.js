let modal = document.getElementById("#js-coffee-modal");

let btn = document.getElementById("js-btn");

let btnClose = document.getElementsByClassName("js-btn-close")[0];

// Когда пользователь нажимает на кнопку, откройтся модальное окно
btn.onclick = function () {
  modal.style.display = "block";
};

// Когда пользователь нажимает на кнопку закрыть, закройтся модальное окно
btnClose.onclick = function () {
  modal.style.display = "none";
};

// Когда пользователь щелкает в любом месте за пределами модального окна, оно закройтся
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
