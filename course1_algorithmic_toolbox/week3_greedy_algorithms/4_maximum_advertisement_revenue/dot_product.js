
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const n = parseInt(line.toString().split(' ')[0], 10);
    let profitPerClick = [];
    let numOfClicks = [];
    let count = 0;
    const itemsCount = 2
    rl.on('line', line => {
        const arr = readLine(line,n);
        if(count == 0) profitPerClick = arr
        if(count == 1) numOfClicks = arr

        if (++count >= itemsCount) {
            console.log(maxProfit(profitPerClick,numOfClicks));
            process.exit();
        }
    });
});

function readLine(line,n) {
    let lineNums = []
    for(let i=0;i<n;i++){
        lineNums.push(parseInt(line.toString().split(' ')[i], 10))
    }

    return lineNums;
}

function maxProfit(numOfClicks,profitPerClick) {
    // write your code here
    numOfClicks.sort((a,b)=>b-a)
    profitPerClick.sort((a,b)=>b-a)
    let sum = 0
    for(let i=0; i<numOfClicks.length ;i++){
        sum = sum + numOfClicks[i]*profitPerClick[i]
    }
    return sum
   
}

module.exports = maxProfit
