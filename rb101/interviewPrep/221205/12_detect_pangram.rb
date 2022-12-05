# 8:42 - 8:50 am (with many distractions from Alex)
=begin
A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

input
  - string (multiple words, maybe with punctuation)
output
  - true or false
rules
  - if input string contains every letter of the alphabet then return true, else false
notes
  - need to keep track / check every letter of the alphabet
algorithm
  - create an array of each letter of the alphabet
  
  - iterate across that array
      - check if the letter (element) appears in lowercase ver of input string
      - if not:  return false
  
  - return true by default
=end

def panagram?(string)
  alphabet = ('a'..'z').to_a
  alphabet.each do |char|
    return false unless string.downcase.include?(char)
  end
  true
end
p panagram?("The quick brown fox jumps over the lazy dog.") == true
p panagram?("This is not a pangram.") == false
