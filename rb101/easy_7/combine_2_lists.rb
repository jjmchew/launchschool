
def interleave(arr1, arr2)
  new_arr = []
  index = 0
  loop do
    new_arr << arr1[index]
    new_arr << arr2[index]
    index += 1
    break if index == arr1.length
  end
  new_arr
end

p interleave([1, 2, 3], ['a', 'b', 'c']) == [1, 'a', 2, 'b', 3, 'c']