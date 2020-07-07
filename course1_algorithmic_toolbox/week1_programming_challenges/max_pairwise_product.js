// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(Number);
    console.log(max(arr))
    process.exit();
}

function max(arr) {
    // write your code here
    let max1 = 0;
    let maxNumIndex;
    let max2 = 0;
    // find the max number
    for(const [index, num] of arr.entries()){
        if(num > max1) {
            max1 = num;
            maxNumIndex = index
        }
    }
    // find the second biggest number
    for(const [index, num] of arr.entries()){
        if(num > max2 && index !== maxNumIndex) max2 = num;
    }
    return max1 * max2
}

module.exports = max;
