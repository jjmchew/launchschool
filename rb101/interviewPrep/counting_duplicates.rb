=begin

12:57 - 13:08  :  11 minutes

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

input
  - string :  upper/lower case & digits only
output
  - integer : number of 'repeated' characters
rules
  - no other special characters (e.g., spaces, etc.)
  - case insensitive - upper or lower case characters count the same

algorithm
  - initialize a collection array (`repeated`)
  - convert the given string to lowercase for comparisons
  - create an array of characters in the given string (unique)
  - iterate across the array of characters
      - determine the count of each character
      - if that count is 2 or more, add that character to a 'collection array'
  - count the number of elements in the 'collection array'

notes
  - don't need to return the characters themselves - can just convert string to lower case for counting, etc
  - # of reps don't matter, only that the character is repeating (2 or more in the input string)
  - an empty array will return size of 0
=end

def duplicate_count(string)
  repeated = []
  down_string = string.downcase

  down_string.chars.uniq.each do |char|
    p char
    repeated << char if down_string.count(char) >= 2
  end
  
  repeated.size
end

p duplicate_count("") == 0
p duplicate_count("abcde") == 0
p duplicate_count("abcdeaa") == 1
p duplicate_count("abcdeaB") == 2
p duplicate_count("Indivisibilities") == 2