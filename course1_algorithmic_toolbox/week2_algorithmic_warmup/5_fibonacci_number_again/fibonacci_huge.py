# Uses python3
import sys

def get_fibonacci_huge_naive(n, m):
    if n <= 1:
        return n

    previous = 0
    current  = 1

    for _ in range(n - 1):
        previous, current = current, previous + current

    return current % m


def get_fibonacci_huge_fast(n, m):
    sequence = generate_sequence(m)
    resultInSequence = n % len(sequence)
    return sequence[resultInSequence]


def generate_sequence(m):
    sequenceArr = [0,1,1]
    repeated = False
    i = 3
    while(not repeated):
        sequenceArr.append(calc_fib_fast(i) % m)
        i = i + 1
        if(sequenceArr[-1] == 1):
            if(sequenceArr[-2] == 1):
                if(sequenceArr[-3] == 0):
                    repeated = True
                    
    return sequenceArr[:-3]


def calc_fib_fast(n):
    if (n <= 1):
        return n
    result = [0,1]
    for i in range(2,n+1):
        result.append(result[i-1] + result[i-2])
    
    return result[-1]


if __name__ == '__main__':
    n, m = map(int, sys.stdin.readline().split())
    print(get_fibonacci_huge_fast(n, m))
