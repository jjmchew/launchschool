=begin
11:25 am - 11:50 am  :  25 minutes


Find the length of the longest substring in given string that is the same in reverse.
If the length of the string is 0, return value must be 0

input
  - string
output
  - integer : length of longest palindrome substring
rules
  - if length of string is 1, return 1
  - if length of string is 0, return 0

  - all substrings should be at least length 2
  - only need to create substrings that involve letters that occur more than once
  - substrings are formed of consecutive numbers

algorithm

  - get potential substrings from string (i.e., substrings that could be palindromes) (`substrings`)
    - iterate across letters of given string 'char'
        - if 'char' occurs more than once, it could be part of a palindrome substring
          - take a substring which goes from char to the next instance of that char (`get_instances`)
        - if not, do nothing
  
  - iterate across `substrings` and check if they are palindromes
      - remove substrings that aren't palindromes

  - count the longest substring (all remaining substrings should be palindromes)

  - `get_instances`
        - convert string to array of chars
          - iterate across chars (starting from the identified occurrence) and store collect the index of each occurrence of char in the array `indexes`
        - iterate across `indexes`
          - take a substring from first occurrence to each subsequent occurrence
        - return substrings

notes
  - need to be able to identify palindromes
  - will need to be able to find substrings - need to find *all substrings?
  
=end
def palindrome?(string)
  return true if string == string.reverse
end

def get_instances(string, index)
  instances = []
  (index + 1).upto(string.length - 1).each do |finish_idx|
    instances << string[index..finish_idx] if string[index] == string[finish_idx]
  end
  instances
end

def get_substrings(string)
  substrings = []

  string.chars.each_with_index do |char, index|
    if string.count(char) >= 2
      substrings += get_instances(string, index)
    end
  end
  
  substrings
end

def longest_palindrome(string)
  return string.length if string.length <= 1

  substrings = get_substrings(string)
  palindromes = substrings.select { |substr| palindrome?(substr) }
  palindromes.max_by { |str| str.length }.length
end

p longest_palindrome('') == 0
p longest_palindrome('a') == 1
p longest_palindrome('aa') == 2
p longest_palindrome('aab') == 2
p longest_palindrome('baa') == 2
p longest_palindrome('baabcd') == 4
p longest_palindrome('baablkj12345432133d') == 9
p longest_palindrome('I like racecars that go fast') == 7