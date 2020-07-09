# Uses python3
import sys

def lcm_naive(a, b):
    for l in range(1, a*b + 1):
        if l % a == 0 and l % b == 0:
            return l

    return a*b

def lcm_fast(a, b):
    return int((a*b)/gcd_fast(a,b))

def gcd_fast(a, b):
    if a % b == 0:
        return b
    return gcd_fast(b, a%b)


if __name__ == '__main__':
    a, b = map(int, sys.stdin.readline().split())
    print(lcm_fast(a, b))

