# Uses python3
from sys import stdin

def fibonacci_sum_squares_naive(n):
    if n <= 1:
        return n

    previous = 0
    current  = 1
    sum      = 1

    for _ in range(n - 1):
        previous, current = current, previous + current
        sum += current * current

    return sum % 10


def calc_fib_last_digit_fast(n):
    lastDigitList = [0,1]
    if (n <= 1):
        return n

    previous = 0
    current  = 1
    sum      = 1
    # find the first 60 fib numbers (the last num repeat every 60 fib number)
    for i in range(2,60):
        previous, current = current, previous + current
        # square the number
        sum += current * current
        lastDigitList.append(sum%10)
    # return the sum of square of numbers    
    return (lastDigitList[n % 60])

if __name__ == '__main__':
    n = int(stdin.readline())
    print(calc_fib_last_digit_fast(n))
