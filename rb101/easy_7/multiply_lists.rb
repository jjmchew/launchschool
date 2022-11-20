
def multiply_list(array1, array2)
  new_array = []
  array1.each_with_index do |num1, index|
    new_array << num1 * array2[index]
  end
  new_array
end

p multiply_list([3, 5, 7], [9, 10, 11]) == [27, 50, 77]
