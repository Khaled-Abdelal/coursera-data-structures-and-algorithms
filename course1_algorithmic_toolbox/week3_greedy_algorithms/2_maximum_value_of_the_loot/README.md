### Problem Introduction
A thief finds much more loot than his bag can fit. Help him to find the most valuable combination
of items assuming that any fraction of a loot item can be put into his bag.

### Problem Description
The goal of this code problem is to implement an algorithm for the fractional knapsack problem.
### Input Format.
The first line of the input contains the number n of items and the capacity W of a knapsack.
The next n lines define the values and weights of the items. The i-th line contains integers v i and w i —the
value and the weight of i-th item, respectively.

### Constraints.
1 ≤ n ≤ 10 ^3 , 0 ≤ W ≤ 2 · 10 ^6 ; 0 ≤ v i ≤ 2 · 10 ^6 , 0 < w i ≤ 2 · 10 ^6 for all 1 ≤ i ≤ n. All the numbers are integers.

### Output Format. 
Output the maximal value of fractions of items that fit into the knapsack. The absolute
value of the difference between the answer of your program and the optimal value should be at most
10 −3 . To ensure this, output your answer with at least four digits after the decimal point (otherwise
your answer, while being computed correctly, can turn out to be wrong because of rounding issues).

### Samples

*Input*:
3 50 
60 20
100 50
120 30

*Output*: 
`180.0000`

*Input*:
1 10
500 30
*Output*: 
`166.6667`

### Run instructions.
*You need to have nodejs installed.*

to run it with nodejs open the terminal in the same directory as this readme and run:

`node fractional_knapsack.js`

### Explaination

Make a greedy choice use the max value over weight possible. if the capacity is't enough use a fraction of the the available weight.
The remaining problem is the same as before but with less count number and capacity.
Repeat the first step until there is no capacity left.
Sorting the value/weight is helpfull so not to search for the max every time.
```javascript

function max(count, capacity, values, weights) {
    // write your code here
    let resultSum = 0
    const valuesPerWeight = []
    const valuePerWeightToWeight = {}
    for(let i = 0; i< values.length ;i++){
        valuesPerWeight.push(values[i]/weights[i])
        valuePerWeightToWeight[values[i]/weights[i]] = weights[i]
    }
    valuesPerWeight.sort((a,b)=>b-a)
    
    for(const valuePerWeight of valuesPerWeight){
        if(count > 0 && capacity >= valuePerWeightToWeight[valuePerWeight]){
            count --
            capacity = capacity - valuePerWeightToWeight[valuePerWeight]
            resultSum = parseFloat((resultSum + (valuePerWeightToWeight[valuePerWeight]*valuePerWeight)))
        }else{
            resultSum = parseFloat((resultSum + (capacity*valuePerWeight)))
            capacity = 0
            count --
        }
    }
    return resultSum.toFixed(4)
}
```
time complexity is O(n log(n)) as the max loop is the sorting which is `n log(n)` the two remaining loops are O(n) each so the overall is O(n log(n)).

