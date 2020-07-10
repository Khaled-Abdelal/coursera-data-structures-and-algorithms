# Uses python3
import sys

def get_fibonacci_last_digit_naive(n):
    if n <= 1:
        return n

    previous = 0
    current  = 1

    for _ in range(n - 1):
        previous, current = current, previous + current

    return current % 10


def calc_fib_last_digit_fast(n):
    n = n % 60
    if (n <= 1):
        return n

    result = [0,1]
    for i in range(2,n+1):   
        result.append(result[i-1] + result[i-2])

    return (result[-1] % 10)

n = int(input())
print(calc_fib_last_digit_fast(n))
