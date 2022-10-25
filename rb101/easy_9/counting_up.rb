# input:
#   - integer (always > 0)

# output:
#   - array of all integers, in sequence from 1 to given number

# data structure
#   - array to store output

# algorithm
#   1.  initialize empty output array
#   2.  loop same number of times as given integer
#   3.  push the loop index to new array

def sequence(num)
  array = []
  num.times { |i| array << i+1 }
  array
end

# test cases / examples
p sequence(5) == [1, 2, 3, 4, 5]
p sequence(3) == [1, 2, 3]
p sequence(1) == [1]