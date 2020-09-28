class Food {
    constructor(x = 0, y = 0, s = 25,color = '#59cf26') {
        this.posX = x;
        this.posY = y;
        this.size = s;
        this.color = color;
        this.body = []

    }



    random(min, max) {
        return min + Math.random() * (max - min);
    }

}
export default Food;
