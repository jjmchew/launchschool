=begin
input
  - an integer
output
  - an array of integers:  all integers that divide evenly into the given integer
rules
  - assume only positive integers given
algorithm
  - initialize an empty 'output' array
  - iterate from 2 to given integer ('num')
      - divide given integer by 'num'
      - if it divides evenly, then add num to 'output'
  - return 'output'

notes
  - can iterate all integers from 1 to given integer and check if divides evenly (i.e, remainder is 0)
=end

def divisors(int)
  output = []
  (1..int).each do |num|
    output << num if int % num == 0
  end
  output
end

p divisors(1) == [1]
p divisors(7) == [1, 7]
p divisors(12) == [1, 2, 3, 4, 6, 12]
p divisors(98) == [1, 2, 7, 14, 49, 98]
p divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute

