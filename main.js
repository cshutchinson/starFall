var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvasWidth=500;
canvasHeight=500;


function drawBox(size, color, position) {
  ctx.fillStyle = 'red';
  ctx.fillRect(position.x, position.y, size, size);
}

drawBox(5, '#09F', {x: 10, y: 10});
