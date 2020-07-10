# Uses python3
import sys

def fibonacci_partial_sum_naive(from_, to):
    sum = 0

    current = 0
    next  = 1

    for i in range(to + 1):
        if i >= from_:
            sum += current

        current, next = next, current + next

    return sum % 10


def fibonacci_partial_sum_naive(from_, to):
    result = calc_fib_last_digit_sum(from_,to)
    if(result < 0): result =  result + 10
    return result

def calc_fib_last_digit_sum(m,n):
    lastDigitList = [0,1]
    previous = 0
    current  = 1
    sum      = 1
    # find the first 60 fib (they repeat every 60)
    for i in range(2,60):
        previous, current = current, previous + current
        sum += current
        lastDigitList.append(sum%10)

    #return the fib of n - fib m-1    
    return (lastDigitList[n % 60] - lastDigitList[(m-1) % 60])


if __name__ == '__main__':
    from_, to = map(int, sys.stdin.readline().split())
    print(fibonacci_partial_sum_naive(from_, to))