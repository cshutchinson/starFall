var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var particleArray = new Array;

for (var x=0; x<500; x++){
  particleArray.push(new Particle);
}

function Particle() {
  this.x = Math.floor(Math.random()*canvas.width);
  this.y = Math.floor(Math.random()*50);
  this.vx = Math.tan((Math.random()*5));
  this.vy = (Math.random()*5)+2;
  this.size= 3;
  this.color= '#'+Math.floor(Math.random()*16777215).toString(16);
  this.drawParticle = function() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
    return true;
  };
}

function drawCanvas() {
  ctx.fillStyle = 'rgba(0,0,0,0.5)';
  ctx.fillRect(0,0, canvas.width, canvas.height);
  particleArray.forEach(function(elem){
    elem.x += elem.vx;
    elem.y += elem.vy;
    elem.drawParticle();
     elem.y >= canvas.height ? elem.y=0 : null;
     elem.x >= canvas.width ? elem.x=0 : null;
  });
  raf = window.requestAnimationFrame(drawCanvas);
}

drawCanvas();
