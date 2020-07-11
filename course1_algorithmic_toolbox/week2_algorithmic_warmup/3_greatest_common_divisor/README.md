### Problem Introduction
The greatest common divisor GCD(a, b) of two non-negative integers a and b
(which are not both equal to 0) is the greatest integer d that divides both a and b.
Your goal in this problem is to implement the Euclidean algorithm for computing
the greatest common divisor.

### Problem Description
Given two integers a and b, find their greatest common divisor.
### Input Format.
The two integers a, b are given in the same line separated by space.
### Constraints.
 `1 ≤ a, b ≤ 2 · 10 9 .`.
### Output Format. 
Output GCD(a, b)

### Samples

*Input*:
`18 35`
*Output*: 
`1`

### Run instructions.
*You need to have nodejs or python3 installed.*

to run it with nodejs open the terminal in the same directory as this readme and run:

`node gcd.js`

to run it with python3 open the terminal in the same directory as this readme and run:

`python3 gcd.py`



### Explaination

#### naive approach:
Naive approach would be to loop from 2 to the min of the two inputs and try all numbers to check if the remainder of the divition is 0.

```python
def gcd_naive(a, b):
    current_gcd = 1
    for d in range(2, min(a, b) + 1):
        if a % d == 0 and b % d == 0:
            if d > current_gcd:
                current_gcd = d

    return current_gcd
```
time complexity can be calculated as O(n).

#### fast approach:
Euclidean algorithm for computing the gcd states that GCD(a, b) is equal to GCD(b, a%b). so the running time reduce to O(log(n))

```python
def gcd_fast(a, b):
    if a % b == 0:
        return b
    return gcd_fast(b, a%b)
```