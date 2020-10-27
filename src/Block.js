class Block {
    constructor(x = 0, y = 0, w = 25,h = 100,color = '#000000') {
        this.posX = x;
        this.posY = y;
        this.size = null;
        this.width = w;
        this.height = h;
        this.color = color;
        this.body = []

    }



    random(min, max) {
        return min + Math.random() * (max - min);
    }

}
export default Block;
