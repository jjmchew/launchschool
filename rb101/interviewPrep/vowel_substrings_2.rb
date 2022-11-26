# A substring is a contiguous (non-empty) sequence of characters within a string.
  
# A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.
  
# Given a string word, return the number of vowel substrings in word.

=begin
6:45 pm - 7:19 pm : 34 minutes

input
  - string of letters : may or may not contain vowels
output
  - integer number : represents the number of vowel substrings in the given string
rules
  - a vowel substring must: have all 5 vowels (a e i o u) at least once
                            can have more than 1 occurrence of those vowels
                            can be any length (longer than 5)
                            can be capitals or lowercase
                            contains ONLY vowels

algorithm
  - find all substrings in given string that contain ONLY vowels : 'get_substrings'
      - initialize a collection array 'substrings'
      - iterate from char 0 to char (string.length - 1) > 'start'
          - initialize a collection string 'substr'
          - if char at 'start' is NOT a vowel, then skip rest of loop
          - if char at 'start' is a vowel then add it substr
              - iterate from char (start + 1) to char (string.length - 1) > 'finish'
                  - if char at 'finish' is NOT a vowel, then stop looping (rest of chars don't matter)
                  - if char at 'finish' IS a vowel, then add it to substr
          - check length of substr
              - if >= 5 then add it to substrings
              - if not, then ignore it
  
  - iterate across 'substrings' to find all possible combinations of 5 char substrings : 'get_combos'
      - if the substring is 6 or more characters e.g., aeioua
          - start with the first char (index 0) and take a substring to index +4 (4) - add this to substrings
          - then start at index 1, take substring to index 5 - add this to substrings
          - continue until the index > length of substring - 1

  - iterate across 'substrings' and check that each substring has all 5 vowels in it : 'check_substrings'
      - if so, then keep the substring
      - if not, then delete the substring
  - count, and return, the number of substrings

notes
  - can convert everything to lowercase for comparisons / counting (don't need to return the string itself)
  
=end

VOWEL = %w(a e i o u)
def get_combos(substr)
  substrings = []
  start_idx = 0
  loop do
    break if start_idx + 4 >= substr.length
    substrings << substr[start_idx..(start_idx + 4)]
    start_idx += 1
  end
  substrings
end

def get_substrings(string)
  substrings = []
  0.upto(string.length-1) do |start_idx|
    substr = ""
    next if !VOWEL.include?(string[start_idx])
    substr += string[start_idx]
    (start_idx+1).upto(string.length-1) do |finish_idx|
      break if !VOWEL.include?(string[finish_idx])
      substr += string[finish_idx]
    end
    substrings << substr if substr.length >= 5
  end
  substrings
end

def vowel_substrings(string)
  substrings = get_substrings(string.downcase)
  substrings.dup.each do |substr|
    substrings += get_combos(substr) if substr.length > 5
  end
  substrings.uniq!

  # p substrings
  new_arr = substrings.select do |substr|
    VOWEL.all? { |vowel| substr.include?(vowel) }
  end

  # p new_arr
  new_arr.length
end

# p vowel_substrings('aEiou') == 1
# p vowel_substrings('PPdaEioug') == 1
# p vowel_substrings('aeiouau') == 5
p vowel_substrings('aaaeeeiiio') #== 0
# p vowel_substrings('aeIoUAu') == 5
# p vowel_substrings('AEIOduau') == 0
# p vowel_substrings('dkfhwps') == 0
# p vowel_substrings('') == 0