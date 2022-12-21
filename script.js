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
    let newRect;
    if (this.rotateX == 1) {
      newRect = {
        x:this.tail[this.tail.length - 1].x + this.size,
        y:this.tail[this.tail.length - 1].y
      }

    } else if (this.rotateX == -1) {
      newRect = {
        x:this.tail[this.tail.length - 1].x - this.size,
        y:this.tail[this.tail.length - 1].y
      }

    } else if (this.rotateY == 1) {
      newRect = {
        x:this.tail[this.tail.length - 1].x,
        y:this.tail[this.tail.length - 1].y + this.size
      }

    } else if (this.rotateY == -1) {
      newRect = {
        x:this.tail[this.tail.length - 1].x,
        y:this.tail[this.tail.length - 1].y - this.size
      }
    }

    this.tail.shift();
    this.tail.push(newRect);
  }
}

class Apple {
  constructor() {
    let isTouching;
    while(true) {
      isTouching = false;
      this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size
      this.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size
    }

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

