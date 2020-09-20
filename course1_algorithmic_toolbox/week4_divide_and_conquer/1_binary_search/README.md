### Problem Introduction
In this problem, you will implement the binary search algorithm that allows searching
very efficiently (even huge) lists, provided that the list is sorted.
### Problem Description
The goal in this code problem is to implement the binary search algorithm.
### Input Format.
The first line of the input contains an integer n and a sequence a 0 < a 1 < . . . < a n−1
of n pairwise distinct positive integers in increasing order. The next line contains an integer k and k
positive integers b 0 , b 1 , . . . , b k−1 .

### Constraints.
1 ≤ k ≤ 10 5 ; 1 ≤ n ≤ 3 · 10 4 ; 1 ≤ a i ≤ 10 9 for all 0 ≤ i < n; 1 ≤ b j ≤ 10 9 for all 0 ≤ j < k;
### Output Format. 
For all i from 0 to k − 1, output an index 0 ≤ j ≤ n − 1 such that a j = b i or −1 if there
is no such index.

### Samples

*Input*:
5 1 5 8 12 13
5 8 1 23 1 11

*Output*: 
2 0 -1 0 -1


### Run instructions.
*You need to have python3 installed.*

to run it with python open the terminal in the same directory as this readme and run:

`python3 binary_seatch.py`

### Explaination

the array is sorted look at half point if is bigger than the input then look
at the lower half if it is smaller then look at the bigger half and repeat

complexity is O(log(n)).

