const videoContainer = document.getElementById("videoLogin");
const video = document.getElementById("meuVideo");

function mostrarVideo() {
    videoContainer.style.display = "flex";

    video.currentTime = 0;
    video.muted = false; // garante som ligado

    const playPromise = video.play();

    // evita erro de autoplay bloqueado
    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay bloqueado pelo navegador");
        });
    }
}

function fecharVideo() {
    video.pause();
    videoContainer.style.display = "none";
}
