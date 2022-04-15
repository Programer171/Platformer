let player;//player object
let bg;// background image
let grass;
let imgAspect = 960/540;
let bgWidth, bgHeight;

function preload() {
  // runs once to load all the files needed
  bg = loadImage('/Game/Assets/morning.png');//loadImage 
  grass = loadImage('/Game/Assets/grass.png');//loadImage
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
  update();
  console.log(frameRate());
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
//just so we dont luanch the player like a rocket
function keyPressed(){
  if(keyCode == UP_ARROW){
    if(player.y >= height - player.minHeight);
    player.Jump();
  }
}

// updates the whole game(also checks for keypresses, I took away the keyPressed function cuz this looks much more natural)
  function update(){
    player.update();
    player.display();

  }
 