// ! Tab
$(document).ready(function () {
  //таб на элемент листа добавляет класс active и удвляет класс disable
  $(".c-tab__nav__li ").click(function () {
    $(this).addClass("active").removeClass("disable");
    // для элмента .c-navigation__li ищем соседние элементы
    // И им удаляем класс active и добавляем класс disable
    $(this).siblings().removeClass("active").addClass("disable");
    // для класса tab добвляем стиль и возвращем єлемент c индексом
    // и этому элементу добвляем стиль
    $(".tab")
      .css("display", "none")
      .eq($(this).index())
      .css("display", "block");
  });
});
