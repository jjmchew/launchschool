=begin
8:13 - 8:23 : 10 minutes

input
  - string of words : words may include 'number words' (e.g., one, two, three)
output
  - same string, but all number words are replaced with numerical digits
rules
  - spacing, punctuation don't change
  - mutation of original string
  - only need to worry about single digits:  'zero' to 'nine'
  - check for upper or lower case (or mixed) case for number words

data structure
  - array of strings, with correponding index the numerical digit required

algorithm
  - define the required 'number words' and their corresponding digits

  - iterate across the 'number words', the corresponding index will be the required digit:
      - search for that number word within the given string
      - replace that number word with the corresponding digit
  
  - return the updated (mutated) string
=end

def word_to_digit(string)
  number_words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

  number_words.each_with_index do |word, digit|
    # p "#{word} #{digit}"
    string.gsub!(/#{word}/i,digit.to_s)
  end

  string
end

p word_to_digit('Please call me at five five five one two three four. Thanks.') == 'Please call me at 5 5 5 1 2 3 4. Thanks.'
p word_to_digit('Please call me at Five five fIve ONE two three four. Thanks.') == 'Please call me at 5 5 5 1 2 3 4. Thanks.'
