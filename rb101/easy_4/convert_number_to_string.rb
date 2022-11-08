=begin

data structure
  - array to string

algorithm
  - create a 'digit' hash to convert each num to it's corresponding string
  - remove each digit from the given number by taking the remainder and dividing it by 10
  - add that number to an array (make it the new leading element) of strings
  - join each element of that array into a string

=end

DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

def integer_to_string(int_num)
  chars = []
  num = int_num
  loop do
    chars.unshift(DIGITS[num % 10])
    num = num.divmod(10)[0]
    break if num == 0
  end
  chars.join
end

# test cases
p integer_to_string(4321) == '4321'
p integer_to_string(0) == '0'
p integer_to_string(5000) == '5000'
