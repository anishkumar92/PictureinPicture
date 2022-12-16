const videoElement = document.getElementById("video");
const button = document.getElementById("button");

//  promt user to select a media stream

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    alert(error);
  }
}

//  add eventlistner
button.addEventListener("click", async () => {
  // Disabe button
  button.disabled = true;
  // start picture in picute
  await videoElement.requestPictureInPicture();
  //  reset button
  button.disabled = false;
});

selectMediaStream();
