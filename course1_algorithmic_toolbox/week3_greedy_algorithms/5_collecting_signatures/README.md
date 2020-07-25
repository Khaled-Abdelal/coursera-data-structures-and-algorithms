### Problem Introduction
You are responsible for collecting signatures from all tenants of a certain build-
ing. For each tenant, you know a period of time when he or she is at home.
You would like to collect all signatures by visiting the building as few times as
possible.
The mathematical model for this problem is the following. You are given a set
of segments on a line and your goal is to mark as few points on a line as possible
so that each segment contains at least one marked point
### Problem Description
Given a set of n segments {[a 0 , b 0 ], [a 1 , b 1 ], . . . , [a n−1 , b n−1 ]} with integer coordinates on a line, find
the minimum number m of points such that each segment contains at least one point. That is, find a
set of integers X of the minimum size such that for any segment [a i , b i ] there is a point x ∈ X such
that a i ≤ x ≤ b i .
### Input Format.
The first line of the input contains the number n of segments. Each of the following n lines
contains two integers a i and b i (separated by a space) defining the coordinates of endpoints of the i-th
segment

### Constraints.
1 ≤ n ≤ 100; 0 ≤ a i ≤ b i ≤ 10 ^9 for all 0 ≤ i < n.

### Output Format. 
Output the minimum number m of points on the first line and the integer coordinates
of m points (separated by spaces) on the second line. You can output the points in any order. If there
are many such sets of points, you can output any set. (It is not difficult to see that there always exist
a set of points of the minimum size such that all the coordinates of the points are integers.)

### Samples

*Input*:
3
13
25
36

*Output*: 
1
3


### Run instructions.
*You need to have python3 installed.*

to run it with python open the terminal in the same directory as this readme and run:

`python3 covering_segments.py`

### Explaination

Make a greedy choice to pick the smallest point in a segment to check if its coverd if not include the farthest point in the segment.
Repeat with the next segments.
Sort the segments according to the end if each segment before the implementaion 

```python

def sortFunc(s):
  return s.end

def optimal_points(segments):
    points = []
    segments.sort(key=sortFunc)
    #write your code here
    for idx,s in enumerate(segments):
        if(idx == 0):
             points.append(s.end) 
        if(s.start <= points[-1]):
            continue
        points.append(s.end)
    return points
 
```
complexity is O(nlog(n)) cause of sorting.

