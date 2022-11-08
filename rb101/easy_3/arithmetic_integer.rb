=begin
input:
  - prompt for 2 positive integers

output:
  - prints the results of operations on those 2 numbers:
    +
    -
    *
    /
    %
    **

assumptions / constraints:
  - no input validation required

test case : see problem example
=end

puts "==> Enter the first number:"
num_1 = gets.chomp.to_i

puts "==> Enter the second number:"
num_2 = gets.chomp.to_i

puts "==> #{num_1} + #{num_2} = #{num_1 + num_2}"
puts "==> #{num_1} - #{num_2} = #{num_1 - num_2}"
puts "==> #{num_1} * #{num_2} = #{num_1 * num_2}"
puts "==> #{num_1} / #{num_2} = #{num_1 / num_2}"
puts "==> #{num_1} % #{num_2} = #{num_1 % num_2}"
puts "==> #{num_1} ** #{num_2} = #{num_1 ** num_2}"

# solved in <4 mins