=begin

17:06 - 17:32  :  26 minutes

https://www.codewars.com/kata/5970df092ef474680a0000c9/train/ruby

Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") # "BbeehHilloTy"

input
  - string : may have spaces, non-alphabetic char, upper / lower case
output
  - string : only alphabetic, order re-arranged
rules
  - char are rearranged into alphabetic order, in order of occurrence in string (i.e, upper / lower case are show in order of occurrence)
  - ignore non-alphabetic, including spaces (these do not get written to output)
  - output has no spaces
  - empty input string returns empty

notes
  - sorting the string will return all of the characters that appear, but it won't order upper/lower case properly
  - could separate upper and lowercase into separate arrays and then iterate through both arrays
data structure
  - hash:  key is letter;  value is array of indexes (in which that letter appears in original string)

algorithm
  - iterate through each letter of the given string
      - add to the hash as appropriate - i.e., the letter and the index that letter appears

  - iterate across each letter of the alphabet (lowercase)
      - check the next index position for upper and lowercase letters to see which to add first
      - add the appropriate letter to an output string
  - return output string

example
  - {T:[0], h:[1], e:[2, 13], H:[4], ... }

=end

def el1_less?(el1, el2)
  return false if el1 == nil || el1 == []
  return true if el2 == nil || el2 == []
  el1 < el2
end

def upper_lower(hash, char)
  output = ""
  loop do
    if el1_less?(hash[char].first, hash[char.upcase].first)
      output += char
      hash[char].shift
    else
      output += char.upcase
      hash[char.upcase].shift
    end
    break if hash[char] == [] && hash[char.upcase] == []
  end
  output
end

def alphabetized(string)
  hash = {}
  string.chars.each_with_index do |char, index|
    if hash[char] == nil
        hash[char] = [index]
    else
        hash[char] << index
    end
  end

  output = ""
  ('a'..'z').each do |char|
    if hash[char] != nil && hash[char.upcase] != nil
      output += upper_lower(hash, char)
    elsif hash[char] != nil
      output += char * hash[char].length
    elsif hash[char.upcase] != nil
      output += char.upcase * hash[char.upcase].length
    end
  end

  output
end


p alphabetized("") == ""
p alphabetized(" ") == ""
p alphabetized(" a") == "a"
p alphabetized("a ") == "a"
p alphabetized(" a ") == "a"
p alphabetized("A b B a") == "AabB"
p alphabetized(" a b c d e f g h i j k l m n o p q r s t u v w x y z A B C D E F G H I J K L M N O P Q R S T U V W X Y Z") == "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"
p alphabetized("!@$%^&*()_+=-`,") == ""
p alphabetized("The Holy Bible") == "BbeehHilloTy"
p alphabetized("CodeWars can't Load Today") == "aaaaCcdddeLnooorstTWy"