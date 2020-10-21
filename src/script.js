import Snake from "/iifront/src/snake.js";
import Canvas from "/iifront/src/canvas.js";
import Food from "/iifront/src/food.js";

const canvas = new Canvas(1000,700)
const FOODS = []
class Script{
    constructor() {
        this.snake = new Snake(100,200)
        this.food = new Food(500,250,25,'#dbac2a')
        // FOODS.push(new Food(500,200,25,'#ff0000'))
        FOODS.push(this.food)
        // FOODS.push(new Food(500,random(500,700),25,'#62bf04'))



        canvas.canv.addEventListener('mousedown', (e) =>{

            this.food.posX = e.layerX
            this.food.posY = e.layerY
        })

        // canvas.drawElements([this.snake,...FOODS])
        setInterval(()=>{
            this.snake.findFood(this.food)
            canvas.drawElements([this.snake,this.food])
        },10)
    }
}
function random(min, max) {
    return min + Math.random() * (max - min);
}
export default Script;
