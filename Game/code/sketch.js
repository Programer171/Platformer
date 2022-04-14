let player;//player object
let bg;// background image
let grass;
let imgAspect = 960/540;
let bgWidth, bgHeight;

function preload() {
  // runs once to load all the files needed
  bg = loadImage('../Assets/morning.png');//loadImage 
  grass = loadImage('../Assets/grass.png');//loadImage
}

//this function runs once everytime the page is reloaded or opened like the main function in java
function setup() {
  player = new Player();
  createCanvas(windowWidth, windowHeight);
}

//this function runs every frame(60 times per second) this will be the function we would be working on the most its kind of like a while(true) but better :D 
function draw() {
  imageMode(CENTER);
  if(imgAspect> width/height){
    bgWidth=  height * imgAspect;
    bgHeight =  height;
  }
  else{
    bgWidth = width;
    bgHeight = width/imgAspect;
  }
  image(bg,width/2,height/2, bgWidth,bgHeight);
  imageMode(CORNER)
  for(let i = 0; i<width; i+=100){
    image(grass, i, height-100, 100,100);
  }
  player.update();
  player.display();
}


//this function basically changes the size of the canvas(the drawing board) everytime the window is resized
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

  if(imgAspect> width/height){
    bgWidth=  height * imgAspect;
    bgHeight =  height;
  }
  else{
    bgWidth = width;
    bgHeight = width/imgAspect;
  }
}

//runs everytime a key is pressed
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