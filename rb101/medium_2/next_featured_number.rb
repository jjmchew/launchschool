=begin
** COULD TRY THIS ONE AGAIN **

9:01 pm - 9:21 pm : 20 minutes

input
  - integer
output
  - integer : a 'featured' number greater than input integer
  OR
  - nil
constraints / assumptions
  - featured numbers are:
      - odd
      - multiple of 7
      - digits occur exactly once

algorithm
  - check if a number is featured:
      - check if odd
      - check if divisible by 7
      - convert number to an array of digits
      - initialize a 'count' hash
      - iterate across array to count the number of times each digit occurs
      - check count values to ensure all are equal to 1

  - starting from the given number, iterate var 'new_num' in increasing increments and check if that number is a featured number
      - if initial number is even, then increment by 1 and check if a featured number
      - if initial number is odd, then increment by 2 and check if a featured number
      - at every increment, check if new_num is a featured number
          - check if new_num is divisible by 7, if so, then start to increment by 7

Debrief notes
  - not sure how to confirm last test case - assume that eventually computer should reach the limit of integer values and return it's own error?

=end

def is_featured?(number)
  return false unless number.odd?
  return false unless number % 7 == 0

  count = Hash.new(0)
  digits = number.digits
  digits.each { |digit| count[digit] += 1 }
  return false unless count.values.all?{ |num| num <= 1 }
  true
end

def featured(num)
  new_num = num
  loop do
    case
    when new_num % 7 == 0
      new_num += 14
    when new_num.odd?
      new_num += 2
    when new_num.even?
      new_num += 1
    end
    break if is_featured?(new_num)
    p new_num
  end
  new_num
end

# test cases
p featured(12) == 21
p featured(20) == 21
p featured(21) == 35
p featured(997) == 1029
p featured(1029) == 1043
p featured(999_999) == 1_023_547
p featured(999_999_987) == 1_023_456_987

p featured(9_999_999_999) == nil  # -> There is no possible number that fulfills those requirements