const open = () => {
  document.getElementById("js-navigation-cart").style.display = "block";
  document.getElementById("js-navigation-items").style.display = "block";
};

let burger = document.getElementById("js-burger");
burger.addEventListener("click", open(), () => {
  burger.style.display = "none";
});
