### Problem Introduction
In this problem, your goal is to compute F n modulo m, where n may be really huge: up to 10 14 . For such
values of n, an algorithm looping for n iterations will not fit into one second for sure. Therefore we need to
avoid such a loop.
look up Pisano period. to solve this.

### Problem Description
Given two integers n and m, output F n mod m (that is, the remainder of F n when divided by m).
### Input Format.
The input consists of two integers n and m given on the same line (separated by a space).
### Constraints.
 `1 ≤ n ≤ 10 14 , 2 ≤ m ≤ 10 3 .`
### Output Format. 
Output F n mod m.

### Samples

*Input*:
`2816213588 239`
*Output*: 
`151`

### Run instructions.
*You need to have python3 installed.*


to run it with python3 open the terminal in the same directory as this readme and run:

`python3 fibonacci_huge.py`