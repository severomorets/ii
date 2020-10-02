var R = require('ramda');
void 0; //to not bloat the output
var random = require('seed-random')(1337);
var data = [
    {input: [0, 0], output: 1},
    {input: [4, 4], output: 0},
    {input: [1, 2], output: 1},
    {input: [1, 1], output: 1},
    {input: [5, 8], output: 0},
    {input: [6, 4], output: 0},
    {input: [3, 2], output: 1},
    {input: [2, 3], output: 1},
    {input: [3, 4], output: 0},
    {input: [4, 3], output: 0},
];
var activation_sigmoid = x => 1 / (1 + Math.exp(-x));
var derivative_sigmoid = x => {
    const fx = activation_sigmoid(x);
    return fx * (1 - fx);
};

var weights = {
    i1_h1: random(),
    i2_h1: random(),
    bias_h1: random(),
    i1_h2: random(),
    i2_h2: random(),
    bias_h2: random(),
    i1_h3: random(),
    i2_h3: random(),
    bias_h3: random(),
    h1_o1: random(),
    h2_o1: random(),
    h3_o1: random(),
    bias_o1: random(),
};

function nn(i1, i2) {
    var h1_input =
        weights.i1_h1 * i1 +
        weights.i2_h1 * i2 +
        weights.bias_h1;
    var h1 = activation_sigmoid(h1_input);

    var h2_input =
        weights.i1_h2 * i1 +
        weights.i2_h2 * i2 +
        weights.bias_h2;
    var h2 = activation_sigmoid(h2_input);

    var h3_input =
        weights.i1_h3 * i1 +
        weights.i2_h3 * i2 +
        weights.bias_h3;
    var h3 = activation_sigmoid(h3_input);

    var o1_input =
        weights.h1_o1 * h1 +
        weights.h2_o1 * h2 +
        weights.h3_o1 * h3 +
        weights.bias_o1;

    var o1 = activation_sigmoid(o1_input);

    return o1;
}

var calculateResults = () =>{
    R.mean(data.map(({input: [i1, i2], output: y}) => Math.pow(y - nn(i1, i2), 2)));
}


var outputResults = () =>
    data.forEach(({input: [i1, i2], output: y}) =>
        console.log(`${i1} XOR ${i2} => ${nn(i1, i2)} (expected ${y})`));




var train = () => {
    const weight_deltas = {
        i1_h1: 0,
        i2_h1: 0,
        bias_h1: 0,
        i1_h2: 0,
        i2_h2: 0,
        bias_h2: 0,
        i1_h3: 0,
        i2_h3: 0,
        bias_h3: 0,
        h1_o1: 0,
        h2_o1: 0,
        h3_o1: 0,
        bias_o1: 0,
    };

    for (var {input: [i1, i2], output} of data) {

        //this part is 100% identic to forward pass function
        var h1_input =
            weights.i1_h1 * i1 +
            weights.i2_h1 * i2 +
            weights.bias_h1;
        var h1 = activation_sigmoid(h1_input);

        var h2_input =
            weights.i1_h2 * i1 +
            weights.i2_h2 * i2 +
            weights.bias_h2;
        var h2 = activation_sigmoid(h2_input);

        var h3_input =
            weights.i1_h3 * i1 +
            weights.i2_h3 * i2 +
            weights.bias_h3;
        var h3 = activation_sigmoid(h3_input);
        var o1_input =
            weights.h1_o1 * h1 +
            weights.h2_o1 * h2 +
            // weights.h3_o1 * h3 +
            weights.bias_o1;

        var o1 = activation_sigmoid(o1_input);

        //обучение начинается здесь:
        // мы вычисляем нашу дельту
        var delta = output - o1;
        //then we calculate our derivative (and throwing away "2 * " as we can multiply it later)
        var o1_delta = delta * derivative_sigmoid(o1_input);

        //а для нашего уравнения w1 * h1 + w2 * h2 мы сначала пытаемся изменить веса

        weight_deltas.h1_o1 += h1 * o1_delta;
        weight_deltas.h2_o1 += h2 * o1_delta;
        weight_deltas.h3_o1 += h3 * o1_delta;
        weight_deltas.bias_o1 += o1_delta;

        //а потом мы пытаемся изменить наши h1 и h2.
        //но мы не можем изменить их напрямую, так как они также являются функциями других Весов
        //поэтому нам нужно изменить их вес с помощью того же подхода

        var h1_delta = o1_delta * derivative_sigmoid(h1_input);
        var h2_delta = o1_delta * derivative_sigmoid(h2_input);
        var h3_delta = o1_delta * derivative_sigmoid(h3_input);

        weight_deltas.i1_h1 += i1 * h1_delta;
        weight_deltas.i2_h1 += i2 * h1_delta;
        weight_deltas.bias_h1 += h1_delta;

        weight_deltas.i1_h2 += i1 * h2_delta;
        weight_deltas.i2_h2 += i2 * h2_delta;
        weight_deltas.bias_h2 += h2_delta;

        weight_deltas.i1_h3 += i1 * h3_delta;
        weight_deltas.i2_h3 += i2 * h3_delta;
        weight_deltas.bias_h3 += h3_delta;
    }

    return weight_deltas;
}

var applyTrainUpdate = () =>{
    let weight_deltas = train()

    Object.keys(weights).forEach(key =>{
        weights[key] += weight_deltas[key]
    });
}





R.times(() => applyTrainUpdate(), 10000)
outputResults();
calculateResults();


