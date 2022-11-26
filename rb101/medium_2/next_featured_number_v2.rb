=begin
8:15 pm - 8:40 pm : 25 minutes

input
  - integer : 'given number'
output
  - integer : the next 'featured' number greater than input integer
  OR
  - string : error message if no 'featured' number exists

rules
  - featured numbers are:
      - odd number
      - multiple of 7
      - digits occur exactly once each

algorithm
  - maximum possible potential for featured numbers is 9_876_543_210 (all digits occur exactly once).  Note that this isn't a featured num (not a multiple of 7, not odd, etc.)

  - if given number is greater than max possible featured number, then return error msg

  - increase 'given number' until we find a featured number
      - if 'given number' is even' + 1 then test
      - if odd then +2 until divisible by 7, then test
      - A:  if divisible by 7 (and odd) then +14, then test 
      - continue doing A until a featured number is produced

=end

MAX_POSSIBLE = 9_876_543_210

def featured?(num)
  # return false if num.even?
  # return false if num % 7 != 0
  return false if num.digits.reverse.uniq.join.to_i != num
  true
end

def featured(n)
  return "no featured number greater than #{n} exists" if n > MAX_POSSIBLE
  next_num = n
  next_num += 1 until next_num.odd? && next_num % 7 == 0
  
  loop do
    break if featured?(next_num) && next_num > n
    next_num += 14
  end

  next_num
end

p featured(12) == 21
p featured(20) == 21
p featured(21) == 35
p featured(997) == 1029
p featured(1029) == 1043
p featured(999_999) == 1_023_547
p featured(999_999_987) == 1_023_456_987

p featured(9_999_999_999) # -> There is no possible number that fulfills those requirements
