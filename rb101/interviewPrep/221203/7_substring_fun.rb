# 9:47 - 9:51  :  4 minutes
=begin
Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.

input
  - array of words
output
  - string: built up of letters from each word in array
rules
  - letter taken from each word corresponds to the index of element in array, which is index of char in string (start from 0)
notes
  - output string will have same number of characters as elements in array
algorithm
  - initialize an output string
  - iterate from 0...array.length `index`
      - add the character in the `index` position of the word at `index` position to the output string
  - return output string
=end

def nth_char(array)
  output = ""
    (0...array.length).each do |index|
      output += array[index][index]
    end

  output
end

p nth_char(['yoda', 'best', 'has']) == 'yes'
p nth_char([]) == ''
p nth_char(['X-ray']) == 'X'
p nth_char(['No', 'No']) == 'No'
p nth_char(['Chad', 'Morocco', 'India', 'Algeria', 'Botswana', 'Bahamas', 'Ecuador', 'Micronesia']) ==  'Codewars'
