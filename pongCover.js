var canvasCover = document.getElementById("pongCover");
var ctxCover = canvasCover.getContext("2d");
var test = "test";

function cover() {
    ctxCover.beginPath();
    ctxCover.rect(100, 205, 20, 90);
    ctxCover.fillStyle = "yellow";
    ctxCover.fill();
    ctxCover.closePath();

    ctxCover.beginPath();
    ctxCover.rect(880, 205, 20, 90);
    ctxCover.fillStyle = "green";
    ctxCover.fill();
    ctxCover.closePath();

    ctxCover.beginPath();
    ctxCover.arc(500, 250, 8, 0, Math.PI*2);
    ctxCover.fillStyle = "white";
    ctxCover.fill();
    ctxCover.closePath();

    ctxCover.font = "140px Arial";
    ctxCover.fillStyle = "red";
    ctxCover.fillText("Pong", 320, 120);

    ctxCover.font = "100px Arial";
    ctxCover.fillStyle = "blue";
    ctxCover.fillText("Click to play", 230, 400)
}

cover();

var Button = document.getElementsByClassName("pongCover")[0];
var FullscreenBackground = document.getElementById("fullscreenPong");


Button.onclick = function() {
    console.log(test);
    FullscreenBackground.style.display = "block";
    startgame();
}

FullscreenBackground.onclick = function() {
    FullscreenBackground.style.display = "none";
    stop();
}