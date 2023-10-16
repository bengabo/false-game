let spriteSheet = new Image();
spriteSheet.src = "./img/sprite.png"; // Replace with the path to your sprite sheet image
spriteSheet.onload = function () {
  init();
};

let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

const scale = 2;
const frameWidth = 840; // Width of a single frame in the sprite sheet
const frameHeight = 160; // Height of a single frame in the sprite sheet
const scaledWidth = scale * frameWidth;
const scaledHeight = scale * frameHeight;
const frameCount = 23; // Total number of frames in the sprite sheet
const animationSpeed = 1000; // Time (in milliseconds) per frame

function init() {
  ctx.drawImage(
    spriteSheet,
    0,
    0,
    frameWidth,
    frameHeight,
    0,
    0,
    500,
    85
  );
}
