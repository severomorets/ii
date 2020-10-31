import Canvas from "/iifront/robot/canvas.js";


const canvas = new Canvas(1000,700)
let x = 150
let y = 200
let angle = 30
let coordsStart = {
    x:0,
    y:0
}
let coordsEnd = {
    x:0,
    y:0
}
let mouseDown = false
class Script{
    constructor() {




        canvas.canv.addEventListener('mousemove', (e) =>{
            document.getElementById('mouseX').innerHTML = 1000/2-e.layerX
            document.getElementById('mouseY').innerHTML = 700-e.layerY

        })
        canvas.canv.addEventListener('mouseup', (e) =>{
            mouseDown = false
            coordsEnd.x = 1000/2-e.layerX
            coordsEnd.y = 700-e.layerY

            let a = coordsStart.y-coordsEnd.y
            let b = coordsStart.x-coordsEnd.x
            let c = Math.sqrt(a*a+b*b)
            let A1 = Math.acos(((b*b+c*c-a*a)/(2*b*c)))* (180 / Math.PI)

            angle = A1
            if (a<0){angle*=-1}
            x = 1000/2-e.layerX
            y = 700-e.layerY
            console.log(a,b,c,A1,angle)

        })
        canvas.canv.addEventListener('mousedown', (e) =>{
            mouseDown = true

            coordsEnd = {
                x:1000/2-e.layerX,
                y:700-e.layerY
            }
            coordsStart.x = 1000/2-e.layerX
            coordsStart.y = 700-e.layerY
            // x = 1000/2-e.layerX
            // y = 700-e.layerY

        })
        // canvas.drawElements([this.snake,...FOODS])
        setInterval(()=>{
            canvas.clear()

            canvas.drawElements({x:x,y:y,angle:angle})
            canvas.drawLineAngle(1000/2-coordsStart.x,700-coordsStart.y,1000/2 - coordsEnd.x,700-coordsEnd.y)

        },10)
    }
}
function random(min, max) {
    return min + Math.random() * (max - min);
}
export default Script;
