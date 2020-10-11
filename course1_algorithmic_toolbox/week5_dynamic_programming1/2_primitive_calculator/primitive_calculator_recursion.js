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
    res = calculateMinOperations(a)
    console.log(res)
    // console.log(res.operationsCount)
    // let toBeLoged = ''
    // for(let step of res.operationsList){
    //   toBeLoged+=`${step} `
    // }
    // console.log(toBeLoged)
    process.exit();
  }
}
function calculateMinOperations(goal){
  const min=calculateMinOperationsHelper(1, goal)
  return min.min
}
function calculateMinOperationsHelper(current, goal){
  //console.log(current, goal)
  if(current === goal){
      return {
        goal:[current],
        min:0
      }
    }
    if(current > goal){
      return {
        min:Infinity
      }
    }
    let min = 0
    let res1 = calculateMinOperationsHelper(current+1, goal)
    let res2 = calculateMinOperationsHelper(current*2, goal)
    let res3 = calculateMinOperationsHelper(current*3, goal)
    let minRes = Math.min(res2.min,res1.min,res3.min)
    if(typeof minRes == "number"){
      min = minRes +1 
    }
    console.log(res2.min,res1.min,res3.min)
    console.log("min",min, " minRes",minRes)
    return {
      min:min
    }
}

