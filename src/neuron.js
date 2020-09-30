class Neuron {
    constructor(input,h) {
        this.w = [.1,.2]//синапс
        this.h_1 = [.5,.3,.8,.4]
        this.a = 0.03//сдвиг
        this.inputLength = input
        this.neuronLength = h
        for (let i=0;i<this.inputLength;i++){
           // this.w.push(Math.random())
        }
        console.log('W',this.w)
    }
    init(input,output){

    }
    train(x){
        for (let i=0;i<this.neuronLength;i++){
            // this.h_1[i] = this.predict(x)
            console.log(this.predict(x))
        }

    }
    predict(x) {
        let Y = 0
        for (var i=0;i<x.length;i++){
            console.log("i"+i,(1/x[i]),this.w[i])
            Y+=(1/x[i])*this.w[i]

        }
        return (1/(1+Math.exp(-Y)))
        // return sigmoid(Y)
    }

}

function random(min, max) {
    return +((min + Math.random() * (max - min)).toFixed(0));
}
export default Neuron;
function sigmoid(t) {
    return 1/(1+Math.pow(Math.E, -t));
}
