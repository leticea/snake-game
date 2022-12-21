class Snake {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.tail = [{x:this.x, y:this.y}]
    this.rotateX = 0;
    this.rotateY = 1;
  }

  move() {
    
  }
}

const canvas = document.getElementById('canvas');
const snake = new Snake();
const apple = new Apple();
const canvasContext = canvas.getContext('2d');

window.onload = () => {
  gameLoop();
}

function gameLoop() {
  setInterval(show, 1000/15) // [here 15 is our fps value]
}

function show() {
  update();
  draw();
}

