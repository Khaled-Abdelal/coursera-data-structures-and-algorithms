### Problem Introduction
The least common multiple of two positive integers a and b is the least positive
integer m that is divisible by both a and b.

### Problem Description
Given two integers a and b, find their least common multiple.
### Input Format.
The two integers a and b are given in the same line separated by space.
### Constraints.
 `1 ≤ a, b ≤ 10 7`.
### Output Format. 
Output GCD(a, b)

### Samples

*Input*:
`6 8`
*Output*: 
`24`

### Run instructions.
*You need to have nodejs or python3 installed.*

to run it with nodejs open the terminal in the same directory as this readme and run:

`node lcm.js`

to run it with python3 open the terminal in the same directory as this readme and run:

`python3 lcm.py`


### Explaination

#### fast approach:
LCM is equal to `a*b / gcd(a,b)`
Euclidean algorithm for computing the gcd states that GCD(a, b) is equal to GCD(b, a%b). so the running time reduce to O(log(n))

```python
def lcm_fast(a, b):
    return int((a*b)/gcd_fast(a,b))

def gcd_fast(a, b):
    if a % b == 0:
        return b
    return gcd_fast(b, a%b)

```