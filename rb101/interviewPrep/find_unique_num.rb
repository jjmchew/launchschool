=begin
13:46 - 13:48  :  2 minutes

There is an array with some numbers. All numbers are equal except for one. Try to find it!

find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55

It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

input
  - array
output
  - number (may not be an integer)
rules
  - array has at least 3 elements
  - all numbers in array are the same except for 1

algorithm
  - iterate across an array of unique values based on given array
      - count the number of times that element appears
      - if the count is 1 then return that number

notes
  - count is fast - should be able to use it
=end

def find_uniq(arr)
  arr.uniq.each do |num|
    return num if arr.count(num) == 1
  end
end

p find_uniq([1,1,1,1,0]) == 0
p find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
p find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55