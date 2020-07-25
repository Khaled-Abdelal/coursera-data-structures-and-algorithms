# Uses python3
import sys
from collections import namedtuple

Segment = namedtuple('Segment', 'start end')
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

if __name__ == '__main__':
    input = sys.stdin.read()
    n, *data = map(int, input.split())
    segments = list(map(lambda x: Segment(x[0], x[1]), zip(data[::2], data[1::2])))
    points = optimal_points(segments)
    print(len(points))
    print(*points)
