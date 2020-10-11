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
  if(i === 0 ){
    return j 
  } 
  if(j === 0){
    return i 
  }
  if(stringA[i-1] == stringB[j-1]){
    return editDistanceHelper(stringA, stringB, i-1, j-1)
  }
  
  const result1 = editDistanceHelper(stringA, stringB, i-1, j)
  const result2 = editDistanceHelper(stringA, stringB, i, j-1)
  const result3 = editDistanceHelper(stringA, stringB, i-1, j-1)
  let minRes = Math.min(result1, result2, result3)
  return 1 + minRes
}