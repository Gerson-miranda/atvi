let video;

window.addEventListener("DOMContentLoaded", () => {
    video = document.getElementById("meuVideo");
});

function mostrarVideo() {
    const popup = document.getElementById("videoLogin");
    popup.style.display = "flex";

    // garante que sempre toca
    video.currentTime = 0;
    video.play().catch(() => {});
}

function fecharVideo() {
    document.getElementById("videoLogin").style.display = "none";
}

/* NÃO pausar ao redimensionar */
window.addEventListener("resize", () => {
    if (video && !video.paused) {
        video.play().catch(() => {});
    }
});
