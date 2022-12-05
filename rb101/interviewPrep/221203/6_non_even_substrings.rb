# 9:36 pm - 9:46pm  :  10 minutes
=begin
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

input
  - string:  digits only
output
  - integer:  number of odd numbered substrings in given string
rules
  - only numbers in input string
  - NOT unique substrings (may have multiple instances of the same number if they come up more than once in given string)
algorithm
  - find all substrings of given string (from length of 1 to length of string)
      - iterate from 0...string.length => `start`
          - iterate from 0..string.length => `finish`
              - add the substring from `start` to `finish` to collection array

  - iterate across those substrings and transform to a number
  - iterate across array of numbers
      - increment count if number is odd
  - return count
=end

def get_substrings(string)
  substrings = []
  (0...string.length).each do |start|
    (start...string.length).each do |finish|
      substrings << string[start..finish]
    end
  end
  substrings
end

def solve(string)
  numbers = get_substrings(string).map { |str| str.to_i }
  numbers.select { |num| num.odd? }.count
end

p solve("1341") == 7
p solve("1357") == 10
p solve("13471") == 12
p solve("134721") == 13
p solve("1347231") == 20
p solve("13472315") == 28
