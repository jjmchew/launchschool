# 9:19 pm - 9:30 pm  :  11 minutes

=begin
Alphabet symmetry
Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) = [4, 3, 1]
See test cases for more examples.

Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

input:
  - array of strings
output
  - array of the number of letters that occupy their positions in the alphabet for each word
rules
  - input strings are alphabetic (upper and lower case), no spaces
notes
  - need to 'translate' letters to their alphabet positions :  could use array with "" as first element and then alphabet letters
  - use helper method to count word
algorithm
  - `count_positions`
      - initialize `alphabet` array of letters in their corresponding index positions
      - initialize a 'counter' variable
      - iterate through each char of word with index
          - if the index equals the letter position of the char(lowercase) then increment `counter`
  

  - increment a 'collection array' `output`
  - iterate through each word of given array
      - call 'count_positions' on the word
          - add the returned number to the `output` array
  - return `output`

=end

def count_positions(word)
  alphabet = ('a'..'z').to_a

  counter = 0
  word.chars.each.with_index do |char, index|
    counter += 1 if alphabet.find_index(char.downcase) == index
  end
  counter
end

def solve(array)
  output = []
  array.each { |word| output << count_positions(word) }
  output
end

p solve(["abode","ABc","xyzD"]) == [4,3,1]
p solve(["abide","ABc","xyz"]) == [4,3,0]
p solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])== [6,5,7]
p solve(["encode","abc","xyzD","ABmD"]) == [1, 3, 1, 3]
