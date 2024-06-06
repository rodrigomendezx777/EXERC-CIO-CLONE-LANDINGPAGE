const closeFullscreenButton = document.querySelector(".close-fullscreen");
const videoPlayButton = document.querySelector(".btn-video-play");
const videoIframe = document.querySelector(".btn-video-play iframe");
const fullscreenVideoContainer = document.createElement("div");
fullscreenVideoContainer.classList.add("fullscreen-video");

videoPlayButton.addEventListener("click", () => {
  if (!document.body.classList.contains("fullscreen-active")) {
    document.body.classList.add("fullscreen-active");
    document.body.appendChild(fullscreenVideoContainer);
    fullscreenVideoContainer.appendChild(videoIframe);
    fullscreenVideoContainer.appendChild(closeFullscreenButton);
  } else {
    document.body.classList.remove("fullscreen-active");
    fullscreenVideoContainer.removeChild(videoIframe);
    document.body.removeChild(fullscreenVideoContainer);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.body.classList.contains("fullscreen-active")) {
    videoPlayButton.click();
  }
});

closeFullscreenButton.addEventListener("click", () => {
  videoPlayButton.click();
});