const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', line => {
    const num = parseInt(line.toString().split(' ')[0], 10);

    rl.once('line', line => {
        const nums = line.toString().split(' ').map(Number);

        threeWayQuickSort(nums, 0, num-1)        
        for (let i = 0; i < nums.length; i++) {
            process.stdout.write(nums[i] + " ");
        }

        process.stdout.write('\n');
        process.exit();
    })
});

function threeWayQuickSort(arr, left, right){
    if(left >= right) return arr.slice(left)
    const [pivotStart, pivotEnd] = threeWaypartion(arr, left, right)
    threeWayQuickSort(arr, pivotEnd+1, right)
    threeWayQuickSort(arr, left, pivotStart-1)
    return arr
}
function threeWaypartion(arr, left, right){
    let pivotStart = left
    let pivotEnd = left
    for(let i=left+1; i<=right; i++){
        if(arr[i] === arr[pivotStart]){
            pivotEnd++
            swap(arr, pivotEnd, i)
        }    
        if(arr[i] < arr[pivotStart]){
            swap(arr, pivotEnd+1, i)
            pivotStart++
            pivotEnd++
            swap(arr, pivotEnd, pivotStart-1)
        }
    }
    return [pivotStart, pivotEnd]
}

/**
 * two way quick sort
 */
function twoWayQuickSort(arr, left, right){
    if(left >= right) return arr.slice(left)
    const index = partion(arr, left, right)
    quickSort(arr, index+1, right)
    quickSort(arr, left, index-1)
    return arr
}
function partion(arr, left, right){
    let pivot = left
    for(let i=left; i<=right; i++){
            if(arr[i] < arr[pivot]){
                swap(arr, pivot+1, i)
                pivot++
                swap(arr, pivot, pivot-1)
            }
    }
    return pivot
}
function swap(arr,element1,element2){
    const temp = arr[element1]
    arr[element1] = arr[element2]
    arr[element2] = temp
}
module.exports = twoWayQuickSort

