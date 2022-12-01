=begin

9:32 am - 9:40 am  : 8 minutes


If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

input
  - integer `num`
output
  - integer : sum of all numbers below `num` that are multiples of 3 or 5
rules
  - if a number is a multiple of 3 AND 5, only count it once
  - if `num` is -ve, return 0

algorithm
  - initialize a collection array `numbers`
  - iterate from 3 to `num`-1 (`index`)
      - check if `index` is a multiple of 3 or 5
          - if so, add `index` to `numbers`
  - sum (and return) all of the numbers in `numbers`

=end

def multiples(num)
  numbers = [0]
  (3...num).to_a.each do |index|
    numbers << index if index % 3 == 0 || index % 5 == 0
  end
  numbers.inject(:+)
end

p multiples(10) == 23
p multiples(20) == 78
p multiples(200) == 9168
p multiples(-10) == 0
p multiples(2) == 0
