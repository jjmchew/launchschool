# input:
#   - string

# output:
#   - true : if all characters in string are uppercase
#   - false:  if any characters in string are NOT uppercase

# assumptions / constraints:
#   - ignore non-alphabet characters (special chars / numbers)
#   - blank string has no characters - should return true

# data structure:
#   - use strings

# algorithm:
#   1.  compare if string.upcase is the same as the given string
#   2.  if so, then true, if not then false

def uppercase?(str)
  str == str.upcase # ? true : false   # ternary isn't necessary since Ruby evaluates conditional statements
end

# examples / test cases:
p uppercase?('t') == false
p uppercase?('T') == true
p uppercase?('Four Score') == false
p uppercase?('FOUR SCORE') == true
p uppercase?('4SCORE!') == true
p uppercase?('') == true