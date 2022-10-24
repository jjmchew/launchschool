# Problem
# input:  array of integers (never empty, always positive)
# output:  average of numbers in the array (as integer)
# assumptions / constraints:
#   - ignore remainders when dividing to find average
#   - no empty arrays
#   - numbers always positive integers

# Data structure
#   - use given array

# Algorithm
#   1.  sum all integers in array
#   2.  count # of integers
#   3.  use divmod to divide sum by count of integers, return quotient, discard / ignore modulo

def average(array)
  average = array.reduce(:+).divmod(array.count)[0]
  average = array.reduce(:+) / array.count
end

# Test Cases
puts average([1, 6]) #== 3 # integer division: (1 + 6) / 2 -> 3
puts average([1, 5, 87, 45, 8, 8]) #== 25
puts average([9, 47, 23, 95, 16, 52]) #== 40

