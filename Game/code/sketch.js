let player;

function setup() {
  player = new Player();
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(220);
  player.update();
  player.display();
}



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
   player.xSpeed = -5;
  }
  if(keyCode === RIGHT_ARROW){
    player.xSpeed = 5;
  }
  if(keyCode === UP_ARROW){
  player.Jump();
  }
  if(keyCode === DOWN_ARROW){
   player.ySpeed = 5;
  }
}