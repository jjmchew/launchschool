=begin
https://www.codewars.com/kata/5b1b27c8f60e99a467000041

Given two words, how many letters do you have to remove from them to make them anagrams?
Example

    First word : c od e w ar s (4 letters removed) > cear
    Second word : ha c k er r a nk (6 letters removed) > cera
    Result : 10 (# of letters removed)

Hints

    A word is an anagram of another word if they have the same letters (usually in a different order).
    Do not worry about case. All inputs will be lowercase.
    When you're done with this kata, check out its big brother/sister : https://www.codewars.com/kata/hardcore-anagram-difference

input
  - string1
  - string2
output
  - integer : # of letter removed from string1 and string2
rule
  - letters remaining from string1 and string2 must be the same (any order)
  - if no letters need to be removed, then return 0
  - if no letters are the same, remove all letters

algorithm
  - letters to be removed = total letters (in both strings) - # of common letters

  - find total # letters
      - count total string length for each and sum
  
  - initialize a 'common' counter variable
  - create duplicate of string2
  - find the # of common letters
      - iterate through the characters of string1
          - if that char is part of string2, then increment common by 1
          - remove that letter from string2 (so it can't be double-counted)
  - return value of letters to be removed

notes
  - length of final string will be the same for both
      - look for common letters between both strings
      - all other letters need to be removed
  - 'aab', 'a'  :  4 - 1*2 = 2
  -'code wars', 'hack erra nk'  :  18 - 4*2 = 10

=end

def anagram_difference(string1, string2)
  total_letters = string1.length + string2.length
  common = 0
  dup_string2 = string2

  string1.chars.each do |char|
    if dup_string2.include?(char)
      common += 1
      dup_string2.sub!(char, "")
    end
  end
  total_letters - (common * 2)
end

p anagram_difference('', '') == 0
p anagram_difference('a', '') == 1
p anagram_difference('', 'a') == 1
p anagram_difference('ab', 'a') == 1
p anagram_difference('ab', 'ba') == 0
p anagram_difference('ab', 'cd') == 4
p anagram_difference('aab', 'a') == 2
p anagram_difference('a', 'aab') == 2
p anagram_difference('codewars', 'hackerrank') == 10