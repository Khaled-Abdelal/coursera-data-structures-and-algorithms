# python3
import sys


def compute_min_refills(distance, tank, stops):
    # write your code here
    if distance <= tank: return 0
    stops = [0] + stops
    stops.append(distance)
    numRefill = 0
    postion = 0
    disCoverd = 0
    while disCoverd <= distance:
        lastRefill = postion

        while disCoverd <= distance and len(stops) > postion+1 and (stops[postion+1] - stops[lastRefill])<= tank:
            disCoverd = stops[postion + 1]
            postion += 1
        if(not (len(stops) > postion+1) and disCoverd <= distance):
            return numRefill

        if postion == lastRefill:
            return -1

        if disCoverd <= distance:
            numRefill+=1
    return numRefill            

if __name__ == '__main__':
    d, m, _, *stops = map(int, sys.stdin.read().split())
    print(compute_min_refills(d, m, stops))
