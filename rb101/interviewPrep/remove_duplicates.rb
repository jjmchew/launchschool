=begin
12:59 pm - 1:07 pm : 8 minutes

Write a method that takes a string argument and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.

input
  - string
output
  - new string : modification of the input
rules
  - all consecutive duplicate characters are replaced by a single character
  - assume any character in the string 'counts' (i.e., includes spaces, digits, etc.)
  - assume empty strings return an empty string

algorithm
  - initialize a 'collection' string (for output)

  - iterate across each character in given string
      - for each character, check if the current character is the same as the previous character
          - if SO, do nothing
          - if NOT, add that character to the collection string
  
  - return the collection string

notes:
  - need to identify 'duplicate characters'

=end

def remove_duplicates(string)
  output = ""
  string.chars.each do |char|
    next if char == output[-1]
    output += char
  end
  output
end

p remove_duplicates('aa') == 'a'
p remove_duplicates('II  eeat  pizza') == 'I eat piza'
p remove_duplicates('') == ''
p remove_duplicates('a') == 'a'
