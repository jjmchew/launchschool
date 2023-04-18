def reduce(array, start = flag = true)
  start = flag ? array[0] : start
  idx = flag ? 1 : 0

  return start unless block_given?

  while idx <= array.length - 1
    start = yield(start, array[idx])
    idx += 1
  end
  start
end

array = [1, 2, 3, 4, 5]

# rubocop:disable Layout/LineLength
p reduce(array) { |acc, num| acc + num }                    # => 15
p reduce(array, 10) { |acc, num| acc + num }                # => 25
# p reduce(array) { |acc, num| acc + num if num.odd? }        # => NoMethodError: undefined method `+' for nil:NilClass
p reduce(["1", "2", "3"], "a") { |acc, num| acc + num }
p reduce(['a', 'b', 'c']) { |acc, value| acc += value }     # => 'abc'
p reduce([[1, 2], ['a', 'b']]) { |acc, value| acc + value } # => [1, 2, 'a', 'b']
# rubocop:enable Layout/LineLength
