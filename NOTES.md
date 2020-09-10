# Coursera Data Structures And Algorithms Specialization Notes.

* ## [Course1 Algorithmic Toolbox:](https://www.coursera.org/learn/algorithmic-toolbox)
  * ### week1
    week 1 is just an introduction to the course and how to submit assignments.
  * ### week2
    #### Big O notation
    When we compute the time complexity T(n) of an algorithm we rarely get an exact result, just an estimate. That’s fine, in computer science we are typically only interested in how fast T(n) is growing as a function of the input size n.

      For example, if an algorithm increments each number in a list of length n, we might say: “This algorithm runs in O(n) time and performs O(1) work for each element”.  

      ##### Constant time
      Let’s start with the simplest possible example: T(n) ∊ O(1).
      This means that the run time does't grow proportionaly to the input.

      ##### Linear time
      Run time is proportional with the input an can be presented as a linear equation.

      ##### Quadratic time
      Run time is proportional with the square ot the input an can be presented as a Quadratic equation.
      <br/>

      Here's a list of functions in asymptotic notation that we often encounter when analyzing algorithms, ordered by slowest to fastest growing:
      O(1) < O(log n) < O(n) < O(n * log n) < O(n<sup>2</sup>) < O(n<sup>3</sup>) < O(2<sup>n</sup>)
      <br/>

      O(1) – constant time, the time is independent of n, e.g. array look-up
      O(log n) – logarithmic time, usually the log is base 2, e.g. binary search
      O(n) – linear time, e.g. linear search
      O(n*log n) – e.g. efficient sorting algorithms
      O(n<sup>2</sup>) – quadratic time, e.g. selection sort
      O(n<sup>k</sup>) – polynomial (where k is some constant)
      O(2<sup>n</sup>) – exponential time, very slow!
      <br/>
      #### Ω and Θ notation
      **Big Omega** is used to give a lower bound for the growth of a function. It’s defined in the same way as Big O, but with the inequality sign turned around:

      Let T(n) and f(n) be two positive functions. We write T(n) ∊ Ω(f(n)), and say that T(n) is big omega of f(n), if there are positive constants m and n₀ such that T(n) ≥ m(f(n)) for all n ≥ n₀.

      **Big Theta** is used to indicate that a function is bounded both from above and below.
      T(n) ∊ Θ(f(n)) if T(n) is both O(f(n)) and Ω(f(n)).
      <BR/>
      #### Example

      T(n) = 3n<sup>3</sup> + 2n + 7 ∊ Θ(n<sup>3</sup>)

      If n ≥ 1, then T(n) = 3n<sup>3</sup> + 2n + 7 ≤ 3n<sup>3</sup> + 2n<sup>3</sup> + 7n<sup>3</sup> = 12n<sup>3</sup>. Hence T(n) ∊ O(n<sup>3</sup>).
      On the other hand, T(n) = 33n<sup>3</sup> + 2n + 7 > n<sup>3</sup> for all positive n. Therefore T(n) ∊ Ω(n<sup>3</sup>).
      And consequently T(n) ∊ Θ(n<sup>3</sup>).
  * ### week3
    #### Greedy Algorithms.
    The main ingredients in any greedy algorithm is greedy choice and reduction to subproblem.
      
    __1. safe move__
    for each problem the safe move is different,in every safe move, there's something like maximum, or minimum, or first, or leftmost, or rightmost. So, always safe move is greedy, but not all greedy moves are safe.
    you can assume elements are sorted if you can solve if you can just apply sorting first and then your greedy algorithm.
    **2. prove safety**
    Another key ingredient is a safe move and the move is called safe if it is consistent with some optimal solution. In other words, if there exists some optimal solution in which the first move is the same as your move, then your move is called a safe move and not all first moves are actually safe
    __3. solve subproblem__
    prove that after your safe move the remaining of the problem is a subproblem of the first problem.
    __4. estimate running time__
  * ### week4
    #### Divide and Conquer
    the divide and conquer algorithm consists of 
    __1. One__: breaking the problem into non-overlapping subproblems of the same type. 
    __2. Two__: recursively solving those subproblems. 
    And __3. Three__: combining the results. 

    ##### Calculate Recursive Run Time
    let's take binary search recursive solution as an example What is the run time
    T(n) = T(n/2) + c
    if we're cutting something in two over and over again. It's going to take log base two such iterations until we get down to 1. So the total here, is actually log base two of n + 1. The amount of work we're doing is c. So at each level, we're doing c work. So the total amount of work if we sum it, is just the sum from i=0 to log base 2 of n of c.
    [check guide here](https://www.coursera.org/learn/algorithmic-toolbox/lecture/vKN0b/binary-search-runtime)

    ###### Master Theorem
    The master theorem provides a solution to recurrence relations of the form
        T(n)= aT(n/b)+ O(n^d)
  for constants a ≥ 1 and b > 1 and d >= 0. Such recurrences occur frequently in the runtime analysis of many commonly encountered algorithms.
  T(n) = O(n<sup>d</sup>)    if d > log<sub>b</sub>a.
  T(n) = O(n<sup>d</sup>logn)    if d = log<sub>b</sub>a.
  T(n) = O(n<sup>log<sub>b</sub>a</sup>)    if d > log<sub>b</sub>a.
    ##### Sorting Algorithms
    ###### Selection Sort
      The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array.
    ###### Insertion Sort
      Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part.
    ###### Bubble Sort
     Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order.
    ###### Merge Sort
     Like QuickSort, Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The merge() function is used for merging two halves. The merge(arr, l, m, r) is key process that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.
     ###### QuickSort
     Like Merge Sort, QuickSort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot. There are many different versions of quickSort that pick pivot in different ways.

    __1__ Always pick first element as pivot.
    __2__ Always pick last element as pivot.
    __3__ Pick a random element as pivot.
    __4__ Pick median as pivot.
    The key process in quickSort is partition(). Target of partitions is, given an array and an element x of array as pivot, put x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. All this should be done in linear time.