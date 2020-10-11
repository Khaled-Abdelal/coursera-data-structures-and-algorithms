var readline = require('readline');

process.stdin.setEncoding('utf8');
var rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

rl.on('line', readLine);

let stringA,stringB
function readLine (line) {
  if (line !== "\n") {
      if (!stringA) {
        stringA = line;
      } else {
        stringB = line;
        console.log(editDistance(stringA, stringB));
        process.exit();
     }
  }
}
function editDistance(){
  return editDistanceHelper(stringA, stringB, stringA.length, stringB.length)
}
function editDistanceHelper(stringA, stringB, i, j){
  let table = []
  for(let i=0; i <=stringA.length; i++){
    table[i]=[]
    for(let j=0; j <= stringB.length; j++){
      if(i == 0){
        table[i][j] = j
      }
      else if(j == 0){
        table[i][j] = i
      }else if(stringB[j-1] === stringA[i-1]){
        table[i][j] = table[i-1][j-1]
      }
      else {
        table[i][j] = 1+Math.min(table[i-1][j], table[i][j-1], table[i-1][j-1])
      }
    }
  }
  return table[stringA.length][stringB.length]
}