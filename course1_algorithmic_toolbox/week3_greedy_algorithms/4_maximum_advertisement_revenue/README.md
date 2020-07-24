### Problem Introduction
You have n ads to place on a popular Internet page. For each ad, you know how
much is the advertiser willing to pay for one click on this ad. You have set up n
slots on your page and estimated the expected number of clicks per day for each
slot. Now, your goal is to distribute the ads among the slots to maximize the
total revenue.
### Problem Description
Given two sequences a 1 , a 2 , . . . , a n (a i is the profit per click of the i-th ad) and b 1 , b 2 , . . . , b n (b i is
the average number of clicks per day of the i-th slot), we need to partition them into n pairs (a i , b j )
such that the sum of their products is maximized
### Input Format.
The first line contains an integer n, the second one contains a sequence of integers
a 1 , a 2 , . . . , a n , the third one contains a sequence of integers b 1 , b 2 , . . . , b n .
### Constraints.
1 ≤ n ≤ 10 ^3 ; −10 ^5 ≤ a i , b i ≤ 10 ^5 for all 1 ≤ i ≤ n

### Output Format. 
Output the maximum value of
n
∑︀
a i c i , where c 1 , c 2 , . . . , c n is a permutation of
i=1
b 1 , b 2 , . . . , b n .

### Samples

*Input*:
3
1 3 -5
-2 4 1

*Output*: 
`13`
23 = 3 · 4 + 1 · 1 + (−5) · (−2).
*Input*:
1
23
39
*Output*: 
`897`
897 = 23 · 39.

### Run instructions.
*You need to have nodejs installed.*

to run it with nodejs open the terminal in the same directory as this readme and run:

`node dot_product.js`

### Explaination

Make a greedy choice use multiple max profitPerClick with max numberOfClicks.
The remaining problem is the same as input data.
Repeat the first step until there is no profitPerClick and numberOfClicks left.
Sorting the values to max will reduce the running time because you don't have to search for the max every time.
```javascript
function maxProfit(numOfClicks,profitPerClick) {
    // write your code here
    numOfClicks.sort((a,b)=>b-a)
    profitPerClick.sort((a,b)=>b-a)
    let sum = 0
    for(let i=0; i<numOfClicks.length ;i++){
        sum = sum + numOfClicks[i]*profitPerClick[i]
    }
    return sum
   
}

```
time complexity is O(n log(n)) as the max loop is the sorting which is `n log(n)` the sum loop is O(n) each so the overall is O(n log(n)).

