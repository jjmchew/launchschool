=begin
9:33 pm - 9:46 pm : 13 minutes

=end
require 'pry'

def bubble_sort!(array)
  loop do
    index = 0
    swap = false
    loop do
      if array[index] > array[index+1]
        array[index], array[index+1] = array[index+1], array[index]
        swap = true
      end
      index += 1
      break if index >= array.length - 1
    end
    break if swap == false
  end
end

# test cases
array = [5, 3]
bubble_sort!(array)
p array == [3, 5]

array = [6, 2, 7, 1, 4]
bubble_sort!(array)
p array == [1, 2, 4, 6, 7]

array = %w(Sue Pete Alice Tyler Rachel Kim Bonnie)
bubble_sort!(array)
p array == %w(Alice Bonnie Kim Pete Rachel Sue Tyler)
