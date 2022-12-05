# 9:52 - 10:01  :  9 minutes
=begin
For a given nonempty string s find a minimum substring t and the maximum number k, such that the entire string s is equal to t repeated k times. The input string consists of lowercase latin letters. Your function should return a tuple (in Python) (t, k) or an array (in Ruby and JavaScript) [t, k]

Example #1:

for string

s = "ababab"
the answer is

["ab", 3]
Example #2:

for string

s = "abcde"
the answer is

because for this string "abcde" the minimum substring t, such that s is t repeated k times, is itself.

input
  - string
output
  - array:  element 0:  string (t)
            element 1:  integer (k)
rules
  - string returned is the smallest substring (t) and max integer (k) where string == t * k
notes
  - don't need to check all substrings, can look for repeating letters, if no repeating letters, no repeating substring
  - or could only check substrings that can repeat - i.e., ababab - length of 6, substring could be 1, 2, 3, 6 in length
algorithm
  - iterate from 1..length of string `length`
      - if `length` divides evenly into length of string, then take a substring of that length (from index 0) and check if
          substring * string.length / `length` == string
      - if so, return array of [substring, string.length / `length`]
=end

def f(string)
  (1..string.length).each do |length|
    num = string.length / length
    return [string[0, length], num] if string[0, length] * num == string
  end
end

p f("ababab") == ["ab", 3]
p f("abcde") == ["abcde", 1]
