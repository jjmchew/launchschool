# Problem
#   input:  'string of words'
#   output:  the words returned in the 'reverse order' (assume new string)
#   constraints:
#     - case doesn't change
#     - words are delimited by space ' '
#     - Assume new string is returned
#     - Spaces do not need to be 'reversed' (return empty string)

# Data structure
#   - use array, can be reversed

# Algorithm
# 1. convert sentence into a series of words (ordered in array)
# 2. reverse the array
# 3. rejoin the array elements (words) into a string (with spaces between elements)

def reverse_sentence(sentence)
  words = sentence.split(' ').reverse.join(' ')
end

# Examples / test cases
puts reverse_sentence('Hello World') == 'World Hello'
puts reverse_sentence('Reverse these words') == 'words these Reverse'
puts reverse_sentence('') == ''
puts reverse_sentence('    ') == '' # Any number of spaces results in ''
