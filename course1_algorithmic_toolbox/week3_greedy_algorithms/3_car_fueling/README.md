### Problem Introduction
You are going to travel to another city that is located d miles away from your home city. Your car can travel
at most m miles on a full tank and you start with a full tank. Along your way, there are gas stations at
distances stop 1 , stop 2 , . . . , stop n from your home city. What is the minimum number of refills needed?

### Input Format.
The first line contains an integer d. The second line contains an integer m. The third line
specifies an integer n. Finally, the last line contains integers stop 1 , stop 2 , . . . , stop n .

### Constraints.
1 ≤ d ≤ 10 ^5 . 1 ≤ m ≤ 400. 1 ≤ n ≤ 300. 0 < stop 1 < stop 2 < · · · < stop n < d.

### Output Format. 
Assuming that the distance between the cities is d miles, a car can travel at most m miles
on a full tank, and there are gas stations at distances stop 1 , stop 2 , . . . , stop n along the way, output the
minimum number of refills needed. Assume that the car starts with a full tank. If it is not possible to
reach the destination, output −1.

### Samples

*Input*:
950
400
4
200 375 550 750

*Output*: 
`2`

*Input*:
1 10
500 30
*Output*: 
`166.6667`

### Run instructions.
*You need to have python3 installed.*

to run it with python open the terminal in the same directory as this readme and run:

`python3 car_fueling.py`

### Explaination

Make a greedy choice drive to the farthest station that the car can reach on single tank then refill.
The remaining problem is the same as before but with less stations.

```python

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
```
at first look complexity seems O(n^2) because of the two loops but actially both loops do at max n operation
(they both loop to the same condtion) so the complexity is O(n).

