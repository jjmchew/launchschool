=begin

https://www.codewars.com/kata/5894318275f2c75695000146
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.
Example

For n = 152, the output should be 52;

For n = 1001, the output should be 101.
Input/Output

    [input] integer n

    Constraints: 10 ≤ n ≤ 1000000.

    [output] an integer

=end

p delete_digit(152) == 52
p delete_digit(1001) == 101
p delete_digit(10) == 1
