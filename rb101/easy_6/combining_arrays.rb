=begin
input
  - 2 arrays

output
  - 1 array : contains unique values of both arrays

algorithm
  - concatenate the 2 arrays
  - then run the 'uniq' method to return a new array of only uniq elements
=end

def merge(array1, array2)
  new_array = (array1 + array2).uniq
end

# test cases
p merge([1, 3, 5], [3, 6, 9]) == [1, 3, 5, 6, 9]