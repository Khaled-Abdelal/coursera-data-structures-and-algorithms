### Problem Introduction
Recall the definition of Fibonacci sequence: `F 0 = 0, F 1 = 1, and F i = F i−1 + F i−2` for
`i ≥ 2`. Your goal in this problem is to implement an efficient algorithm for computing
Fibonacci numbers.

### Problem Description
Task. Given an integer n, find the nth Fibonacci number `F n `.
### Input Format.
The input consists of a single integer `n`.
### Constraints.
 `0 ≤ n ≤ 45`.
### Output Format. 
Output `F(n)` .

### Samples

*Input*:
`10`
*Output*: 
`16`

### Run instructions.
*You need to have nodejs or python3 installed.*

to run it with nodejs open the terminal in the same directory as this readme and run:

`node fibonacci.js`

to run it with python3 open the terminal in the same directory as this readme and run:

`python3 fibonacci.py`

### Explaination

#### Recursive approach:
The recursive approach seems to be much simpler and smaller, but there is a caveat, as it is calculating the Fibonacci of a number multiple times.

```python
fib(n):
    if n <= 1
        return 1
    return fib(n - 1) + fib(n - 2)
```
time complexity can be calculated as O(2<sup>n</sup>) check [here](https://medium.com/@syedtousifahmed/fibonacci-iterative-vs-recursive-5182d7783055#:~:text=Space%20Complexity%3A&text=Hence%20it's%20space%20complexity%20is,the%20implicit%20function%20call%20stack.) 

#### iterative approach:
In the iterative approach we are calculating all fib numbers from 0 to n but they are only calculated once so time complexity is O(n). 