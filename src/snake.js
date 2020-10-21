import Neuron from "/iifront/src/neuron.js";
var data = [];
class Snake {
    constructor(x = 0, y = 0, s = 25) {
        this.posX = x;
        this.posY = y;
        this.size = s;
        this.color = '#cf2626';
        this.body = []
        this.neurons = {
            move:[.5,.5,.5,.5],
            lastDistance:9999,
            neuron0: new Neuron(3,4,1),
            neuron1: new Neuron(3,4,1),
            neuron2: new Neuron(3,4,1),
            neuron3: new Neuron(3,4,1),
        }

    }

    findFood(food){

        let x1 = this.posX-food.posX
        let y1 = this.posY-food.posY
        let g1 = Math.sqrt(x1*x1+y1*y1)

        this.neurons.move[0] = this.neurons.neuron0.init([x1,y1,g1])[0]
        this.neurons.move[1] = this.neurons.neuron1.init([x1,y1,g1])[0]
        this.neurons.move[2] = this.neurons.neuron2.init([x1,y1,g1])[0]
        this.neurons.move[3] = this.neurons.neuron3.init([x1,y1,g1])[0]

        var max = Math.max.apply(null, this.neurons.move);
        var idxMax = this.neurons.move.indexOf(max);
        console.log(this.neurons.move,idxMax)
        // var idxMaxS = this.neurons.move.indexOf(ss.sort()[3]);

        // for (let i=0;i<this.neurons.move.length;i++){
        //
        // }
        // console.log(this.neurons.move,idxMax,idxMaxS)
        // this.posY += this.neurons.move[0]>this.neurons.move[2]?this.neurons.move[0]:this.neurons.move[2]
        // this.posX += this.neurons.move[1]>this.neurons.move[3]?this.neurons.move[1]:this.neurons.move[3]
            switch (idxMax){
                case 0:
                    this.posY-=1
                    break;
                case 1:
                    this.posX+=1
                    break;
                case 2:
                    this.posY+=1
                    break;
                case 3:
                    this.posX-=1
                    break;
            }
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




        if (document.getElementById('isTrain').checked){
            if (g1<this.neurons.lastDistance){
                if (idxMax==0){
                    this.neurons.neuron0.train([x1,y1,g1],[1])
                }
                if (idxMax==1){
                    this.neurons.neuron1.train([x1,y1,g1],[1])
                }
                if (idxMax==2){
                    this.neurons.neuron2.train([x1,y1,g1],[1])
                }
                if (idxMax==3){
                    this.neurons.neuron3.train([x1,y1,g1],[1])
                }
            }else {
                if (idxMax==0){
                    this.neurons.neuron0.train([x1,y1,g1],[0])
                }
                if (idxMax==1){
                    this.neurons.neuron1.train([x1,y1,g1],[0])
                }
                if (idxMax==2){
                    this.neurons.neuron2.train([x1,y1,g1],[0])
                }
                if (idxMax==3){
                    this.neurons.neuron3.train([x1,y1,g1],[0])
                }
            }
        }


        this.neurons.lastDistance = g1
       // console.log(d[0].x,d[0].y, )






        // let [neyX,neyY] = [new Neuron(xX),new Neuron(xY)]
     // console.log("sss",[neyX.predict(),neyY.predict()])



       // console.log("2",d, applyTrainUpdate(),calculateResults(),outputResults())
    }




}
export default Snake;


