=begin

15:06 - 15:16  :  10 minutes,  half done
16:54 - 17:05  :  11 minutes, 

https://www.codewars.com/kata/5970df092ef474680a0000c9/train/ruby

Re-order the characters of a string, so that they are concatenated into a new string in "case-insensitively-alphabetical-order-of-appearance" order. Whitespace and punctuation shall simply be removed!

The input is restricted to contain no numerals and only words containing the english alphabet letters.

Example:

alphabetized("The Holy Bible") # "BbeehHilloTy"

input
  - string : may have spaces, non-alphabetic char, upper / lower case
output
  - stinrg : only alphabetic, order re-arranged
rules
  - char are rearranged into alphabetic order, in order of occurrence in string (i.e, upper / lower case are show in order of occurrence)
  - ignore non-alphabetic, including spaces (these do not get written to output)
  - output has no spaces
  - empty input string returns empty
notes
  - important :  figure out if upper or lowercase appears first
  - could iterate through the alphabet to find instances
  - could use a helper method to check for first instance of upper or lower case in given string
      - could use find_index to see which is lower

algorithm
  - initialize a string to collect `output`
  - iterate through each character of the alphabet
      - check the string to see if that letter appears first in upper or lower case AND check how many times it appears  (`check_letter`)
      - if both upper and lower case letter appears, need to iterate through the string and add each letter (upper or lower) as it appears
      - add the output from `check_letter` to `output` string
  - return `output`

=end

def check_letter(string, char)
  if string.count(char) >= 1 && string.count(char.upcase) >= 1
    mixed = ""
    (0..string.length).each do |index|
      mixed += char if string[index] == char
      mixed += char.upcase if string[index] == char.upcase
    end
    return mixed
  elsif string.count(char) >= 1
    return char * string.count(char)
  elsif string.count(char.upcase) >= 1
    return char.upcase * string.count(char.upcase)
  end
  ""
end

def alphabetized(string)
  output = ""
  ('a'..'z').each do |char|
    output << check_letter(string, char)
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

=begin
James D solution

groups = Hash.new { |h, k| h[k] = [] }
# Hash.new(false)

string.chars.each do |char|
  groups[char.upcase] << char
end

# p string.chars.group_by(&:upcase)

p groups.sort_by { |k, _| k }.to_h.values.map(&:join).join.strip


=end