def one?(array)
  return false if array.empty?
  found = false
  array.each do |element| 
    if yield(element)
      return false if found
      found = true
    end
  end
  found
end

p one?([1, 3, 5, 6]) { |value| value.even? } == true    # -> true
p one?([1, 3, 5, 7]) { |value| value.odd? } == false    # -> false
p one?([2, 4, 6, 8]) { |value| value.even? } == false   # -> false
p one?([1, 3, 5, 7]) { |value| value % 5 == 0 } == true # -> true
p one?([1, 3, 5, 7]) { |value| true } == false          # -> false
p one?([1, 3, 5, 7]) { |value| false } == false         # -> false
p one?([]) { |value| true } == false                    # -> false