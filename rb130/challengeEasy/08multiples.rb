class SumOfMultiples
  def initialize(*args)
    @set = args.empty? ? [3, 5] : args.sort
  end

  def self.to(limit)
    SumOfMultiples.new().to(limit)
  end

  def to(limit)
    calc_sum(limit)
  end

  private

  def calc_sum(limit)
    multiples = []
    (1..limit / @set.first).each do |multiplier|
      @set.each { |el| multiples << el * multiplier if el * multiplier < limit }
    end
    multiples.uniq.sum
  end
end

# p SumOfMultiples.new().set
# p SumOfMultiples.to(20)

# rubocop:disable Layout/LineLength
=begin
input
  - integer 'limit': a limit - all multiples should be less than this number
  - array of numbers 'set' : numbers to find multiples of (less than limit)

output
  - array of multiples : all multiples of the initial set and less than 'limit'

rules
  - if no 'set' is given, use [3, 5] as the 'set'
  - output should be an array of all multiples of nums in the set (including nums in the set) that are less than limit

algo
  - initialize output array 'multiples'
  - iterate multiplier starting from 1 up to the largest possible multiplier (limit / smallest num in set)
      - iterate across each number in 'set'
          - multiply that number by multiplier
          - if result is less than 'limit', add it to 'multiples'
  - return array 'multiples'

note
  - sort the initial set so that the smallest number given is the first element
=end
# rubocop:enable Layout/LineLength
