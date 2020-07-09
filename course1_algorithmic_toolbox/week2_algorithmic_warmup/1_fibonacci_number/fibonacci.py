# Uses python3
def calc_fib(n):
    if (n <= 1):
        return n

    return calc_fib(n - 1) + calc_fib(n - 2)

def calc_fib_fast(n):
    if (n <= 1):
        return n
    result = [0,1]
    for i in range(2,n+1):
        result.append(result[i-1] + result[i-2])
    
    return result[-1]
        

n = int(input())
print(calc_fib_fast(n))
