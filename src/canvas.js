class Canvas {
    constructor(w=500,h=500) {
        this.canv = document.getElementById('canv');
        this.ctx = canv.getContext('2d');
        this.canv.width = w;
        this.canv.height = h;


    }
    drawElements = function(snake){
        drawCell(snake.posX,snake.posX,snake.size,snake.size)
    }



    drawElements = function(el) {
        this.clear();


        for (var i=0;i<el.length;i++){


            if (el[i].size){
                this.ctx.beginPath();
                this.ctx.fillStyle = el[i].color;
                this.ctx.arc(el[i].posX, el[i].posY, el[i].size, 0, 2 * Math.PI, true);
                this.ctx.fill();
            }
            // console.log(el[i].width)
            if (el[i].width){


                this.ctx.beginPath();
                this.ctx.fillStyle =el[i].color;
                this.ctx.fillRect(el[i].posX, el[i].posY, el[i].width, el[i].height);
            }


        }



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
