const open = () => {
  document.getElementById("js-nav").style.display = "block";
};

let burger = document.getElementById("js-burger");
burger.addEventListener("click", open(), () => {
  burger.style.display = "none";
});
