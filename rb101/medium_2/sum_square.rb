=begin
9:01 am - 9:27 am : 16 minutes (even with a 10 min break)

input
  - a positive integer
output
  - integer : a difference b/w 2 calculation methods
constraints / assumptions
  - method 1:  sum up each of the integers between 1 and given integer, then square the result
  - method 2:  square each integer between 1 and given integer, then sum all of the results
  - calculate result 1 - result 2


=end

def sum_square_difference(num)
  result1 = (1..num).inject(:+) ** 2
  result2 = 1.upto(num).reduce(0) { |tot, n| tot += n**2 }
  result1 - result2
end

# test cases
p sum_square_difference(3) == 22
# -> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
p sum_square_difference(10) == 2640
p sum_square_difference(1) == 0
p sum_square_difference(100) == 25164150