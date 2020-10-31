class Canvas {
    constructor(w=500,h=500) {
        this.canv = document.getElementById('canv');
        this.ctx = canv.getContext('2d');
        this.canv.width = w;
        this.canv.height = h;
        this.canv.ba



    }
    drawLineAngle = function(x1,y1,x2,y2){
        this.ctx.strokeStyle = "#5acccc";
        this.ctx.lineCap = "round";
        this.ctx.moveTo(x1,y1);
        this.ctx.lineWidth = 5;
        this.ctx.lineTo(x2, y2);
        this.ctx.stroke();
    }
    drawElements = function({x,y,angle}) {
       //x 150
        //y 200
        // angle 30







        this.ctx.beginPath();
        this.ctx.fillStyle = '#000dff';
        this.ctx.arc(this.canv.width/2-x, this.canv.height-y, 20, 0, 2 * Math.PI, true);
        this.ctx.fill();
        this.ctx.beginPath();
        this.ctx.fillStyle = '#ff4d5d';
        // this.ctx.strokeStyle = "#5acccc";
        // this.ctx.lineCap = "round";
        // this.ctx.moveTo(this.canv.width/2,this.canv.height);
        // this.ctx.lineWidth = 1;
        // this.ctx.lineTo(this.canv.width/2-x, this.canv.height-y);
        // this.ctx.stroke();
        // this.ctx.arc(this.canv.width/2, this.canv.height, 10, 0, 2 * Math.PI, true);
        // this.ctx.fill();




// console.log( (((a*a+b*b-c*c)/2*a*b))/ 180 * Math.PI)



// console.log(x,y,angle2, this.canv.width/2-x,this.canv.height-y)







        // let angle1 = 90
        // let angle2 = 30



        // let c = Math.sqrt(a*a+b*b-2*a*b*Math.cos(angle2 / 180 * Math.PI));








        this.setPosM(x,y,angle)

        // this.ctx.rotate(-angele);



    }

    setPosM(xV,yV,angle3S){

        let a = 220
        let b = 180
        let c = 80



        let y = yV-(Math.sin(angle3S.degToRad())*c)
        let x = xV-(Math.cos(angle3S.degToRad())*c)

        let __xA3A1 = Math.sqrt(x*x+y*y)
        let angle1 =  Math.acos(((a*a+__xA3A1*__xA3A1-b*b)/(2*a*__xA3A1)))* (180 / Math.PI)+Math.acos(((x*x+__xA3A1*__xA3A1-y*y)/(2*x*__xA3A1)))* (180 / Math.PI)
        let angle2 = Math.acos(((a*a+b*b-__xA3A1*__xA3A1)/(2*a*b)))* (180 / Math.PI)

        let fromViwe= (angle1-90)-(90-angle2)

        let angle3 = angle3S
        // console.log(angle1,angle2,angle3,fromViwe)
        if (true){
            angle2=fromViwe
            // angle3 = fromViwe
        }







        // let angle1 =  Math.acos(((a*a+c*c-b*b)/(2*a*c)))* (180 / Math.PI)+Math.acos(((x*x+c*c-b*b)/(2*x*c)))* (180 / Math.PI)

        // let angle1 = Math.acos(((a*a+c*c-b*b)/(2*a*c)))* (180 / Math.PI)+Math.acos(((x*x+c*c-b*b)/(2*x*c)))* (180 / Math.PI)
        // let angle2 = Math.acos(((a*a+b*b-c*c)/(2*a*b)))* (180 / Math.PI)

        // let angle2 = Math.acos(((b*b+c1*c1-y*y)/(2*b*c1)))* (180 / Math.PI)

        // let angle2 = 0
        // let angle3 = 0




        let x1 = this.canv.width/2 + a*Math.cos( Math.PI/1 - angle1*(Math.PI/180))
        let y1 = this.canv.height - a*Math.sin(Math.PI/1 - angle1*(Math.PI/180))

        let x2 = x1 + b*Math.cos( Math.PI/1 - angle2*(Math.PI/180))
        let y2 = y1 - b*Math.sin(Math.PI/1 - angle2*(Math.PI/180))

        let x3 = x2 + c*Math.cos( Math.PI - angle3*(Math.PI/180))
        let y3 = y2 - c*Math.sin(Math.PI - angle3*(Math.PI/180))
        this.ctx.beginPath();
        this.ctx.fillStyle = 'rgba(0,0,0,1)';
        this.ctx.fillRect(0,0,window.innerWidth,window.innerHeight);



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
        this.ctx.beginPath();
        this.ctx.arc(x3,y3, 10, 0, 2 * Math.PI, true);
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
