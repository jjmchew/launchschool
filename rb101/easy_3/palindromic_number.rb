=begin

input:
  - integer number

output:
  - true if number is palindromic

data structure:
  - need to convert the number to a String

algorithm:
  - convert number to String
  - use prior palindrome method to check if palindromic
=end

def palindromic_number?(number)
  string = number.to_s
  string == string.reverse
end

# test cases
p palindromic_number?(34543) == true
p palindromic_number?(123210) == false
p palindromic_number?(22) == true
p palindromic_number?(5) == true

# solved in < 3 mins