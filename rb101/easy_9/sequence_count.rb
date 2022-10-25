# input:
#   - 2 integers
#       - #1: a count
#       - #2: first num of sequence

# output:
#   - array:  [ #2(*1), #2*2, #2*3, ... <#1 num of elements> ]

# assumptions / constraints:
#   - count (#1) >= 0
#   - #2 can be any number (integer)
#   - if #1 == 0 return []
#   - if #2 == negative, then sequence should contain negatives

# data structure:
#   - array

# algorithm:
#   1.  setup empty array
#   2.  loop 'count' number of times (need to start from 1)
#   3.  push 'start' * count index to array

def sequence(count, start)
  array = []
  count.times { |i| array << (i + 1) * start }
  array
end

# test cases / examples:
p sequence(5, 1) == [1, 2, 3, 4, 5]
p sequence(4, -7) == [-7, -14, -21, -28]
p sequence(3, 0) == [0, 0, 0]
p sequence(0, 1000000) == []