// Size of canvas. These get updated to fill the whole browser.
let width = 150;
let height = 150;

const num = 10;

var ars = [];

function init() {
  for (var i = 0; i < num; i += 1) {
    ars[ars.length] = {
      x: (i/ num) * width,
      y: (i / num) * height,
      dx: 0,
      dy: 0,
    };
  }
}

function distance(b1, b2) {
  return Math.sqrt(
    (b1.x - b2.x) * (b1.x - b2.x) +
      (b1.y - b2.y) * (b1.y - b2.y),
  );
}


// Called initially and whenever the window resizes to update the canvas
// size and width/height variables.
function sizeCanvas() {
  const canvas = document.getElementById("2d");
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}


function draw(ctx, b) {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(b.x + 25, b.y + 25 , 5, 5);
}

// Main animation loop
function animationLoop() {

  
  const ctx = document.getElementById("2d").getContext("2d");
  ctx.clearRect(0, 0, width, height);
  for (let b of ars) {
    draw(ctx, b);
  }

  // Schedule the next frame
  window.requestAnimationFrame(animationLoop);
}

window.onload = () => {
  // Make sure the canvas always fills the whole window
  window.addEventListener("resize", sizeCanvas, false);
  sizeCanvas();
  init();
  window.requestAnimationFrame(animationLoop);
};
