class Player{

     constructor(){
        this.xSpeed = constrain(0,0,5);//this stores the horizontal speed of the player
        this.ySpeed = constrain(0, 0,5);//this stores the vertical speed of the player
        this.x = 0;//this is the x position of the player
        this.y = 0;//this is the y position of the player
        this.width = 50;//width of player
        this.height = 100;//height of player
        this.color = "red";//color of the player TODO: make this an image
        this.direction = 1;//direction of the player this determines if the player is moving up or down
        this.jump = false;//this isnt needed idk why i put it here lol
        this.jumpPower = 30;//this is the power of the jump this determines how high the player can go wh
        this.fallingSpeed = 2;//gravity
        this.minHeight = 90;//this is the height of the ground
        this.acceleration = 2;//this is the acceleration of the player
        this.digging = false;
     }
    //this function displays the player, it is run everyframe to show movement
     display(){
        fill(this.color);
        rect(this.x, this.y, this.width, this.height);
     }
    ///this updates the players position and applies gravity
     update(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.gravity();

        if (keyIsDown(LEFT_ARROW)) {
            //if(xSpeed >= -10)
                this.xSpeed -= 5;
        }else if (keyIsDown(RIGHT_ARROW)) {
            //if(xSpeed >= 10)
                this.xSpeed += 5;
        }else if(keyIsDown(DOWN_ARROW)) { //check for digging
            this.dig();
        }else{
            this.xSpeed -= this.xSpeed;
        }

        if(this.x < 0 ){
            this.x = 0 ;
        }else if(this.x + 50 > width){
            this.x = width-50;
        }
            

    }
    // this function applies gravity by changing the velocity of the player
     gravity(){
        if(this.y + 100>= height && this.jump == false){
            this.y = height - 130;
        }else{
            this.ySpeed = this.ySpeed + (this.acceleration * this.direction);
        }        
    }
    //jump function
    Jump(){
        this.ySpeed = -this.jumpPower;       
    }

    //check if block is near the player in a specific direction
    checkBlock(){


    }

    //dig function
    dig(){
        //If player is next to a dirt/rock/ore block
        //Bolean validBlock?
        //if arrow goes to adjust block: dig

    }

}