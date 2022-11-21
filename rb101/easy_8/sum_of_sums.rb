=begin

algorithm
  - initialize a 'collection' variable for overall sum
  - need to iterate from 1 to "length of array" # of times
  - for each iteration take a subset, starting from first element of the given array with that iteration's number of elements
          - e.g., 1st iteration, take subset of 1 element 
          - e.g., 2nd iteration, take subset of 2 elements
          etc
      - sum up all of the elements within that subset
      - add the sum to a total 'collection' variable
  - return the collection variable
=end

def sum_of_sums(array)
  total = 0
  (1..array.length).each do |iteration|
    total += array[0, iteration].reduce(:+)
  end
  total
end

p sum_of_sums([3, 5, 2]) == 21 # (3) + (3 + 5) + (3 + 5 + 2) # -> (21)
p sum_of_sums([1, 5, 7, 3]) == 36 # (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) # -> (36)
p sum_of_sums([4]) == 4
p sum_of_sums([1, 2, 3, 4, 5]) == 35
