=begin

input:
  - prompt for integer > 0
  - prompt for sum or product (s or p)

output:
  - the sum or product of all numbers between 1 and the users chosen number

assumptions / constraints:
  - no input validation required

=end

def calculation(num, operation)
  if operation == 's'
    result = 0
    1.upto(num).each { |num| result += num }
  elsif operation == 'p'
    result = 1
    1.upto(num).each { |num| result *= num }
  end
  result
end

puts ">> Please enter an integer greater than 0:"
num = gets.chomp.to_i
puts ">> Enter 's' to compute the sum, 'p' to compute the product."
operation = gets.chomp.downcase
puts "The #{operation == 's' ? 'sum' : 'product'} of the integers between 1 and #{num} is #{calculation(num, operation)}."

# test cases
p calculation(5, 's') == 15
p calculation(6, 'p') == 720