#Uses python3

import sys

def lcs2(a, b, dic):
    if (f'{a}:{b}' in dic ):
        return dic[f'{a}:{b}']
    if(f'{b}:{a}' in dic):
        return dic[f'{b}:{a}']
    if(len(a) >= 1 and len(b) >= 1):
        if(a[0] == b[0]):
            ans = 1+lcs2(a[1:],b[1:],dic)
            dic[f'{a}:{b}'] = ans
            return ans
        else:
            ans = max(lcs2(a[:],b[1:], dic), lcs2(a[1:],b[:], dic))
            dic[f'{a}:{b}'] = ans
            return ans 
    else:
        if(len(a)<1 and len(b) >= 1):
            ans =  lcs2(a,b[1:], dic)
            dic[f'{a}:{b}'] = ans
            return ans
        elif(len(b)<1 and len(a) >= 1):
            ans =  lcs2(a[1:],b, dic)
            dic[f'{a}:{b}'] = ans
            return ans
        else:
            return 0    


def lcs2_helper(a, b):
    dic = {}
    return lcs2(a,b,dic)
     

if __name__ == '__main__':
    input = sys.stdin.read()
    data = list(map(int, input.split()))

    n = data[0]
    data = data[1:]
    a = data[:n]

    data = data[n:]
    m = data[0]
    data = data[1:]
    b = data[:m]

    print(lcs2_helper(a, b))
