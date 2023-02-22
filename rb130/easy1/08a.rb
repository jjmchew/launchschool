def any?(array)
  # return "hello" unless block_given?
  # return false if array.length == 0  # line not necessary - for empty array, will not execute each block
  array.each { |element| return true if yield(element) }
  false
end

def none?(array, &block)
  !any?(array, &block)
end

p none?([1,2]) {}
p none?([1, 3, 5, 6]) { |value| value.even? } # == false
p none?([1, 3, 5, 7]) { |value| value.even? } # == true
p none?([2, 4, 6, 8]) { |value| value.odd? } # == true
p none?([1, 3, 5, 7]) { |value| value % 5 == 0 } # == false
p none?([1, 3, 5, 7]) { |value| true } # == false
p none?([1, 3, 5, 7]) { |value| false } # == true
p none?([]) { |value| true } # == true