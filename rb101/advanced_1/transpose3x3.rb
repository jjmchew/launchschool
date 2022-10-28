# input: 
  # - nested array 3 x 3:
  # [
  #   [ 1, 5, 8 ],
  #   [ 4, 7, 2 ],
  #   [ 3, 9, 6 ]
  # ]
# output:
  # - rows become columns :
  # [
  #   [ 1, 4, 3 ],
  #   [ 5, 7, 9 ],
  #   [ 8, 2, 6 ]
  # ]
# assumptions / constraints:
  # - always / only 3 x 3 : no input validation required
  # - cannot use matrix class or library transpose method

# data structure:
  # - same nested arrays

# algorithm:
  # - store locations of each element in a reference hash to use to access new elements directly
  # e.g.,  each set is [row 'index' (main array index), col 'index' (sub-array index)]
  # new matrix is always:
  # [
  #   [ [0,0], [1,0], [2,0] ],
  #   [ [0,1], [1,1], [2,1] ],
  #   [ [0,2], [1,2], [2,2] ]
  # ]

def transpose(matrix)
  map = [
    [ [0,0], [1,0], [2,0] ],
    [ [0,1], [1,1], [2,1] ],
    [ [0,2], [1,2], [2,2] ]
  ]

  new_matrix = Array.new(3) { Array.new(3) }  # Be careful with how the matrix is initialized!!
                                              # my prior syntax made all 3 rows identical :  Array.new(3, [0,0,0])
  map.each_with_index do |row, row_idx|
    row.each_with_index do |col, col_idx| 
      new_matrix[row_idx][col_idx] = matrix[col[0]][col[1]]
    end
  end

  p new_matrix
end

matrix = [
    [ 1, 5, 8 ],
    [ 4, 7, 2 ],
    [ 3, 9, 6 ]
  ]

new_matrix = transpose(matrix)

p new_matrix == [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
p matrix == [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

# MY SOLUTION IS DIFFERENT
# - probably best not to use a reference hash for mapping elements
# - should try again with LS method