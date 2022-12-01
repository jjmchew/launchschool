=begin

https://www.codewars.com/kata/546f922b54af40e1e90001da/train/ruby
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
Example

alphabet_position("The sunset sets at twelve o' clock.")

Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

input
  - string : words or other characters
output
  - series of numbers from 1 - 26, all separate by a space
rules
  - ignore all other (non-alphabetic, digits) characters
  - spacing from original word is irrelevant in output - just numbers separated by a space
  - if no letters in input, return an empty string
  - no '0' preceding 1 digit numbers
  - letters could be upper or lower case


data structure
  - use array of letters to 'convert' letters to numbers
notes
  - need to convert numbers to letters : array
  - convert string into lowercase
  - need to separate alphabetic characters (lowercase) from other characters
      - see if character is an element of the `alphabet` array
  - remember to remove trailing spaces

algorithm
  - initialize a collection string for output (`output`)
  
  - convert string to an array of chars  (`chars`)

  - iterate across `chars`
      - check if that char is alphabetic
      - if so:  add the number associated with the character to `output`
                - turn number into string, then concatenate
      - if NOT:  do nothing

  - return `output`
=end

def alphabet_position(string)
  alphabet = ('a'..'z').to_a
  alphabet.unshift("")
  
  output = ''
  new_string = string.downcase
  
  new_string.chars.each do |char|
    if alphabet.include?(char)
      output << alphabet.find_index(char).to_s + " "
    end
  end

  output[0..-2]
end


p alphabet_position("The sunset sets at twelve o' clock.") == "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
p alphabet_position("-.-'") == ""
p alphabet_position('wowowowosfa') == "23 15 23 15 23 15 23 15 19 6 1"