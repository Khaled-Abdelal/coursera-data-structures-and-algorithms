
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', line => {
    const nums = line.toString().split(' ').map(Number);
    
    rl.once('line', line => {
        const arr = line.toString().split(' ').map(Number);
        console.log(partion3(arr, 3))        
        process.stdout.write('\n');
        process.exit();
    })
});

function partion3(arr, partions) {
    let sum = 0
    for(const elem of arr){
        sum+= elem
    }
    if(sum%3 != 0) return 0
    const table =[[]]
    for(let i=0;i<=arr.length;i++){
        table[0][i] = 1
    }
    for(let i=1;i<sum/3+1;i++){
        table[i] = []
        table[i][0] = 0
    }
    for(let i=1;i<sum/3+1;i++){
        for(let j=1;j<=arr.length;j++){
            table[i][j] = table[i][j - 1]
            if(i >= arr[j - 1]) {
                table[i][j] = (table[i][j] || table[i - arr[j - 1]][j - 1])
            }
        }
    }
    return table[sum/3][arr.length]
}

module.exports = partion3;
