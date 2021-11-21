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
  videoBlock.id = "fon-show";
  videoBlock.play();
});

btnStop.addEventListener("click", () => {
  bannerBackground.classList.remove("c-banner__background-hide");
  bannerBackground.classList.add("c-banner__background");
  btnStop.classList.remove("c-banner__btn-video-stop__show");
  btnStop.classList.add("c-banner__btn-video-stop");
  btnPlay.classList.remove("c-banner__btn-video-hide");
  btnPlay.classList.add("c-banner__btn-video");
  videoBlock.id = "fon";
  videoBlock.pause();
});
