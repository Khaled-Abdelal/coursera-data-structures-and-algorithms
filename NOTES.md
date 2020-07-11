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
