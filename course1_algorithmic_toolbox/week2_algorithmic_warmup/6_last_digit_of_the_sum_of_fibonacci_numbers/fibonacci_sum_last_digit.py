# Uses python3
import sys

def fibonacci_sum_naive(n):
    if n <= 1:
        return n

    previous = 0
    current  = 1
    sum      = 1

    for _ in range(n - 1):
        previous, current = current, previous + current
        sum += current

    return sum % 10


def fibonacci_sum_fast(n):
    return calc_fib_last_digit_fast(n)
     

def calc_fib_last_digit_fast(n):
    lastDigitList = [0,1]
    if (n <= 1):
        return n

    previous = 0
    current  = 1
    sum      = 1
    for i in range(2,60):
        previous, current = current, previous + current
        sum += current
        lastDigitList.append(sum%10)
    return (lastDigitList[n % 60])

n = int(input())
print(fibonacci_sum_fast(n))
