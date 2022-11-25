=begin

Example
                        populate in this order (old indices):
  1 5 8       3 4 1     2,0   1,0   0,0
  4 7 2   =>  9 7 5     2,1   1,1   0,1
  3 9 6       6 2 8     2,2   1,2   0,2

                        populate in this order (old indices):
  3 4 1         9 3     1,0   0,0
  9 7 5   =>    7 4     1,1   0,1
                5 1     1,2   0,2

algorithm

  - rows of new array, come from cols of old array;  i.e., new_row = old_col;  iterate rows: (array[0].length-1) down to 0
  - cols of new array, come from rows of old array;  i.e., new_col = old_row;  iterate cols:  0 up to (array.length-1)

=end

def rotate90(array)
  new_array = []
  0.upto(array[0].length - 1) do |old_col_idx|
    row = []
    (array.length - 1).downto(0) do |old_row_idx|
      row << array[old_row_idx][old_col_idx]
    end
    new_array << row
  end
  new_array
end

# test cases
matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
]

matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8]
]

new_matrix1 = rotate90(matrix1)
new_matrix2 = rotate90(matrix2)
new_matrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))))

p new_matrix1 == [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
p new_matrix2 == [[5, 3], [1, 7], [0, 4], [8, 2]]
p new_matrix3 == matrix2
