def reduce(array, first = nil)
  if first
    acc = first
    counter = 0
  elsif array[0].class == Integer
    acc = 0
    counter = 0
  else
    acc = array[0]
    counter = 1
  end

  while counter < array.length do
    acc = yield(acc, array[counter])
    counter += 1
  end

  acc
end

array = [1, 2, 3, 4, 5]

p reduce(array) { |acc, num| acc + num }                    # => 15
p reduce(array, 10) { |acc, num| acc + num }                # => 25
# p reduce(array) { |acc, num| acc + num if num.odd? }        # => NoMethodError: undefined method `+' for nil:NilClass

p reduce(['a', 'b', 'c']) { |acc, value| acc += value }     # => 'abc'
p reduce([[1, 2], ['a', 'b']]) { |acc, value| acc + value } # => [1, 2, 'a', 'b']
