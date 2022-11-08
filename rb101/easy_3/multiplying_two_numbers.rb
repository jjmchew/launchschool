=begin

input:
  - a method that takes 2 arguments

output:
  - multiples both numbers together, returns a result

assumptions / constraints:
  - numbers are integers
  - no input / data validation required

=end

# test cases

def multiply(num1, num2)
  num1 * num2
end

p multiply(5, 3) == 15

# solved in <3 mins