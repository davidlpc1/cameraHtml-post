navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    const video = document.getElementById('camera'); // Get the video element
    video.srcObject = stream // Put the user video in the tag video
    video.addEventListener('loadedmetadata', () => {
      video.play() // Play when the video was loaded
    })
})
.catch(error => {
    throw new Error(error.message);
})