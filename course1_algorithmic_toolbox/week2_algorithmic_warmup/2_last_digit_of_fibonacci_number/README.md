### Problem Introduction
Your goal in this problem is to find the last digit of n-th Fibonacci number. Recall that Fibonacci numbers
grow exponentially fast. For example,
<center> F 200 = 280 571 172 992 510 140 037 611 932 413 038 677 189 525 .</center>

### Problem Description
Given an integer n, find the last digit of the nth Fibonacci number F n (that is, `F n mod 10`).
### Input Format.
The input consists of a single integer `n`.
### Constraints.
 `0 ≤ n ≤ 10 7 .`.
### Output Format. 
Output the last digit of `F(n)` .

### Samples

*Input*:
`331`
*Output*: 
`9`

### Run instructions.
*You need to have nodejs or python3 installed.*

to run it with nodejs open the terminal in the same directory as this readme and run:

`node fibonacci_last_digit.js`

to run it with python3 open the terminal in the same directory as this readme and run:

`python3 fibonacci_last_digit.py`


### Explaination

#### naive approach:
It seems we can calculate the fibonacci number and then just do %10 to get only the last digit.
while you can do that for big enough n this won't be efficient.

```python
def get_fibonacci_last_digit_naive(n):
    if n <= 1:
        return n

    previous = 0
    current  = 1

    for _ in range(n - 1):
        previous, current = current, previous + current

    return current % 10
```
time complexity can be calculated as O(n) check the previous problem for explaination 

#### fast approach:
Fun fact is that last digit of fibonacci number repeat every 60 iteration this is known as Pisano period.
so by taking the mod(60 of the input) this problem reduces to O(1) as the max number of iterations no matter the input is 60.