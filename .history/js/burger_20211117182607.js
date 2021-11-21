const open = () => {
  document.getElementById("js-navigation").style.display = "block";
};

let burger = document.getElementById("js-burger");
burger.addEventListener("click", open());
