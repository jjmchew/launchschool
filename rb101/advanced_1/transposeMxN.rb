=begin
13:41 pm - 

input
  - multidimensional array : 'array'

example
                        1 4 3       0,0 => 0,0    0,3 => 3,0
  1 2 3 4 5             2 3 7       0,1 => 1,0    1,3 => 3,1
  4 3 2 1 0     =>      3 2 8       0,2 => 1,0
  3 7 8 6 2             4 1 6
                        5 0 2

  populate elements in this order (from old matrix):
    - 0,0   1,0   2,0
    - 0,1   1,1   2,1
    - 0,2   1,2   2,2
    etc

  iterate: 
    - rows of new array:  from 0 to array[0].length - 1
    - cols of new array:  from 0 to array.length - 1

algorithm
  - row and column indexes get swapped from old to new array

=end

def transpose(array)
  new_array = []
  0.upto(array[0].length - 1) do |new_row_idx|
    new_row = []
    0.upto(array.length - 1) do |new_col_idx|
      new_row << array[new_col_idx][new_row_idx]
    end
    new_array << new_row
  end
  new_array
end

# test cases
p transpose([[1, 2, 3, 4]]) == [[1], [2], [3], [4]]
p transpose([[1], [2], [3], [4]]) == [[1, 2, 3, 4]]
p transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]) ==
  [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]
p transpose([[1]]) == [[1]]
