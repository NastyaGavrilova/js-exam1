let burger = document.getElementById("js-burger");
let burgerClose = document.getElementById("js-nav-close");

const close = () => {
  document.getElementById("js-nav").style.display = "none";
  burgerClose.style.display = "block";
};
const open = () => {
  document.getElementById("js-nav").style.display = "block";
  burger.style.display = "none";
};
burger.addEventListener("click", open);
burgerClose.addEventListener("click", close);
