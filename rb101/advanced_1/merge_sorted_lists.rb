=begin
14:36 - 14:48 : 12 minutes

input
  - 2 arrays : both sorted smallest to largest
output
  - 1 array : contains elements from both arrays, sorted from smallest to largest
assumptions / constraints
  - cannot use sort
  - must build new array element by element
  - arrays can have different number of elements

algorithm
  - initialize 2 pointers - each pointer tracks the index position of an input array
  - initialize a new 'collection' array 
  - compare the array elements at each pointer position
      - take the smaller element and add to collection array;  increment that pointer by 1
      - if the pointers are equal to the size of the array they refer to, then add the remaining elements from the other array to the collection array

=end

def merge(arr1, arr2)
  new_array = []
  idx1 = 0
  idx2 = 0

  if !arr1.empty? && !arr2.empty?
    loop do
      if arr1[idx1] < arr2[idx2]
        new_array << arr1[idx1]
        idx1 += 1
      else
        new_array << arr2[idx2]
        idx2 += 1
      end
      break if idx1 == arr1.length || idx2 == arr2.length
    end
  end

  new_array += arr1[idx1..-1] if idx1 != arr1.length
  new_array += arr2[idx2..-1] if idx2 != arr2.length

  new_array
end

# test cases
p merge([1, 5, 9], [2, 6, 8]) == [1, 2, 5, 6, 8, 9]
p merge([1, 1, 3], [2, 2]) == [1, 1, 2, 2, 3]
p merge([], [1, 4, 5]) == [1, 4, 5]
p merge([1, 4, 5], []) == [1, 4, 5]