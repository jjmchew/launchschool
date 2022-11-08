=begin

=end

def running_total(array)
  sum = 0
  array.map do |num| 
    sum += num
  end
end

# test cases
p running_total([2, 5, 13]) == [2, 7, 20]
p running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
p running_total([3]) == [3]
p running_total([]) == []