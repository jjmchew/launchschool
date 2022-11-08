=begin

input:
  - get 6 numbers from user

output:
  - print a message that describes whether or not the 6th number appears among the 5 previous numbers

assumptions / constraints:
  - assume no data validation required
  - assume integers only (no float / decimals)
  - assume messages must be as displayed in example output

data structure:
  - array to store numbers and iterate
  - loop to solicit numbers (first 5)
  - store 6th number separately (last_num)

algorithm:
  - loop 5 times to
      - ask for a number from the user
      - add these to an array
  - ask for 6th number, store as last_num
  - iterate across the array (of first 5 numbers)
      - check if number == last_num
  - if so, print 'affirmative message'
  - if not, print 'negative message'

=end

def check_numbers(array, last_num)
  num_present = false
  array.each { |num| num_present = true if num == last_num }
  num_present
end

display_num = ['1st', '2nd', '3rd', '4th', '5th']

input_nums=[]
5.times do |index|
  puts "==> Enter the #{display_num[index]} number:"
  answer = gets.chomp.to_i
  input_nums << answer
end

puts "==> Enter the last number:"
last_num = gets.chomp.to_i

if check_numbers(input_nums, last_num)
  puts "The number #{last_num} appears in #{input_nums}."
else
  puts "The number #{last_num} does not appear in #{input_nums}."
end

# test cases:
p check_numbers([25, 15, 20, 17, 23], 17) == true
p check_numbers([25, 15, 20, 17, 23], 18) == false

# solved in < 13 mins