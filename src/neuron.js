class Neuron {
    constructor() {
        this.w = [.2,.2]//синапс для 2 параметров
        this.a = 0.03

    }

    predict(x) {
        let Y = 0
        for (var i=0;i<x.length;i++){
            Y+=x[i]*this.w[i]
        }
        Math.sign()
        return sigmoid(1 / (1 + Math.exp(Y)))
    }

}

function random(min, max) {
    return +((min + Math.random() * (max - min)).toFixed(0));
}
export default Neuron;
function sigmoid(t) {
    return 1/(1+Math.pow(Math.E, -t));
}
