class GridBox {
    //make an array which has length corresponding to the canvas size
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.items = [];
    }

    set(arrayOfObjects){
        this.items = arrayOfObjects;
    }

    //objects: blocks, ores, grass
    add(object){
        this.items.push(object);
    }
    //remove objects, given the index, and object
    remove(object){
        if(this.items.indexOf(object) !=-1)
            this.items.splice(this.items.indexOf(object), 1);
    }

    


}