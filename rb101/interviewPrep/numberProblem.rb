=begin
676. Integer reduction
6 kyu
(https://www.codewars.com/kata/59fd6d2332b8b9955200005f/ruby) 

In this Kata, you will be given two integers n and k and your task is to remove k-digits from n and return the lowest number possible, without changing the order of the digits in n. Return the result as a string.
Let's take an example of solve(123056,4). We need to remove 4 digits from 123056 and return the lowest possible number. The best digits to remove are (1,2,3,6) so that the remaining digits are '05'. Therefore, solve(123056,4) = '05'.
Note also that the order of the numbers in n does not change: solve(1284569,2) = '12456', because we have removed 8 and 9.

More examples in the test cases.

example
  - 123056, 2
  - first remove 1 digit:     then remove another 1 digit
      e.g., 1 > 23056         2 > 3056
                              3 > 2056
                              0 > 2356
            2 > 13056         
            3 > 12056
            etc.
  
algorithm

  - create an array of all possible 'substrings' (number as string with x number of digits removed)
      - create a method that removes 1 digit from a given number string
      - call that method recursively to remove all required digits and assign the resulting number string to a collection array

  - iterate across all substrings:
      - convert to integer
      - find the minimum number
  - return the minimum number

=end

def remove_digits(array, n)
  return array if n == 0
  results = []
  array.each do |str_num|
    results += remove_digit(str_num)
  end
  # p "#{n} : #{results}"
  remove_digits(results.uniq, n-1)
end

def remove_digit(string_num)
  results = []
  0.upto(string_num.length-1) do |index|
    results << string_num[0...index] + string_num[index+1..-1]
  end
  results
end

def solve(num, digits)
  str_num = num.to_s
  results = remove_digits([num.to_s], digits)
  results.min
end

p solve(123056,1) == '12056'
p solve(123056,2) == '1056'
p solve(123056,3) == '056'
p solve(123056,4) == '05'
p solve(1284569,1) == '124569'
p solve(1284569,2) == '12456'
p solve(1284569,3) == '1245'
p solve(1284569,4) == '124'


# this was the solution developed w/ Matic / Amy based upon my solution
# solves for substrings by looping a number of times and replacing the previous results with the new 'removed' results
# ------------------------------------------------------------------

# def solve(num, digits)
#   num_arr = [num.to_s]
#   n = digits

#   n.times do
#     results = []
#     num_arr.each do |num_str|
#       0.upto(num_str.length-1) do |index|
#         results << num_str[0...index] + num_str[index+1..-1]
#       end
#     end 
#     num_arr = results
#     num_arr.flatten
#   end
#   num_arr.min
# end