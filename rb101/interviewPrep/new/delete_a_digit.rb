=begin

14:54 - 15:06  :  12 minutes

https://www.codewars.com/kata/5894318275f2c75695000146
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.
Example

For n = 152, the output should be 52;

For n = 1001, the output should be 101.
Input/Output

    [input] integer n

    Constraints: 10 ≤ n ≤ 1000000.

    [output] an integer

input
  - integer between 10 and 1_000_000
output
  - integer
rules
  - return the largest possible number that can be created by removing only 1 digit from the given number
  - order of existing digits doesn't change
notes
  - convert number to a string to remove digits 
algorithm
  - create an array of all possible numbers formed by removing 1 digit from input number (`numbers`)
      - convert number to an array of string digits
      - iterate from 0...array.length (`index`)
          - remove the element at position `index`
          - rejoin the array into a string and convert to a number
          - add this number to array `numbers`

  - sort the array
  - return the last element (largest)

=end

def delete_digit(num)
  numbers = []
  array = num.digits.reverse
  (0...array.length).each do |index|
    numbers << (array[0...index] + array[index+1..-1]).join.to_i
  end
  numbers.sort.last
end

p delete_digit(152) == 52
p delete_digit(1001) == 101
p delete_digit(10) == 1
p delete_digit(1234567) == 234567
