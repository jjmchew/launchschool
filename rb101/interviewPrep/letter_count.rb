=begin
9:34 am - 9:41 am  :  7 minutes

In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby.

Example: 
letterCount('arithmetics') #=> {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}

input
  - string : word
output
  - hash:  count of letters (key in symbols, value is integer count of letter occurrence in string)
rules
  - string will only contain lowercase letters, no punctuation, etc.

algorithm
  - initialize a count hash with default values of 0
  - convert string to array of chars
  - sort the array of chars to make it alphabetical

  - iterate across the array of chars
      - for each letter encountered, increase the count by 1
  - return the hash
=end

def letter_count(string)
  count = Hash.new(0)
  chars = string.chars.sort

  chars.each do |char|
    # p char
    count[char.to_sym] += 1
  end
  count
end


p letter_count('codewars') #== {:a=>1, :c=>1, :d=>1, :e=>1, :o=>1, :r=>1, :s=>1, :w=>1}
p letter_count('activity') #== {:a=>1, :c=>1, :i=>2, :t=>2, :v=>1, :y=>1}
p letter_count('arithmetics') #== {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}