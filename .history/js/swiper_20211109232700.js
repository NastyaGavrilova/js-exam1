const swiperFirst = new Swiper(".swiper-first", {
  mode: "horizontal",
  spaceBetween: 30,
  slidesPerView: 2,
  // slidesPerColumn: 2,
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

const swiperSecond = new Swiper(".swiper-second", {
  mode: "horizontal",
  spaceBetween: 30,
  slidesPerView: 2,
  // slidesPerColumn: 2,
  loop: true,
  // effect: "cube",
});

swiperFirst.conroller.control = swiperSecond;
swiperSecond.conroller.control = swiperFirst;
