const fs = require('fs');

const synaptic = require('synaptic')
const Layer = synaptic.Layer
const Network = synaptic.Network

var inputLayer = new Layer(1920000)
var hiddenLayer = new Layer(80)
var outputLayer = new Layer(3)

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

// hiddenLayer.project(outputLayer)

var myNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
})




// var learningRate = .1
// for(let i=0; i<500; i++){
//     myNetwork.activate([0,0])
//     myNetwork.propagate(learningRate, [0,0])
//     /*
//     myNetwork.activate([0,1])
//     myNetwork.propagate(learningRate, [0,1])
//     */
//     myNetwork.activate([1,0])
//     myNetwork.propagate(learningRate, [0,1])
//
//     myNetwork.activate([1,1])
//     myNetwork.propagate(learningRate, [1,1])
// }

// console.log('Result_1 for [1,1]:', myNetwork.activate([1,1]))
// console.log('****')
console.log('Unknown for [0,1]:', myNetwork.activate([0,1]))
var exported = myNetwork.toJSON();

fs.writeFileSync("C:/Users/e.s.busorgin/WebstormProjects/iifront/faceDetect/basefile.txt",JSON.stringify(exported));
// fs.writeFileSync('/tmp/test-sync', 'Hey there!');
// var imported = Network.fromJSON(exported);
// console.log(exported)