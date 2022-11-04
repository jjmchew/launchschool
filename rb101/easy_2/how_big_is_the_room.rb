=begin

input:
  - ask user for length of room in metres (m)
  - ask user for width of room in metres (m)

output:
  - Sentence giving area of room in square meters and square feet:
  "The area of the room is 70.0 square meters (753.47 square feet)."

assumptions / constraints:
  - no input validation (assume all inputs are valid)
  - assume sq m is always presented with only 1 decimal place
  - assume sq ft is always presented with only 2 decimals places

data structure:
  - convert string inputs to float, to facilitate output  for sq_m (sq. metres) and sq_ft (sq. feet) in float
  - store both outputs in an array to facilitate test cases / checking

=end

def area(length, width)
  sq_m = length * width
  sq_ft = sq_m * 10.7639
  return [sq_m, sq_ft]
end

puts "Enter the length of the room in meters:"
length = gets.chomp.to_f
puts "Enter the width of the room in meters:"
width = gets.chomp.to_f

result = area(length, width)

puts "The area of the room is #{format('%.1f',result[0])} square meters (#{format('%.2f',result[1])} square feet)."


# test cases:
area(10, 7) #== [70.0, 753.47] 
area(0, 10) #== [0,0, 0.0]
area(1,1) #== [1.0, 10.76]

