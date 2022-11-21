=begin
10:21 - 10:25 : 4 minutes

input
  - non-empty string
output
  - string :  1 or 2 char
constraints / assumptions
  - if length of given string is odd, then return single char in the middle index position
  - if length of given string is even, then return 2 char as 'middle'

algorithm
  - check the length of the given string
  - if even
      - return a substring, starting from length / 2 with length 2
  - if odd
      - return a substring, starting from length / 2 - 1 with length 1
=end

def center_of(string)
  length = string.length
  if length.odd?
    string[length/2]
  else
    string[length/2 - 1, 2]
  end
end

p center_of('I love ruby') == 'e'
p center_of('Launch School') == ' '
p center_of('Launch') == 'un'
p center_of('Launchschool') == 'hs'
p center_of('x') == 'x'