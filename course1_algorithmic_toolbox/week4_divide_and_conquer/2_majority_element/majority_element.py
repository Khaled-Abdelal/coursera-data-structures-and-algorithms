# Uses python3
import sys
import math 

def get_majority_element(a, left, right):
    if left == right:
        return -1
    if left + 1 == right:
        return a[left]
    # sort the array
    arr = a
    arr.sort()
    count = 0
    max = math.floor(right / 2)
    for i in range(0, len(arr)):
        if(count >= max): return 1
        if(arr[i] == arr[i-1]):
            count += 1
        else:
            count = 0
    if(count >= max):
        return 1
    else:
        return -1     
                 
if __name__ == '__main__':
    input = sys.stdin.read()
    n, *a = list(map(int, input.split()))
    if get_majority_element(a, 0, n) != -1:
        print(1)
    else:
        print(0)
