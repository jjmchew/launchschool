=begin

input:
  - array of numbers

output:
  - a method which returns another array with every other element from input Array
  (1st, 3rd, 5th, etc.)

assumptions / constraints:
  - non-mutating method
  - no data validation required

=end

# test cases

def oddities(array)
  new_array = []
  array.each_with_index do |element, index|
    new_array << element unless index.odd?
  end
  new_array
end

p oddities([2, 3, 4, 5, 6]) == [2, 4, 6]
p oddities([1, 2, 3, 4, 5, 6]) == [1, 3, 5]
p oddities(['abc', 'def']) == ['abc']
p oddities([123]) == [123]
p oddities([]) == []
p oddities([1, 2, 3, 4, 1]) == [1, 3, 1]

# solved in < 3.5 mins
