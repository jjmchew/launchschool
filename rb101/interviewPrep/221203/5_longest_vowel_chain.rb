#  9:31 - 9:35  :  4 minutes
=begin
Longest vowel chain
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

input
  - string (of lowercase letters)
output
  - integer:  length of longest vowel chain
rules
  - longest vowel chain will be a substring of input string
  - will contain only vowels:  aeiou,  may contain more than 1 instance of each vowel
  - input string : alphabetic only, no spaces
note
  - can use regex
algorithm
  - use `scan` to find all vowel chains in string
  - convert the array of vowel chains to lengths of strings
  - find the max (length) in the converted array

=end

def solve(string)
  chains = string.scan(/[aeiou]+/)
  chains.map { |chain| chain.length }.max
end

p solve("codewarriors") == 2
p solve("suoidea") == 3
p solve("iuuvgheaae") == 4
p solve("ultrarevolutionariees") == 3
p solve("strengthlessnesses") == 1
p solve("cuboideonavicuare") == 2
p solve("chrononhotonthuooaos") == 5
p solve("iiihoovaeaaaoougjyaw") == 8
