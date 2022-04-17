let player;//player object
let bg;// background image
let grass;
let imgAspect = 960/540;
let bgWidth, bgHeight;
let grid = [];
let boxWidth;
let boxHeight;

function preload() {
  // runs once to load all the files needed
  bg = loadImage('/Game/Assets/morning.png');//loadImage 
  grass = loadImage('/Game/Assets/grass.png');//loadImage
}

//this function runs once everytime the page is reloaded or opened like the main function in java
function setup() {
  player = new Player();
  createCanvas(windowWidth, windowHeight);
  boxHeight = height/10;
  boxWidth = width/10;
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
  //setupGrid();
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
    setupGrid();
  }
 

  function setupGrid(){
    console.log(width, height);
    for(let i = 0; i< width; i+=boxWidth){//+=100 cuz 100 pixels
      for(let j = 0; j <height; j+=boxHeight){
        grid[i/boxWidth] = new Array(j/10);
        grid[i/boxWidth][j/boxHeight] = new GridBox(i, j)
        //this would create a 2d array with width 100, height 200 right?
        //wait. it'll start at 0, and then be added to 100, which is greater than  i<100. so just two lines at best
        //now it will be more than 2 lines, since I set i<width, and j<height
        //lets draw this square and see the result
        fill(255,255,255,0)
        rect(grid[i/boxWidth][j/boxHeight].x, grid[i/boxWidth][j/boxHeight].y, boxWidth,boxHeight);
      }
    }
  }