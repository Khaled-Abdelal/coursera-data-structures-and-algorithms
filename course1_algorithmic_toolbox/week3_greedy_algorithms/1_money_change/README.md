### Problem Introduction
In this problem, you will design and implement an elementary greedy algorithm
used by cashiers all over the world millions of times per day.

### Problem Description
Task. The goal in this problem is to find the minimum number of coins needed to change the input value
(an integer) into coins with denominations 1, 5, and 10.
### Input Format.
The input consists of a single integer `m`.
### Constraints.
 `1 ≤ m ≤ 10 ^3`.
### Output Format. 
Output the minimum number of coins with denominations 1, 5, 10 that changes m .

### Samples

*Input*:
`2`
*Output*: 
`2`
2 = 1 + 1.

*Input*:
`28`
*Output*: 
`6`
28 = 10 + 10 + 5 + 1 + 1 + 1.
### Run instructions.
*You need to have nodejs installed.*

to run it with nodejs open the terminal in the same directory as this readme and run:

`node change.js`

### Explaination

make a greedy choice use the max denomination possible (10) if 10 does't go in the available money use a less denomination (5) and if 5 does't go use (1).
the remaining problem is the same as before but with less money.
repeat the first step until there is no money left.

```javascript
function getChange(m){
    const numOfTens = parseInt(m / 10)
    const numOfFives = parseInt((m % 10) / 5)
    const numOfOnes = parseInt(((m % 10) % 5) / 1)
    return numOfTens + numOfFives + numOfOnes
}
```
time complexity is O(1) as the number of operation is same for all input m 

