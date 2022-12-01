=begin
13:39 - 13:43  :  4 minutes

Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

input
  - array of integers : +ve and -ve
output
  - integer : an element from given array that occurs an odd number of times
rules
  - always only 1 integer appearing an odd number of times

algorithm
  - create an array which contains unique elements of given array (`unique_array`)
  - iterate across `unique_array`
      - count the number of times that element appears in the given array
      - if the count is an odd number, return that element

=end

def find_it(array)
  array.uniq.each do |num|
    return num if array.count(num).odd?
  end
  "error"
end

p find_it([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) == 5
p find_it([1,1,2,-2,5,2,4,4,-1,-2,5]) == -1
p find_it([20,1,1,2,2,3,3,5,5,4,20,4,5]) == 5
p find_it([10]) == 10
p find_it([1,1,1,1,1,1,10,1,1,1,1]) == 10