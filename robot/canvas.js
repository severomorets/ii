class Canvas {
    constructor(w=500,h=500) {
        this.canv = document.getElementById('canv');
        this.ctx = canv.getContext('2d');
        this.canv.width = w;
        this.canv.height = h;



    }

    drawElements = function({x,y,angle}) {
       //x 200
        //y 300
        // angle 30
        let a = 250
        let b = 220
        let c = Math.sqrt(x*x+y*y)
        this.clear();





        this.ctx.beginPath();
        this.ctx.fillStyle = '#000dff';
        this.ctx.arc(this.canv.width/2-x, this.canv.height-y, 10, 0, 2 * Math.PI, true);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.fillStyle = '#ff4d5d';
        this.ctx.strokeStyle = "#5acccc";
        this.ctx.lineCap = "round";
        this.ctx.moveTo(this.canv.width/2,this.canv.height);
        this.ctx.lineWidth = 1;
        this.ctx.lineTo(this.canv.width/2-x, this.canv.height-y);
        this.ctx.stroke();
        // this.ctx.arc(this.canv.width/2, this.canv.height, 10, 0, 2 * Math.PI, true);
        // this.ctx.fill();

console.log()

        let angle1 = Math.acos(((a*a+c*c-b*b)/(2*a*c)))* (180 / Math.PI)+Math.acos(((x*x+c*c-b*b)/(2*x*c)))* (180 / Math.PI)
        let angle2 = Math.acos(((a*a+b*b-c*c)/(2*a*b)))* (180 / Math.PI)



console.log(a,b,c,angle1,angle2,'ab',Math.acos(((a*a+c*c-b*b)/(2*a*c)))* (180 / Math.PI),'xc'+Math.acos(((x*x+c*c-b*b)/(2*x*c)))* (180 / Math.PI))
// console.log( (((a*a+b*b-c*c)/2*a*b))/ 180 * Math.PI)



// console.log(x,y,angle2, this.canv.width/2-x,this.canv.height-y)







        // let angle1 = 90
        // let angle2 = 30
        let angle3 = 0


        // let c = Math.sqrt(a*a+b*b-2*a*b*Math.cos(angle2 / 180 * Math.PI));








        this.setPosM(a,b,80,angle1,angle2,angle3)

        // this.ctx.rotate(-angele);



    }

    setPosM(l1,l2,l3,angle1,angle2,angle3){

        let x1 = this.canv.width/2 + l1*Math.cos( Math.PI/1 - angle1*(Math.PI/180))
        let y1 = this.canv.height - l1*Math.sin(Math.PI/1 - angle1*(Math.PI/180))

        let x2 = x1 + l2*Math.cos( Math.PI/1 - angle2*(Math.PI/180))
        let y2 = y1 - l2*Math.sin(Math.PI/1 - angle2*(Math.PI/180))

        let x3 = x2 + 50*Math.cos( Math.PI/1 - angle3*(Math.PI/180))
        let y3 = y2 - 50*Math.sin(Math.PI/1 - angle3*(Math.PI/180))

// √(b^2+c^2-2bc cos⁡α )
        this.ctx.beginPath();
        this.ctx.fillStyle = '#ff4d5d';
        this.ctx.strokeStyle = "#01cc24";
        this.ctx.lineCap = "round";
        this.ctx.moveTo(this.canv.width/2,this.canv.height);
        this.ctx.lineWidth = 5;
        this.ctx.lineTo(x1, y1);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(this.canv.width/2, this.canv.height, 10, 0, 2 * Math.PI, true);
        this.ctx.fill();


        this.ctx.beginPath();
        this.ctx.fillStyle = '#ff4d5d';
        this.ctx.strokeStyle = "#cc001e";
        this.ctx.lineCap = "round";
        this.ctx.moveTo(x1,y1);
        this.ctx.lineWidth = 5;
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(x1,y1, 10, 0, 2 * Math.PI, true);
        this.ctx.fill();



        this.ctx.beginPath();
        this.ctx.fillStyle = '#ff4d5d';
        this.ctx.strokeStyle = "#1900cc";
        this.ctx.lineCap = "round";
        this.ctx.moveTo(x2,y2);
        this.ctx.lineWidth = 5;
        this.ctx.lineTo(x3, y3);
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(x2,y2, 10, 0, 2 * Math.PI, true);
        this.ctx.fill();


    }

    clear = function() {
        this.ctx.clearRect(0, 0, canv.width, canv.height);
    }


}
export default Canvas;







// this.calculate = function(draw = false) {
//     const w = canv.width;
//     const h = canv.height;
//     const p = w / pixel;
//
//     const xStep = w / p;
//     const yStep = h / p;
//
//     const vector = [];
//     let __draw = [];
//
//     for( let x = 0; x < w; x += xStep )
//     {
//         for( let y = 0; y < h; y += yStep )
//         {
//             const data = ctx.getImageData(x, y, xStep, yStep);
//
//             let nonEmptyPixelsCount = 0;
//             for( i = 0; i < data.data.length; i += 10 )
//             {
//                 const isEmpty = data.data[i] === 0;
//
//                 if( !isEmpty )
//                 {
//                     nonEmptyPixelsCount += 1;
//                 }
//             }
//
//             if( nonEmptyPixelsCount > 1 && draw )
//             {
//                 __draw.push([x, y, xStep, yStep]);
//             }
//
//             vector.push(nonEmptyPixelsCount > 1 ? 1 : 0);
//         }
//     }
//
//     if( draw )
//     {
//         this.clear();
//         this.drawGrid();
//
//         for( _d in __draw )
//         {
//             this.drawCell( __draw[_d][0], __draw[_d][1], __draw[_d][2], __draw[_d][3] );
//         }
//     }
//
//     return vector;
// }
//
//     canv.addEventListener('mousedown', function(e) {
//         is_mouse_down = true;
//         ctx.beginPath();
//     })
//
// canv.addEventListener('mouseup', function(e) {
//         is_mouse_down = false;
//     })
//
// canv.addEventListener('mousemove', function(e) {
//         if( is_mouse_down )
//         {
//             ctx.fillStyle = 'red';
//             ctx.strokeStyle = 'red';
//             ctx.lineWidth = pixel;
//
//             ctx.lineTo(e.offsetX, e.offsetY);
//             ctx.stroke();
//
//             ctx.beginPath();
//             ctx.arc(e.offsetX, e.offsetY, pixel / 2, 0, Math.PI * 2);
//             ctx.fill();
//
//             ctx.beginPath();
//             ctx.moveTo(e.offsetX, e.offsetY);
//         }
//     })
