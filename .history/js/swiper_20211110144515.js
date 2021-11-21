const swiperFirst = new Swiper(".swiper-first", {
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: 3,

  // slidesPerColumn: 2,
  loop: true,
  // nested: true,
  navigation: {
    nextEl: ".swiper-button-next",
  },
  // effect: "cube",
});

const swiperSecond = new Swiper(".swiper-second", {
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: 3,
  loop: true,
  // slidesPerView: 2,
  // loop: true,
  // slidesPerColumn: 2,
  // loop: true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  // },
  // effect: "cube",
});

const swiperNextBtn = document.getElementById("js-swiper-next");
swiperNextBtn.addEventListener("click", () => {
  swiperFirst.slideNext();
});

let currentSlides = swiperFirst.slides[swiperFirst.realIndex + 2];
currentSlides.classList.add("lasted");

// swiperFirst.on("slideChange", function () {
//   let = currentSlides = swiperFirst.slides[swiperFirst.realIndex + 3];
//   $(".swiper-slide").removeClass("lasted");
//   currentSlides.classList.add("lasted");
// });
swiperFirst.controller.control = swiperSecond;
swiperSecond.controller.control = swiperFirst;
