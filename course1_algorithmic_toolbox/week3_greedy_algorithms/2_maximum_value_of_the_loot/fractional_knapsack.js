
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);

    return [v, w];
}

function max(count, capacity, values, weights) {
    // write your code here
    let resultSum = 0
    const valuesPerWeight = []
    const valuePerWeightToWeight = {}
    for(let i = 0; i< values.length ;i++){
        valuesPerWeight.push(values[i]/weights[i])
        valuePerWeightToWeight[values[i]/weights[i]] = weights[i]
    }
    valuesPerWeight.sort((a,b)=>b-a)
    
    for(const valuePerWeight of valuesPerWeight){
        if(count > 0 && capacity >= valuePerWeightToWeight[valuePerWeight]){
            count --
            capacity = capacity - valuePerWeightToWeight[valuePerWeight]
            resultSum = parseFloat((resultSum + (valuePerWeightToWeight[valuePerWeight]*valuePerWeight)))
        }else{
            resultSum = parseFloat((resultSum + (capacity*valuePerWeight)))
            capacity = 0
            count --
        }
    }
    return resultSum.toFixed(4)
}

module.exports = max;
