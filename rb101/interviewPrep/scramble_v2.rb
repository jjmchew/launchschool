=begin

9:15 am - 9:28 am : 13 minutes


Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered.

Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

input
  - string 1: `full`
  - string 2: `search`
output
  - boolean:  true / false
rules
  - if all letters in `search` exist in `full` then return true
  - otherwise, false
  - only lowercase letters in `full` and `search`

algorithm
  - initialize array of unique characters in `search` (`unique_search`)
  - iterate through each character of `unique_search`
      - check if the count of that letter in `search` is <= count of that letter in `full`
      - if NOT, return false
      - if so, do nothing
  - return true by default

notes
  - performance matters
  - options:
      - use count for each char in `search` - test in irb seems very functional
      - don't need to count each letter more than once - can use unique char in `search`
=end

def scramble(full, search)
  search.chars.uniq.each do |search_char|
    return false unless full.count(search_char) >= search.count(search_char)
  end
  true
end

p scramble('javaass', 'jjss') == false
# p scramble('rkqodlw',           'world'     ) == true
# p scramble('cedewaraaossoqqyt', 'codewars'  ) == true
# p scramble('katas',             'steak'     ) == false
# p scramble('scriptjava',        'javascript') == true
# p scramble('scriptingjava',     'javascript') == true

# s1 = "abcdefghijklmnopqrstuvwxyz" * 10000
# s2 = "zyxcba" * 100
# p scramble(s1, s2) == true

s3 = "abcdefghijklmnopqrstuvwxyz" * 100_000
s4 = "zyxcba" * 90_000
p scramble(s3, s4) == true