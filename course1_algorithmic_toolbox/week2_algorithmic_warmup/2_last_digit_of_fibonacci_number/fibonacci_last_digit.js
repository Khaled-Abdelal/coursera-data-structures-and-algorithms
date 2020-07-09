// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(n) {
    // write your code here
    while(n>60){
        // fib numbers ending repeat every 60 number
        n=n-60
    }
    if(n <= 1) return n;
    const fibArray = [0,1]
    for(let i = 2; i <= n ; i++ ){

        fibArray[i] = fibArray[i-1] + fibArray[i-2]
    }
    return fibArray[n] % 10
}

module.exports = fib;
