=begin
input
  - array of elements (any type)

output
  - the SAME array object - mutated - with the elements reversed

algorithm
  - if there is more than 1 element then:
    - swap the first and last elements of the array 
        - (can keep track with 2 pointers)
    - then swap the second and second-last elements of the array 
        - (first pointer will be incremented, second pointer will be decremented)
    - keep swapping until the 2 elements of the array are the same or if everything has already been swapped
        - (the first pointer should never be greater than the second pointer, or the same number)
  - otherwise, return the same array
=end

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

# test cases
list = [1,2,3,4]
result = reverse!(list)
p result == [4, 3, 2, 1] # true
p list == [4, 3, 2, 1] # true
p list.object_id == result.object_id # true

list = %w(a b e d c)
p reverse!(list) == ["c", "d", "e", "b", "a"] # true
p list == ["c", "d", "e", "b", "a"] # true

list = ['abc']
p reverse!(list) == ["abc"] # true
p list == ["abc"] # true

list = []
p reverse!(list) == [] # true
p list == [] # true