# Uses python3
import sys
import math

def binary_search(arr, key):
    min, max = 0, (len(arr) - 1)
    while(min <= max):
        mid = math.floor((min+max)/2)
        if (arr[mid] == key): return mid
        if(arr[mid] > key): max = mid - 1
        if(arr[mid] < key): min = mid + 1
    return -1

def linear_search(a, x):
    for i in range(len(a)):
        if a[i] == x:
            return i
    return -1

if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))
    n = data[0]
    m = data[n + 1]
    a = data[1 : n + 1]
    for x in data[n + 2:]:
        print(binary_search(a, x), end = ' ')
