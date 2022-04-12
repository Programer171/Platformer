class Player{

     constructor(){

        this.xSpeed = 0;
        this.ySpeed = 0;
        this.x = 0;
        this.y = 0;
        this.width = 50;
        this.height = 100;
        this.color = "red";
        this.direction = 1;
        this.jump = false;
        this.jumpPower = 30;
        this.fallingSpeed = 2;
        this.minHeight = 90;
        this.acceleration = 2;

     }

     display(){

        fill(this.color);
        rect(this.x, this.y, this.width, this.height);

     }

     update(){

        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.gravity();
     
    }

     gravity(){

        if(this.y + 100>= height && this.jump == false){
            this.y = height - 130;
        }else{
            this.ySpeed = this.ySpeed + (this.acceleration * this.direction);
        }        

    }

    Jump(){
        this.ySpeed = -this.jumpPower;       
    }

}