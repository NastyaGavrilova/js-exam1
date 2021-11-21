let burger = document.getElementById("js-burger");
const open = () => {
  document.getElementById("js-nav").style.display = "block";
  burger.style.display = "none";
};
burger.addEventListener("click", open());
