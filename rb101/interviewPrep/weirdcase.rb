=begin

10:17 pm - 


Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:

weirdcase( "String" )#=> returns "StRiNg"
weirdcase( "Weird string case" );#=> returns "WeIrD StRiNg CaSe"

input
  - string: single or multiple words
output
  - same string with case of letters in words updated
rules
  - for each word, first char upper, 2nd char lower,... continue alternating case
  - only alphabetic and spaces
  - spaces delimit words

algorithm
  - split string into array of words
  - for each word, apply weird case (helper method:  weird_case)
  - re-join array of words together with a space

=end

def weird_case(word)
  word.chars.each_with_index { |char, index| char.upcase! unless index.odd?}.join("")
end

def weirdcase(string)
  words = string.split(" ")
  words.map! { |word| weird_case(word) }
  words.join(" ")
end

p weirdcase('This') == 'ThIs'
p weirdcase('is') == 'Is'
p weirdcase('This is a test') == 'ThIs Is A TeSt'
p weirdcase('encyclopedia') == 'EnCyClOpEdIa'