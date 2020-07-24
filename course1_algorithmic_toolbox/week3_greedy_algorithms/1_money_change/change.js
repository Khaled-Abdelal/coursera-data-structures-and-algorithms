var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    var m = parseInt(line.toString().split(' ')[0], 10);
    console.log(getChange(m));
    process.exit();
  }
}

function getChange(m){
    const numOfTens = parseInt(m / 10)
    const numOfFives = parseInt((m % 10) / 5)
    const numOfOnes = parseInt(((m % 10) % 5) / 1)
    return numOfTens + numOfFives + numOfOnes
}