=begin
Count letters in string
In this kata, you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'. The key must be 'symbol' instead of string in Ruby and 'char' instead of string in Crystal.

Example:

letterCount('arithmetics') #=> {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}

input
  - string
output
  - hash:  key : symbol of letter in string;  value : count of occurrence in string
rules
  # - assume all lowercase letters in input string?
  - count only lowercase letters in input string
algorithm
  - initialize a count hash with default value 0
  - iterate through the characters of the input string
      - if the character is a lowercase letter of alphabet, then increment count hash by 1
  - sort the count hash by key
  - return the count hash
=end

def letter_count(string)
  count = Hash.new { |h,k| h[k] = 0 }
  string.chars.each do |char|
    count[char.to_sym] += 1
  end
  count.sort_by { |k,_| k }.to_h
end

p letter_count('codewars') == {:a=>1, :c=>1, :d=>1, :e=>1, :o=>1, :r=>1, :s=>1, :w=>1}
p letter_count('activity') == {:a=>1, :c=>1, :i=>2, :t=>2, :v=>1, :y=>1}
p letter_count('arithmetics') == {:a=>1, :c=>1, :e=>1, :h=>1, :i=>2, :m=>1, :r=>1, :s=>1, :t=>2}
