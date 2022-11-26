=begin

4:31 pm - 4:54 pm : 23 minutes

The vowel substrings in the word codewarriors are o,e,a,io. 
The longest of these has a length of 2. 
Given a lowercase string that has alphabetic characters only 
(both vowels and consonants) and no spaces, 
return the length of the longest vowel substring. 
Vowels are any of aeiou.

input
  - string
output
  - integer : represents the length of the longest vowel substring
rules
  - characters in string could be upper or lower case
  - vowel substring can contain repeated vowels

algorithm
  - get all vowel substrings in given string, collect in an array 'substrings'
      - these must start with a vowel, and will be as long as the next character is also a vowel
      - convert string to array of characters

      - initialize a collection 'array' for substrings
      - iterate across each character, starting with index 0 'start' to (array.length - 1)
          - initialize a 'collection string'
          - if character at 'start' is NOT a vowel, then skip rest of loop
          - if character at 'start' IS a vowel then add it to the collection string
          - nested loop will run from 'start'+1 to (array.length - 1) 'next_idx'
              - if character at 'next_idx' is NOT a vowel, then skip rest of loop
              - if character at 'next_idx' IS a vowel, then add it to the collection string
          - add 'collection string' to 'substrings'


  - iterate across array of vowel substrings, transform to length of substring
  - return the largest number in the transformed array

=end
require 'pry'

VOWELS = %w(a e i o u)

def get_substrings(string)
  substrings = []
  0.upto(string.length - 1) do |start|
    substr = ''
    next if !VOWELS.include?(string[start].downcase)
    
    substr += string[start]
    (start+1).upto(string.length - 1) do |next_idx|
      break if !VOWELS.include?(string[next_idx].downcase)
      substr += string[next_idx]
    end
    substrings << substr
  end

  substrings
end

def vowel_substrings(string)
  substrings = get_substrings(string)
  substrings.map! { |substr| substr.length }
  
  return 0 if substrings.empty?
  substrings.max
end

# test case
p vowel_substrings('codewarriors') == 2
p vowel_substrings('abcdeioogh') == 4
p vowel_substrings('PIZZA') == 1
p vowel_substrings('pZz') == 0
p vowel_substrings('AbciIi') == 3
p vowel_substrings('AoOuybciIi') == 4
