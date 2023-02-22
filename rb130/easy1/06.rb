=begin
Iterators:  True for Any?
=end

def any?(array, &block)
  # return false unless block_given?
  # return false if array.length == 0  # line not necessary - for empty array, will not execute each block
  array.each { |element| return true if yield(element) }
  false
end

p any?([1, 2]) == false
p any?([1, 3, 5, 6]) { |value| value.even? } == true
p any?([1, 3, 5, 7]) { |value| value.even? } == false
p any?([2, 4, 6, 8]) { |value| value.odd? } == false
p any?([1, 3, 5, 7]) { |value| value % 5 == 0 } == true
p any?([1, 3, 5, 7]) { |value| true } == true
p any?([1, 3, 5, 7]) { |value| false } == false
p any?([]) { |value| true } == false