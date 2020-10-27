import Neuron from "/iifront/src/neuron.js";
var data = [];
class Snake {
    constructor(x = 0, y = 0, s = 25) {
        this.posX = x;
        this.posY = y;
        this.size = s;
        this.width = null;
        this.height = null;
        this.color = '#cf2626';
        this.body = []
        this.neurons = {
            move:[.5,.5,.5,.5],
            lastDistance:9999,
            lastPos:{
                x:0,
                y:0
            },
            neuron0: new Neuron(5,15,1),
            neuron1: new Neuron(5,15,1),
            neuron2: new Neuron(5,15,1),
            neuron3: new Neuron(5,15,1),
        }

    }
    MacroCollision(obj1,obj2){
        var XColl=false;
        var YColl=false;

        if ((obj1.posX + obj1.width >= obj2.posX) && (obj1.posX <= obj2.posX + obj2.width)) XColl = true;
        if ((obj1.posY + obj1.height >= obj2.posY) && (obj1.posY <= obj2.posY + obj2.height)) YColl = true;

        if (XColl&YColl){return true;}
        return false;
    }
    findFood(food){
        var activation_sigmoid = x => 1 / (1 + Math.exp(-x));
        var derivative_sigmoid = x => {
            const fx = activation_sigmoid(x);
            return fx * (1 - fx);
        };
        let x1 = this.posX-food.posX
        let y1 = this.posY-food.posY
        let g1 = Math.sqrt(x1*x1+y1*y1)

        this.neurons.move[0] = this.neurons.neuron0.init([this.posX,this.posY,food.posX,food.posY,g1])[0]
        this.neurons.move[1] = this.neurons.neuron1.init([this.posX,this.posY,food.posX,food.posY,g1])[0]
        this.neurons.move[2] = this.neurons.neuron2.init([this.posX,this.posY,food.posX,food.posY,g1])[0]
        this.neurons.move[3] = this.neurons.neuron3.init([this.posX,this.posY,food.posX,food.posY,g1])[0]
        let sigY = ((this.posY-food.posY)*0.01)
        let sigX = ((this.posX-food.posX)*0.01)



        let nY = (this.neurons.move[2]-this.neurons.move[0])*sigY
        let nX = (this.neurons.move[1]-this.neurons.move[3])*sigX



        // input = context.getImageData(0, 0, 800, 600);
// console.log(input)
//         if (this.MacroCollision(this,{}))
        let block = false;
        for (let i=0;i<window.BLOCKS.length;i++){
            if (this.MacroCollision(this,window.BLOCKS[i])){
                block = true
            }
            // console.log(this.MacroCollision(this,window.BLOCKS[i]))
        }
        // block = false
        console.log(block)
        // if (nX>0){this.posX+=1}else{this.posX-=1}
        // if (nY>0){this.posY+=1}else{this.posY-=1}
        this.posY+=nY
        this.posX+=nX
        if (block==false){
            this.posY+=nY
            this.posX+=nX

        }else{
            this.posX = this.neurons.lastPos.x
            this.posY = this.neurons.lastPos.y
        }

        // if (this.neurons.move[0]>this.neurons.move[2]){
        //     this.posY-=1
        // }else{
        //     this.posY+=1
        // }
        // if (this.neurons.move[1]>this.neurons.move[3]){
        //     this.posX+=1
        // }else{
        //     this.posX-=1
        // }

// console.log(this.neurons.move)

        if (document.getElementById('isTrain').checked){
            let x2 = this.posX-food.posX
            let y2 = this.posY-food.posY
            let g2 = Math.sqrt(x2*x2+y2*y2)
            let train = [this.posX,this.posY,food.posX,food.posY,g2]
            if (g2<this.neurons.lastDistance&&block==false){

            if (this.neurons.move[0]>this.neurons.move[2]){
                this.neurons.neuron0.train(train,[1])
                this.neurons.neuron2.train(train,[0])
            }else{
                this.neurons.neuron0.train(train,[0])
                this.neurons.neuron2.train(train,[1])
            }

                if (this.neurons.move[1]>this.neurons.move[3]){
                    this.neurons.neuron1.train(train,[1])
                    this.neurons.neuron3.train(train,[0])
                }else{
                    this.neurons.neuron1.train(train,[0])
                    this.neurons.neuron3.train(train,[1])
                }
            }else{
                if (this.neurons.move[0]>this.neurons.move[2]){
                    this.neurons.neuron0.train(train,[0])
                    this.neurons.neuron2.train(train,[1])
                }else{
                    this.neurons.neuron0.train(train,[1])
                    this.neurons.neuron2.train(train,[0])
                }

                if (this.neurons.move[1]>this.neurons.move[3]){
                    this.neurons.neuron1.train(train,[0])
                    this.neurons.neuron3.train(train,[1])
                }else{
                    this.neurons.neuron1.train(train,[1])
                    this.neurons.neuron3.train(train,[0])
                }
            }

        }



        // var idxMaxS = this.neurons.move.indexOf(ss.sort()[3]);

        // for (let i=0;i<this.neurons.move.length;i++){
        //
        // }
        // console.log(this.neurons.move,idxMax,idxMaxS)
        // this.posY += this.neurons.move[0]>this.neurons.move[2]?this.neurons.move[0]:this.neurons.move[2]
        // this.posX += this.neurons.move[1]>this.neurons.move[3]?this.neurons.move[1]:this.neurons.move[3]
        //     switch (idxMax){
        //         case 0:
        //             this.posY-=1
        //             break;
        //         case 1:
        //             this.posX+=1
        //             break;
        //         case 2:
        //             this.posY+=1
        //             break;
        //         case 3:
        //             this.posX-=1
        //             break;
        //     }
            // console.log(this.neurons.move[idxMax]-this.neurons.move[idxMaxS]<0.2)

        // if (this.neurons.move[idxMax]-this.neurons.move[idxMaxS]<0.5){
        //
        // }else{
        //     if (idxMax+idxMaxS==4||idxMax+idxMaxS==0){
        //
        //     }else{
        //         m2 = true
        //         switch (idxMaxS){
        //             case 0:
        //                 this.posY-=1
        //                 break;
        //             case 1:
        //                 this.posX+=1
        //                 break;
        //             case 2:
        //                 this.posY+=1
        //                 break;
        //             case 3:
        //                 this.posX-=1
        //                 break;
        //         }
        //     }
        //
        // }







        this.neurons.lastDistance = g1
        this.neurons.lastPos.x = this.posX
        this.neurons.lastPos.y = this.posY
       // console.log(d[0].x,d[0].y, )






        // let [neyX,neyY] = [new Neuron(xX),new Neuron(xY)]
     // console.log("sss",[neyX.predict(),neyY.predict()])



       // console.log("2",d, applyTrainUpdate(),calculateResults(),outputResults())
    }




}
export default Snake;


