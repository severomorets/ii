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
            food: new Neuron()
        }

    }

    findFood(FOODS){

        data = [

        ];
        let d = []
        let input = []

        for(var i=0;i<FOODS.length;i++){
            let x = Math.abs(this.posX-FOODS[i].posX)
            let y = Math.abs(this.posX-FOODS[i].posY)
            let g = Math.sqrt(x*x+y*y)


            d.push({food:FOODS[i],distance:g,x,y})
        }
        d.sort((a,b)=>{return a.distance - b.distance})
       console.log( this.neurons.food.predict([d[0].x,d[0].y]))






        // let [neyX,neyY] = [new Neuron(xX),new Neuron(xY)]
     // console.log("sss",[neyX.predict(),neyY.predict()])



       // console.log("2",d, applyTrainUpdate(),calculateResults(),outputResults())
    }




}
export default Snake;


