let burger = document.getElementById("js-burger");
let burgerClose = document.getElementById("");
const open = () => {
  document.getElementById("js-nav").style.display = "block";
  burger.style.display = "none";
};
burger.addEventListener("click", open);
