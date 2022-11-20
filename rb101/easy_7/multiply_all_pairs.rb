=begin
input
  - 2 arrays of numbers
output
  - 1 array of numbers, sorted in increasing order
  - elements of this result array are obtained by multiplying each element in array1 by each element in array2
  - then sort the result array

algorithm
  - iterate across elements in array1
      - multiply by each element of array 2;  add to a new collection array
  - sort the resulting collection array

=end

def multiply_all_pairs(array1, array2)
  result_array = []
  array1.each do |num1|
    array2.each do |num2|
      result_array << num1 * num2
    end
  end
  result_array.sort
end

p multiply_all_pairs([2, 4], [4, 3, 1, 2]) == [2, 4, 4, 6, 8, 8, 12, 16]
