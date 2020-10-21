class Neuron {
    constructor(input,hidden,output) {
        this.learningRate = .3;
        this.Neuron = synaptic.Neuron,
            this.Layer = synaptic.Layer,
            this.Network = synaptic.Network,
            this.Trainer = synaptic.Trainer,
            this.Architect = synaptic.Architect;

        var inputLayer = new this.Layer(input);
        var hiddenLayer = new this.Layer(hidden);
        var outputLayer = new this.Layer(output);

        inputLayer.project(hiddenLayer);
        hiddenLayer.project(outputLayer);

        this.myNetwork = new synaptic.Network({
            input: inputLayer,
            hidden: [hiddenLayer],
            output: outputLayer
        });


        for (var i = 0; i < 200000; i++)
        {
            // this.myNetwork.activate([20,20,40,30]);
            // this.myNetwork.propagate(this.learningRate, [0,1,0,0]);
            //
            // this.myNetwork.activate([20,20,5,45]);
            // this.myNetwork.propagate(this.learningRate, [0,0,1,0]);
            //
            // // 1,0 => 1
            // this.myNetwork.activate([20,20,21,15]);
            // this.myNetwork.propagate(this.learningRate, [0,0,0,1]);
            //
            // // 1,1 => 0
            // this.myNetwork.activate([20,20,18,20]);
            // this.myNetwork.propagate(this.learningRate, [1,0,0,0]);
        }
    }
    init(input){
        return this.myNetwork.activate(input)

    }
    train(input,output){
        this.myNetwork.activate(input);
        this.myNetwork.propagate(.3, output);

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
