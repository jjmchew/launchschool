=begin

algorithm
  - initialize 2 empty arrays (array1, array2)
  - determine how many elements are in the given array (length)
    - the first array will contain length / 2 (rounded up to next whole number) (length1)
  - put 'length1' number of elements into array1
  - put the remaining number of elements into array2 (or none, if there are none)

=end

def halvsies(array)
  length = array.length
  # return [array1, array2] if length == 0
  length1 = (length / 2.0).ceil
  array1 = array[0, length1]
  array2 = array[length1, length-length1]
  return [array1, array2]
end

# test cases
p halvsies([1, 2, 3, 4]) == [[1, 2], [3, 4]]
p halvsies([1, 5, 2, 4, 3]) == [[1, 5, 2], [4, 3]]
p halvsies([5]) == [[5], []]
p halvsies([]) == [[], []]
