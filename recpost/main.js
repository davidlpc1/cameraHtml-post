navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true
}).then(stream => {
    const video = document.getElementById('camera'); // Pega a tag vídeo
    video.srcObject = stream // Bota o vídeo do usuário no html
    video.addEventListener('loadedmetadata', () => {
        video.play() // Dá um play no vídeo quando ele estiver totalmente carregado
    })
})
.catch(error => {
    throw new Error(error.message);
})