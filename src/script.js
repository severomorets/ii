import Snake from "/iifront/src/snake.js";
import Canvas from "/iifront/src/canvas.js";
import Food from "/iifront/src/food.js";

const canvas = new Canvas(1000,700)
const FOODS = []
class Script{
    constructor() {
        this.snake = new Snake(100,200)

        FOODS.push(new Food(500,200,25,'#ff0000'))
        FOODS.push(new Food(500,500,25,'#dbac2a'))
        // FOODS.push(new Food(500,random(500,700),25,'#62bf04'))



        canvas.canv.addEventListener('mousedown', (e) =>{
            this.snake.posX = e.layerX
            this.snake.posY = e.layerY
        })
        setInterval(()=>{
            this.snake.findFood(FOODS)
            canvas.drawElements([this.snake,...FOODS])
        },1000)
    }
}
function random(min, max) {
    return min + Math.random() * (max - min);
}
export default Script;
