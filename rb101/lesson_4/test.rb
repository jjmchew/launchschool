def transformation_example_1
  produce = {
    'apple' => 'Fruit',
    'carrot' => 'Vegetable',
    'pear' => 'Fruit',
    'broccoli' => 'Vegetable'
  }

  def select_fruit(produce)
    selected = {}
    produce.each { |k,v| selected[k] = v if v == 'Fruit' }
    selected
  end

  p select_fruit(produce) # => {"apple"=>"Fruit", "pear"=>"Fruit"}
  p produce
end
# transformation_example_1

def transformation_example_2
  def double_numbers(array)
    array.map! { |num| num * 2 }
  end

  my_numbers = [1, 4, 3, 7, 2, 6]
  p double_numbers(my_numbers)
  p my_numbers
end
# transformation_example_2

def transformation_example_3
  def double_odd_indices(array)
    new_array = []
    array.each_index do |index| 
      if index.odd?
        new_array << array[index] * 2
      else
        new_array << array[index]
      end
    end
    new_array
  end
  
  p double_odd_indices([1, 4, 3, 7, 2, 6]) == [1, 8, 3, 14, 2, 12]
  p double_odd_indices([2]) == [2]
  p double_odd_indices([2, 5]) == [2, 10]

end
# transformation_example_3

def transformation_example_4
  def multiply(array, num)
    new_array = array.map { |element| element * num }
  end

  my_numbers = [1, 4, 3, 7, 2, 6]
  p multiply(my_numbers, 3) # => [3, 12, 9, 21, 6, 18]

end
# transformation_example_4
