=begin

input:
  - 2 arguments, both strings

output:
  - new string:  short-long-short concatenated together

assumptions / constraints:
  - assume no input / data validation
  - if strings are the same length, then assign the first string as 'short'

data structure:
  - strings

algorithm:
  - use comparison to check length of string
  - assign short-string to local var 'short' & long string to local var 'long'
  - concatenate strings for return, as desired

=end

# test cases

def short_long_short(string1, string2)
  if string1.length <= string2.length
    short = string1
    long = string2
  else
    short = string2
    long = string1
  end
  short + long + short
end

p short_long_short('abc', 'defgh') == "abcdefghabc"
p short_long_short('abcde', 'fgh') == "fghabcdefgh"
p short_long_short('', 'xyz') == "xyz"

