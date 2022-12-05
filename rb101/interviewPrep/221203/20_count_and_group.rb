# 10:32 pm - 10:43 pm :  11 minutes
=begin
Write a method that takes a string as an argument and groups the number of times each character appears in the string as a hash sorted by the highest number of occurrences.

The characters should be sorted alphabetically e.g:

get_char_count("cba") => {1=>["a", "b", "c"]}
You should ignore spaces, special characters and count uppercase letters as lowercase ones.

input
  - string
output
  - hash :  k as integer,  v as array of lowercase letters which appear k # of times in string
rules
  - characters in v should be sorted alphabetically
  - ignore spaces, special characters
  - digits do count
  - can convert input string to lowercase letters
notes
  - can make a standard count hash, and then convert that hash to the desired output
  - count hash:  { m: 1, i: 4, s: 4, p: 2}
      - need to first sort hash by key, then add to new hash by value
algorithm
  - create standard count hash
  - sort the count hash by key

  - create the output hash (with default values of [])
  - iterate through the count hash and add the key to the output hash value array based on value

=end
INCLUDED = ('a'..'z').to_a + ('0'..'9').to_a

def get_char_count(string)

  count = Hash.new(0)
  string.downcase.chars.each do |char|
    count[char] += 1 if INCLUDED.include?(char)
  end
  
  count = count.sort_by { |k,_v| k }.to_h

  output = Hash.new { |h,k| h[k] = [] }
  count.each do |k,v|
    output[v] << k
  end
  output
end

p get_char_count("Mississippi") == {4=>["i", "s"], 2=>["p"], 1=>["m"]}
p get_char_count("Hello. Hello? HELLO!!") == {6=>["l"], 3=>["e", "h", "o"]}
p get_char_count("aaa...bb...c!") == {3=>["a"], 2=>["b"], 1=>["c"]}
p get_char_count("aaabbbccc") == {3=>["a", "b", "c"]}
p get_char_count("abc123") == {1=>["1", "2", "3", "a", "b", "c"]}

