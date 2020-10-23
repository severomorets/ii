import Canvas from "/iifront/robot/canvas.js";


const canvas = new Canvas(1000,700)

class Script{
    constructor() {




        canvas.canv.addEventListener('mousemove', (e) =>{
            document.getElementById('mouseX').innerHTML = e.layerX
            document.getElementById('mouseY').innerHTML = e.layerY

        })

        // canvas.drawElements([this.snake,...FOODS])
        setInterval(()=>{

            canvas.drawElements({x:150,y:200,angle:30})
        },10)
    }
}
function random(min, max) {
    return min + Math.random() * (max - min);
}
export default Script;
