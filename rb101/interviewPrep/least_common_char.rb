# Write a method that takes a string as an argument and returns
# the character that occurs least often in the given string.
# If there are multiple characters with the equal lowest number
# of occurrences, then return the one that appears first in the
# string. When counting characters, consider the uppercase and
# lowercase version to be the same.

=begin
3:18 pm - 3:27pm ;   3:32 - 3:33 pm  : 10 minutes

input
  - string: of words
output
  - a single letter that occurs the least in input string (lowercase)
rules
  - if multiple char share same least occurrence count, return the char that occurs first
  - count upper and lower case char the same
  - space ' ' counts as a character

algorithm
  - create a lower case only version of given string `lower_str`
  - iterate across `lower_str`
      - count the occurrences of each letter, store the result in a hash `count`

notes
  - can I use min_by with a hash?
  - can work with a lower case version of the string for counts
=end

def least_common_char(string)
  count = Hash.new(0)
  lower_str = string.downcase

  (0...lower_str.length).to_a.each do |index|
    count[lower_str[index]] += 1
  end

  count.to_a.min_by { |sub| sub[1] }[0]

end


# Examples:

p least_common_char("Hello World") #== "h"
p least_common_char("Peter Piper picked a peck of pickled peppers") #== "t"
p least_common_char("Mississippi") #== "m"
p least_common_char("Happy birthday!") #== ' '
p least_common_char("aaaaaAAAA") #== 'a'

# The tests above should print "true".