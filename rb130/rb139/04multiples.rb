=begin
  2:14 pm start 2:38 pm finish  (24 mins)

algo
  - initialize an array to gather all multiples to be summed (`numbers`)
  - initialize a local var 'added' as `false`
  - iterate 'multiplier' starting from 1
      - reset `added` to `false`
      - check if multiplier x each number in @set is less than `limit`
      - if so, add multiplier x that number to `numbers`; `added` becomes `true`
      - stop iterating if `added` did not change to `true`
        (all numbers were bigger than `limit`)
  - return sum of all numbers in `numbers`
=end

class SumOfMultiples
  def initialize(*array)
    @set = array.empty? ? [3, 5] : array.uniq.sort
  end

  def self.to(limit)
    SumOfMultiples.new.to(limit)
  end

  def to(limit)
    numbers = []
    multiplier = 1
    loop do
      new_num = add_set(multiplier, limit)
      numbers += new_num
      multiplier += 1
      break if new_num.empty?
    end
    numbers.uniq.sort.sum
  end

  private

  def add_set(multiplier, limit)
    numbers = []
    @set.each do |num|
      numbers << multiplier * num if multiplier * num < limit
    end
    numbers
  end
end

# p SumOfMultiples.to(1000)
