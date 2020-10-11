var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

function readLine (line) {
  if (line !== "\n") {
    var a = parseInt(line.toString().split(' ')[0], 10);
    console.log(moneyChange(a,[1, 3, 4]))
    process.exit();
  }
}
function moneyChange(money, dominations){
    const table = []
    for(let i=0;i<=money;i++){
        table[i] = Infinity
    }
    table[0] = 0;
    for(let i =1; i<=money;i++){
        for(const domination of dominations){
            if(domination <= i){
                res = table[i - domination]+1
                if(res < table[i]) table[i] = res
            }
        }
    }
    return table[money]
}
