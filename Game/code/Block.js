class Block {
    constructor(r, c){
      this.r = r;
      this.c = c;
    }
    draw(size){
      rect(this.c * size, this.r * size, size, size);
    }
  }