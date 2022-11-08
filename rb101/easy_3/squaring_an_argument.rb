=begin

input:
  - a method that takes 1 argument (and uses the previous multiple method

output:
  - method returns the square of the argument given

=end

def multiply(num1, num2)
  num1 * num2
end

def square(num)
  multiply(num, num)
end

# test cases
p square(5) == 25
p square(-8) == 64

# solved in < 2.5 mins