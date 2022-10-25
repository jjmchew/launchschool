# input:
#   - array

# output:
#   - array with elements 'rotated': first element moved to last

# assumptions / constraints:
#   - cannot use Array#rotate(!) method
#   - original array should not be modified

# data structure:
#   - array

# algorithm:
#   1.  can array.shift first element
#   2.  push that element onto the end of the array

def rotate_array(array)
  new_array = array + [array[0]]
  new_array.shift

  new_array
end

# test cases / examples:
p rotate_array([7, 3, 5, 2, 9, 1]) == [3, 5, 2, 9, 1, 7]
p rotate_array(['a', 'b', 'c']) == ['b', 'c', 'a']
p rotate_array(['a']) == ['a']

x = [1, 2, 3, 4]
p rotate_array(x) == [2, 3, 4, 1]   # => true
p x == [1, 2, 3, 4]                 # => true
