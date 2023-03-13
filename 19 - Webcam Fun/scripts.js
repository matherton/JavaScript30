const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      //console.log(localMediaStream);
      //video.src = window.URL.createObjectURL(localMediaStream); does not work in chrome so changed to:
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.log("oh no", err);
    });
}

getVideo();
