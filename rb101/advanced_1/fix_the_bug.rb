
def my_method(array)
  if array.empty?
    []
  elsif array.size > 1 # previously no condition - always executed this block for non-empty arrays
    array.map do |value|  # array.map w/ block was considered the 'conditon' - which always evaluated to true
      value * value
    end                   # if block assumed there was nothing to execute hence returned 'nil'
  else
     [7 * array.first] 
  end
end

p my_method([])
p my_method([3])
p my_method([3, 4])
p my_method([5, 6, 7])

# CODE FIX WAS CORRECT (adding conditional elsif)
# BUT....
#   explanation wasn't quite right!
#   didn't need to add new var - could just use the return from map
#   didn't need return statements