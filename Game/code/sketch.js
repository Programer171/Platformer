let player;//player object
let bg;// background image
let grass;
let imgAspect = 960/540;
let rows;
let columns;
let bgWidth, bgHeight;
let size;
let grid;
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
  createCanvas(innerWidth, innerHeight);
  boxHeight = height/10;
  boxWidth = width/10;
  
  grid = new GridBox(16, 16);
}

//this function runs every frame(60 times per second) this will be the function we would be working on the most its kind of like a while(true) but better :D 
function draw() {
  size = sqrt((width*height)/(15**2))
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
  fill(0);
  stroke(255);
  grid.draw();
}


//this function basically changes the size of the canvas(the drawing board) everytime the window is resized
function windowResized(){
  resizeCanvas(innerWidth,innerHeight);

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
   // setupGrid();
    //drawGrid();//🤞 lets hope this works...
  }
 
function setupGrid(){
  for(let i = 0; i<15; i++){
    for(let j = 0; j<15; j++){
      grid[i][j] = new GridBox(i+size,j+size)//what should I put here?
    }
  }
}

function drawGrid(){
  for(let i = 0; i<15; i++){
    for(let j = 0; j<15; j++){
        grid[i][j].draw();
    }
  }
}

function reduce(number,denomin){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(number,denomin);
  return [number/gcd, denomin/gcd];
}
 