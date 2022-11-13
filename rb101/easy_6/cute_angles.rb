=begin
input
  - float number between 0 .. 360;  represents an angle
output
  - string: with degrees (°), minutes ('), seconds(")
constraints / assumptions:
  - 1 degree = 60 minutes
  - 1 minutes = 60 seconds
data structure

algorithm
  - all digits to the left of decimal are degrees
  - all digits to the right of decimal need to be calculated to determine minutes / seconds

  - if there is a decimal - split into numbers to left of decimal and numbers to the right
    - the numbers to the left will be the degrees
    - calculate minutes and seconds with numbers on the right
      - divmod by minutes / degree to get degrees (quotient) and remainder will be the # of seconds
      - divide the remainder of above by seconds / degree


=end

DEGREE = "\xC2\xB0"
MIN_PER_DEGREE = 1.0 / 60
SEC_PER_MINUTE = 1.0 / 60

def split_decimal(number)
  left, right = number.to_s.split('.')
  right.prepend('.')
  return [left.to_i, right.to_f]
end

def dms(number)
  
  loop do
    number += 360 if number < 0
    number -= 360 if number > 360
    break if number <= 360 && number >= 0
  end

  if number.to_s.include?('.')
    degrees, right_num = split_decimal(number)
    minutes, seconds = split_decimal(right_num / MIN_PER_DEGREE)
    seconds = (seconds / SEC_PER_MINUTE).to_i
    return "#{degrees}#{DEGREE}#{format('%02d',minutes)}'#{format('%02d',seconds)}\""
  else
    return "#{number}#{DEGREE}00'00\""
  end
end

# test cases
p dms(30) == %(30°00'00")
p dms(76.73) == %(76°43'48")
p dms(254.6) == %(254°36'00")
p dms(93.034773) == %(93°02'05")
p dms(0) == %(0°00'00")
p dms(360) == %(360°00'00") || dms(360) == %(0°00'00")

# additional test cases for extended problem
p dms(400) == %(40°00'00")
p dms(-40) == %(320°00'00")
p dms(-420) == %(300°00'00")