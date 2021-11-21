const swiperFirst = new Swiper(".swiper-first", {
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: 2,

  // slidesPerColumn: 2,
  loop: true,
  // nested: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },
  // effect: "cube",
});

// const swiperSecond = new Swiper(".swiper-second", {
//   mode: "horizontal",
//   spaceBetween: 30,
//   // slidesPerView: 2,
//   // loop: true,
//   // slidesPerColumn: 2,
//   // loop: true,
//   // navigation: {
//   //   nextEl: ".swiper-button-next",
//   // },
//   // effect: "cube",
// });

const swiperNextBtn = document.getElementById("js-swiper-next");
swiperNextBtn.addEventListener("click", () => {
  swiperFirst.slideNext();
});

// swiperFirst.controller.control = swiperSecond;
// swiperSecond.controller.control = swiperFirst;
