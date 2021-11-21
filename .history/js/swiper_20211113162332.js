const swiperFirst = new Swiper(".swiper-first", {
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: "auto",
  loopedSlides: 3,

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
  slidesPerView: "auto",
  loopedSlides: 3,
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

let currentSlides = swiperFirst.slides[swiperFirst.realIndex + 1];
currentSlides.classList.add("lasted");

swiperFirst.controller.control = swiperSecond;
swiperSecond.controller.control = swiperFirst;

const comboSwiper = new Swiper(".c-combo-swiper", {
  // direction: "horizontal",
  // spaceBetween: 30,
  // slidesPerView: 4,
  // loop: true,
  direction: "horizontal",
  spaceBetween: 30,
  slidesPerView: "auto",
  loopedSlides: 4,
  loop: true,

  navigation: {
    nextEl: ".c-combo-swiper-button-next",
  },
});

let comboCurrentSlides = comboSwiper.slides[comboSwiper.realIndex + 5];
comboCurrentSlides.classList.add("lasted");

const comboSwiperNext = document.getElementById("js-combo-swiper-next");
comboSwiperNext.addEventListener("click", () => {
  comboSwiper.slideNext();
});
