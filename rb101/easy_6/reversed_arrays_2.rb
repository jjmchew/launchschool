

def reverse!(array)
  return array if array.length <= 1
  pointer_1 = 0
  pointer_2 = array.length - 1
  loop do
    array[pointer_1], array[pointer_2] = array[pointer_2], array[pointer_1]
    pointer_1 += 1
    pointer_2 -= 1
    break if pointer_1 >= pointer_2
  end
  array
end

# my first version - might have been sort of cheating, but definitely works
# def reverse(array)
#   dup = array.dup
#   reverse!(dup)
# end

# second version, doing some actual coding - more similar in algorithm to solution
def reverse(array)
  new_array = []
  index = -1
  while index.abs <= array.length
    new_array << array[index]
    index -= 1
  end
  new_array
end

# test cases
p reverse([1,2,3,4]) == [4,3,2,1]          # => true
p reverse(%w(a b e d c)) == %w(c d e b a)  # => true
p reverse(['abc']) == ['abc']              # => true
p reverse([]) == []                        # => true

list = [1, 3, 2]                      # => [1, 3, 2]
new_list = reverse(list)              # => [2, 3, 1]
p list.object_id != new_list.object_id  # => true
p list == [1, 3, 2]                     # => true
p new_list == [2, 3, 1]                 # => true
