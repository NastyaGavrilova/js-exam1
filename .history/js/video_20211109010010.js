let btnPlay = document.querySelector(".c-banner__btn-video");
let btnStop = document.querySelector(".c-banner__btn-video-stop");
const bannerBackground = document.querySelector(".c-banner__background");
const videoBlock = document.getElementById("fon");

btnPlay.addEventListener("click", () => {
  bannerBackground.classList.remove("c-banner__background");
  bannerBackground.classList.add("c-banner__background-hide");
  btnPlay.classList.remove("c-banner__btn-video");
  btnPlay.classList.add("c-banner__btn-video-hide");
  btnStop.classList.remove("c-banner__btn-video-stop");
  btnStop.classList.add("c-banner__btn-video-stop__show");
  if()
  videoBlock.id = "fon-show";
  videoBlock.play();
});

btnStop.addEventListener("click", () => {
  bannerBackground.classList.remove("c-banner__background-hide");
  bannerBackground.classList.add("c-banner__background");
  videoBlock.id = "fon";
  videoBlock.pause();
});

// const btnPlay = document.querySelector(".c-banner__btn-video");
// const bannerBackground = document.querySelector(".c-banner__background");
// // const videoEl = document.querySelector(".c-banner__video");
// const wrapperVideo = document.getElementById("fon");

// btnPlay.addEventListener("click", function () {
//   btnPlay.classList.remove("c-banner__btn-video");
//   btnPlay.classList.add("c-banner__btn-video-hide");
//   bannerBackground.classList.remove("c-banner__background");
//   bannerBackground.classList.add("c-banner__background-hide");
//   // videoEl.classList.remove("c-banner__video");
//   // videoEl.classList.add("c-banner__video-show");
//   // wrapperVideo.classList.add(".c-banner__video-show");
//   wrapperVideo.id = "fon-show";
//   wrapperVideo.play();
// });
