=begin
9:46 - 9:42 : 16 minutes
input:  string ('String')
output:  array of substrings, all of which are palindromes ('Output')

assumptions / constraints:
  - case sensitive
  - repeated palindromes are included multiple times
  - includes (considers) non-alphabetic characters (i.e., space or other char will 'break' a palindrome)
  - single characters are not palindromes

algorithm
  - initialize Output (array)
  - create an array of strings of all substrings in String ('Substrings')
      - initialize array to collect all substrings ('Substrings')
      - iterate across string to create substrings
          - start with first char of string and string length **2 (no single char palindromes), ... to full length of string (final index is string length - 1)
          - then 2nd char of string, string length **2, ... to full string
          - etc.
      - add each substring to Substrings
  - iterate across Substrings and look for palindromes:
      - substring will be the same forwards as it is in reverse (check for equality)
      - if palindrome, then add to Output
      - if not palindrome, do nothing
  
Notes after looking at solution:
  - I tried to be clever by only taking substrings that were 2 characters or more
        - nothing wrong with that, but it may be harder to re-use `get_substrings` in the future - potentially better to just get all substrings?
  - given solution puts all 'conditions' into 1 method - this is much better for future update / reusability
        - work on doing this instead - will create better re-usable code

=end

def get_substrings(string)
  substrings = []
  0.upto(string.length-1) do |start|
    (start+1).upto(string.length-1) do |finish|
      substrings << string[start..finish]
    end
  end
  substrings
end

def palindromes(string)
  output = []
  substrings = get_substrings(string)
  substrings
  substrings.each do |substring|
    if substring == substring.reverse
      p "found palindrome #{substring}"
      output << substring
    end
  end
  output
end

p palindromes('abcd') == []
p palindromes('madam') == ['madam', 'ada']
p palindromes('hello-madam-did-madam-goodbye') == [
  'll', '-madam-', '-madam-did-madam-', 'madam', 'madam-did-madam', 'ada',
  'adam-did-mada', 'dam-did-mad', 'am-did-ma', 'm-did-m', '-did-', 'did',
  '-madam-', 'madam', 'ada', 'oo'
]
p palindromes('knitting cassettes') == [
  'nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'
]
