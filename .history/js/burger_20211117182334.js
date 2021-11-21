const open = () => {
  document.getElementById("js-navigation").classList.toggle("show");
};

let burger = document.getElementById("js-burger");
burger.addEventListener("click", open());
