=begin

3:29 pm - 3:42pm  :  13 minutes


For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times.

The input string consists of lowercase latin letters.

Your function should return :
    an array [t, k] (in Ruby and JavaScript)

Example #1:
for string
s = "ababab";
the answer is
("ab", 3)

Example #2:
for string
s = "abcde"
the answer is
("abcde", 1)
because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.

input
  - string
output
  - array w 2 elements:
      - 0:  string:  the repeating substring
      - 1:  integer:  the number of times the string in element 0 is repeated to form the given string
rules
  - string has lowercase letters only

algorithm
  - get length of given string
  - find all factors that divide evenly into length of given string
      e.g. - ababab :  length 6,  factors are 1, 2, 3, 6 (represent length of a potential repeating substring)
      - store these factors in an array of integers
  - iterate across the factors and test if a substring of that length * multiple to equal same length == given string

notes
  - could check count of each letter - repeating substring isn't possible without repeating characters
  - could look for even numbers of letters (necessary for repeating numbers)
  - could iterate through each letter, look for repeating letters, then try and match sequence?
  * - could look at substrings of letters (divide length of string by factors that divide evenly and test)

=end

def f(string)
  factors = []
  (1..string.length).to_a.each do |idx|
    factors << idx if string.length % idx == 0
  end

  factors.each do |length|
    return [string[0,length], (string.length / length)] if string[0,length] * (string.length / length) == string
  end
  
end


p f("ababab") #== ["ab", 3]
p f("abcde") #== ["abcde", 1]
p f("abababa") #== ["abababa", 1]