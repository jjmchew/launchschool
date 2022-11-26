=begin
4:56 pm - 5:08 pm  :  12 minutes


Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.

The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'

Use the English alphabet with 26 letters.

input
  - array of letters (strings) : in sequence except for 1 missing letter
output
  - string : a single character that is missing from the sequence of letters in the input array
rules
  - letters can be given in upper or lowercase
  - there will always be at least 2 letters in the input array;  there will always be only 1 letter missing
      - the first and last letter won't be the 'missing' one
  - letter sequence is always increasing

algorithm
  - initialize a reference array with a sequence of letters from alphabet starting from the first letter in given array
      - if the first char is lower case, create sequence in lower case
      - if the first char is upper case, create sequence in upper case
  
  - iterate across each char in the given array
      - check the reference array at the same index position:
        - if the char is the same, then go to the next index position
        - if the char is different, then return the char in the reference array


notes
  - create a 'reference' array of the letters of the alphabet
  - check if first character is upper or lower case and return output as appropriate
  - the first letter of the array determines the 'start point' for the reference sequence

=end

def get_reference(first_char)
  if ('a'..'z').include?(first_char)
    (first_char..'z').to_a
  else
    (first_char..'Z').to_a
  end
end

def find_missing_letter(array)
  reference = get_reference(array[0])
  array.each_with_index do |char, index|
    next if char == reference[index]
    return reference[index]
  end
end

p find_missing_letter(["a","b","c","d","f"]) == "e"
p find_missing_letter(["O","Q","R","S"]) == "P"
p find_missing_letter(["b","d"]) == "c"
p find_missing_letter(["a","b","d"]) == "c"
p find_missing_letter(["b","d","e"]) == "c"