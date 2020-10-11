var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") { 
      console.log(maxValue(line));
      process.exit();
  }
}
function maxValue(expression){
   const subExprestions = expression.split("*")
}

module.exports = maxValue