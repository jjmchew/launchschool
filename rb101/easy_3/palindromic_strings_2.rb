=begin

assumptions / constraints:
  - case-insensitive
  - should ignore non-alphanumeric characters

data structure:
  - should be able to use strings again

algorithm:
  - remove spaces and non-alphanumeric characters before using previous palindrome method

=end

def palindrome?(string)
  string.reverse == string
end

def real_palindrome?(string)
  new_string = string.downcase.gsub(/[^a-z0-9]/i, '')
  palindrome?(new_string)
end

# test cases
p real_palindrome?('madam') == true
p real_palindrome?('Madam') == true           # (case does not matter)
p real_palindrome?("Madam, I'm Adam") == true # (only alphanumerics matter)
p real_palindrome?('356653') == true
p real_palindrome?('356a653') == true
p real_palindrome?('123ab321') == false

# solved in < 4.5 mins