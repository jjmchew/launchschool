=begin
7:36 pm - 8:06 pm :  30 mins

algorithm
  - assign the given rational number as 'current'
  - iterate / test increasing denominators, 'n', starting from 1 (to represent 1/1 - an egyptian fraction), increasing by 1
      - if current > 1/n then add n to the array of denominators and current = current - 1/n
      - if current is not greater than 1/n than increment to the next n
      - stop iterating once current is 0

=end

require 'pry'

def egyptian(number)
  current = number
  denominators = []
  n = 1
  loop do
    if current >= Rational(1, n)
      current -= Rational(1, n)
      denominators << n
    end
    n += 1
    break if current == 0
  end
  denominators
end

def unegyptian(denominators)
  result = Rational(0,1)
  denominators.each do |n|
    result += Rational(1,n)
  end
  result
end

# test cases
p egyptian(Rational(2, 1))    # -> [1, 2, 3, 6]
p egyptian(Rational(137, 60)) # -> [1, 2, 3, 4, 5]
p egyptian(Rational(3, 1))    # -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

p unegyptian(egyptian(Rational(1, 2))) == Rational(1, 2)
p unegyptian(egyptian(Rational(3, 4))) == Rational(3, 4)
p unegyptian(egyptian(Rational(39, 20))) == Rational(39, 20)
p unegyptian(egyptian(Rational(127, 130))) == Rational(127, 130)
p unegyptian(egyptian(Rational(5, 7))) == Rational(5, 7)
p unegyptian(egyptian(Rational(1, 1))) == Rational(1, 1)
p unegyptian(egyptian(Rational(2, 1))) == Rational(2, 1)
p unegyptian(egyptian(Rational(3, 1))) == Rational(3, 1)