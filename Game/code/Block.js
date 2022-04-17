class Block {
    constructor(x,y, box){
        this.x = x;
        this.y = y;
        this.gridBox = box;
    }

    isNextTo(gridBox){
        return this.gridBox.x + 100 == gridBox.x || this.gridBox.y+100 == gridBox.y || this.gridBox.x == gridBox.x+100 || this.gridBox.y == gridBox.y+100;
    }
   

}