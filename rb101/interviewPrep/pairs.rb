=begin
9:48 am - 9:59 am : 11 minutes


You are given array of integers, your task will be to count all pairs in that array and return their count.

Notes:
    Array can be empty or contain only one value; in this case return 0
    If there are more pairs of a certain number, count each pair only once. E.g.: for [0, 0, 0, 0] the return value is 2 (= 2 pairs of 0s)
    Random tests: maximum array length is 1000, range of values in array is between 0 and 1000

Examples:
[1, 2, 5, 6, 5, 2]  -->  2
...because there are 2 pairs: 2 and 5

[1, 2, 2, 20, 6, 20, 2, 6, 2]  -->  4
...because there are 4 pairs: 2, 20, 6 and 2 (again) 

input
  - array of integers
output
  - integer : number of pairs (of integers from given array)
rules
  - empty arrays or arrays with only 1 element return 0 (no pairs)
  - numbers cannot be used more than once (i.e., can only be used for 1 pair)
  - integers in array are between 0 and 1000 (inclusive?);  maximum array length is 1000

algorithm
  - create a duplicate of given array, find unique elements (`uniq_array`)
  - initialize a pair counter variable (`counter`) to integer object with initial value 0
  - iterate across elements (numbers) of `uniq_array`
      - count the number of times the integer occurs in the given array
      - if the count divided by 2 is greater than 0, then increment `counter` by that amount
  - return counter

notes
  - may want to create a duplicate of given array - delete elements once counted to prevent double-counting
                                                  - could also do a count of elements, divide by 2 (prevents double-counting)
  - use `.count(num)`
=end

def pairs(array)
  # return 0 if array.length <= 1 
  
  counter = 0
  uniq_array = array.uniq
  
  uniq_array.each do |num|
    counter += array.count(num) / 2 if array.count(num) >= 2
  end

  counter
end


p pairs([1, 2, 5, 6, 5, 2]) == 2
p pairs([1, 2, 2, 20, 6, 20, 2, 6, 2]) == 4
p pairs([0, 0, 0, 0, 0, 0, 0]) == 3 
p pairs([1000, 1000]) == 1
p pairs([]) == 0
p pairs([54]) == 0