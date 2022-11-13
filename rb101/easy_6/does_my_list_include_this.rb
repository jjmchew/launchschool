=begin
assumptions / constraints
  - assume array to search contains only integers
  - no data validation required

algorithm
  - iterate across each element of array
      - check for search_value
      - if it exists:  return true
      - otherwise, return false

=end

def include?(array, search_value)
  array.each { |element| return true if element == search_value }
  false
end

# test cases
p include?([1,2,3,4,5], 3) == true
p include?([1,2,3,4,5], 6) == false
p include?([], 3) == false
p include?([nil], nil) == true
p include?([], nil) == false
