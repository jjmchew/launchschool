=begin

input
  - integer 'num'

output
  - find all multiples of 3 OR 5 between 1 and 'num' then output the sum of those multiples

  assumptions / constraints
  - number given is integer > 1
  - no input validation required

data structure
  - array to store multiples of 3 or 5

algorithm
  - iterate from 1 to num
      - check if each num is divisible by 3 OR 5
      - if so:
          - add to an array of multiples
  - compute sum of all numbers in the array

=end

def multisum(num)
  multiples = []

  (1..num).each do |index|
    if index % 3 == 0 || index % 5 == 0
      multiples << index
    end
  end

  multiples.inject(:+)
end

# test cases
p multisum(3) == 3
p multisum(5) == 8
p multisum(10) == 33
p multisum(1000) == 234168