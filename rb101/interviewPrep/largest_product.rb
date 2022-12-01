=begin
9:44 am - 10:01  : 15 minutes

Complete the greatestProduct method so that it'll find the greatest product of five consecutive digits in the given string of digits.

For example:

greatestProduct("123834539327238239583") // should return 3240

The input string always has more than five digits.

input
  - string:  of digits  (`string`)
output
  - integer: greatest product of 5 consecutive digits from `string`
rules
  - input always has more than 5 digits
  - assume no non-digit characters

algorithm
  - find all substrings of 5 consecutive digits (`substrings`)
      - initialize a collection array `substrings`
      - iterate from index 0 to (length of string - 5) `start`
          - take a substring starting at `start` of length 5
          - e.g., '1234567'    start at index 0, last index is 2

  - iterate through `substrings` and transform each element
      - convert to array of characters
      - convert those characters to numbers
      - find the product of those numbers
      - store the final product
  
  -  find and return the maximum product in the array `substrings`

notes
  - need to find all substrings of 5 consecutive digits
  - can use `.inject(:*)` on an array of numbers to find the product ([1, 2, 3, 4, 5]  => 120)

=end

def get_substrings(string)
  substrings = []
  (0..(string.length-5)).each do |start|
    substrings << string[start, 5]
  end
  substrings
end

def greatest_product(string)
  substrings = get_substrings(string)
  
  substrings.map! do |substr|
    substr.chars.map { |element| element.to_i }.inject(:*)
  end

  substrings.max
end

p greatest_product("12345") == 120
p greatest_product("1234567") == 2520
p greatest_product("123834539327238239583") == 3240
p greatest_product("395831238345393272382") == 3240
p greatest_product("92494737828244222221111111532909999") == 5292
p greatest_product("92494737828244222221111111532909999") == 5292
p greatest_product("02494037820244202221011110532909999") == 0