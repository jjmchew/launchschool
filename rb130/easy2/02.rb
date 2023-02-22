=begin
input
  - array1
  - array2
output
  - combined array (with same number of elements)
rules
  - each element of output array will be an array with that 'number' element from the first, then second given array
    - e.g., array1 = [1, 2] and array2 = [4, 5];  output array = [ [1,4], [2,5] ]
  - assume array1 and array2 have the same number of elements
algorithm
  - initialize an empty output array
  - iterate across each element of array1, with an index
    - use the index to combine the element of array1 with the corresponding element in array2
    - combine these elements into an array and add that sub-array to the output array
  - return the output array
=end

def zip(array1, array2)
  output = []
  array1.each_with_index { |element, idx| output << [ element, array2[idx]] }
  output
end


p zip([1, 2, 3], [4, 5, 6]) == [[1, 4], [2, 5], [3, 6]]