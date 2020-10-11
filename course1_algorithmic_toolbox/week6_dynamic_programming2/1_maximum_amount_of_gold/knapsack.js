var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let arrA,arrB
function readLine (line) {
  if (line !== "\n") {
      if (!arrA) {
        arrA = line;
      } else {
        arrB = line;
        console.log(knapsack(Number(arrA.split(" ")[0]), arrB.split(" ")));
        process.exit();
     }
  }
}
function knapsack(maxW, w){
    let table = []
   
    for(let i=0;i<=maxW;i++){
      table[i]=[]
      for(let j=0;j<w.length;j++){
        if(i === 0) table[i][j] = 0
        else if(Number(w[j])<=i){
          let option1 = 0;
          let option2 = 0;
          let option3 = 0;
          if(Number.isInteger(table[i][j-1])){
            option1 = table[i][j-1]
          }
          if(Number.isInteger(Number(w[j])+table[i-Number(w[j])][j-1])){
            option2 = Number(w[j])+table[i-Number(w[j])][j-1]
          }
          if(Number.isInteger(Number(w[j]))){
            option3 = Number(w[j])
          }
          table[i][j] = Math.max(option1, option2, option3)
        }else{
          table[i][j] = table[i][j-1] || 0
        }
      }
    }
    //console.log(table)
    return table[maxW][w.length-1]
}

module.exports = knapsack