class GridBox {
    constructor(rows, cols){
        this.rows = rows;
        this.cols = cols;
        this.cells = [];
        for(let r=0; r<rows; r++){
          this.cells.push([]);
          for(let c=0; c<cols; c++){
            this.cells[r].push(new Block(r, c));
          }
        }
      }
      draw(){
        const size = min(width/this.cols, height/this.rows);
        const w = size * this.cols, h = size * this.rows;
        push();
        translate((width-w)/2, (height-h)/2); // center the grid
        for(const rows of this.cells){
          for(const block of rows){
            block.draw(size);
          }
        }
        pop();
      }
    }