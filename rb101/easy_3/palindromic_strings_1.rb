=begin

input:
  - string

output:
  - method returns true if input string is a palindrome
  - method returns false if not

assumptions / constraints:
  - case matters
  - punctuation and spaces also matter

data structure:
  - use array of characters

algorithm:
  - take input string, convert it to an array of characters
  - create a 2nd array which is a reverse the first array
  - compare each element for the first half (or half + 1 if odd length)
  - if all char are the same, then it's a palindrome

  - could do the same thing with a string - just create a new string

=end

def palindrome?(string)
  return true if string.reverse == string

  false
end

p palindrome?('madam') == true
p palindrome?('Madam') == false          # (case matters)
p palindrome?("madam i'm adam") == false # (all characters matter)
p palindrome?('356653') == true

# solved in < 5.5 mins