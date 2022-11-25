=begin
8:50 pm - 8:59 pm : 9 minutes

algorithm
  - initialize a count variable and assign a value of 0
  - iterate across each month in the given year, 13th day
    - check if that day is a Friday
    - if so, increment count by 1

=end
require 'date'

def friday_13th(year)
  count = 0
  (1..12).each do |month|
    count += 1 if Date.new(year, month, 13).friday?
  end
  count
end

# test cases
p friday_13th(2015) == 3
p friday_13th(1986) == 1
p friday_13th(2019) == 2
