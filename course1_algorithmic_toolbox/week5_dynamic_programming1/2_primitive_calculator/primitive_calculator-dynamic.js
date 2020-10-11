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
    res = dynamicCalculateMinOperations(a)
    console.log(res)
    console.log(res.operationsCount)
    let toBeLoged = ''
    for(let step of res.operationsList){
      toBeLoged+=`${step} `
    }
    console.log(toBeLoged)
    process.exit();
  }
}

function dynamicCalculateMinOperations(n){
   const table = []
  for(let i=0;i<=n;i++){
    table[i]= Infinity
  }
  table[0]={operationsCount:1,operationsList:[1]}
  table[1]={operationsCount:0,operationsList:[1]}
  for(let i=2;i<=n;i++){
    //console.log(table)
    values = [
      Number.isInteger(i-1) && {operationsCount:table[i-1].operationsCount + 1, operationsList:[...table[i-1].operationsList,table[i-1].operationsList[table[i-1].operationsList.length-1]+1]},
      Number.isInteger(i/3) && {operationsCount:table[i/3].operationsCount + 1, operationsList:[...table[i/3].operationsList,table[i/3].operationsList[table[i/3].operationsList.length-1]*3]},
      Number.isInteger(i/2) && {operationsCount:table[i/2].operationsCount + 1, operationsList:[...table[i/2].operationsList,table[i/2].operationsList[table[i/2].operationsList.length-1]*2]}
    ]
    min = {operationsCount:Infinity,operationsList:[]}
    for(const value of values){
     // console.log("values",values)
      if(Number.isInteger(value.operationsCount) && value.operationsCount<=min.operationsCount){
        min = value
      }
    }
    table[i] = min
  }
  return table[n]
}
