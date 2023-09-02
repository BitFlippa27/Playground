# Asympthodic analysis
#--------------------#

array = [1,2,3,4,5,6,7]

# O(1) - remains constant as input increases
def a(array):
    return 1 + array[0]  

# O(N) - as input increases time complexity grows linear, we have to traverse all elements
def b(array):
    return sum(array)

# O(n^2) - at each number we iterate again, So n traversal * n traversal
def c(array):
    return pair(array)

