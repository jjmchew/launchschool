=begin

8:49 - 9:14  :  25 minutes

https://www.codewars.com/kata/5ae326342f8cbc72220000d2/train/ruby

Given a string that includes alphanumeric characters ("3a4B2d") return the expansion of that string: The numeric values represent the occurrence of each letter preceding that numeric value. There should be no numeric characters in the final string.
Notes

    The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears
    If there are multiple consecutive numeric characters, only the last one should be used (ignore the previous ones)
    Empty strings should return an empty string.

Your code should be able to work for both lower and capital case letters.

"3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
"3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
"3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
"abcde"     -->  "abcde"           # no digits
"1111"      -->  ""                # no characters to repeat
""          -->  ""                # empty string

input
  - string : numbers and letters
output
  - string : only letters
rules
  - the number preceeding a letter will define the number of times the letter afterwards should be repeated in the output string
      - only look at the last digit before a number if there are multiple digits present
      - max # of repeats is 9
  - if 1 number precedes a number of characters, that number should be used to repeat each character afterwards
  - if there are no numbers, then just return the letters present
  - if no letters are present, return an empty string
  - case of characters (upper or lower) remain unchanged in the output string

notes
  - need to look for a number just before 1 or more characters
    - need to group the letters after that number together (each will be repeated the same number of times)
  - can look for no characters and address that case initially
    - can use `.match?(/[a-z]/i)` to scan for any letters in string

algorithm
  - scan each char of `string` until a number is found
      - store the characters afterwards until another number is found
      - store the number and set of characters afterwards elements in an array `matches`
  
  - initialize a collection string for output (`output`)
  - iterate through `matches`
      - take the number (always the first element of the string, `num`) and apply that to repeat each subsequent character (convert to integer)
          - use a loop to iterate from 1...length of string
              - use `num` as multiplier for output of each char to concatenate to `output`
  - return `output`

=end

def string_expansion(string)
  return "" unless string.match?(/[a-z]/i)
  return string unless string.match?(/[0-9]/)

  output = ""
  
  matches = string.scan(/[0-9][a-zA-Z]+/)
  matches.each do |set|
    # p set
    num = set[0].to_i
    (1...set.length).each do |index|
      output << set[index] * num
    end
  end

  output
end


# p string_expansion('34abc2e') 
p string_expansion('3abc') == 'aaabbbccc'
p string_expansion('3D2a5d2f') == 'DDDaadddddff'
p string_expansion('0d0a0v0t0y') == ''
p string_expansion('3d332f2a') == 'dddffaa'
p string_expansion('abcde') == 'abcde'
p string_expansion('11111') == ''
p string_expansion('') == ''
