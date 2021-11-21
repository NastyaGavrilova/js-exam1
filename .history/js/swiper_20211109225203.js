const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: 4,
  slidesPerColumn: 2,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },
  // effect: "cube",
});
const swiperNextBtn = document.getElementById("js-swiper-next");
swiperNextBtn.addEventListener("click", () => {
  swiper.slideNext();
});
