=begin

input:
  - prompt for bill rate
  - prompt for tip rate

output:
  - tip amount
  - total amount of bill (i.e., bill + tip)

assumptions / constraints:
  - appears that both tip and bill are shown to only 1 decimal place
  - assume tip is entered as whole number which we convert to decimal (i.e., user does not enter a decimal to represent a percentage)
  - assume no input validation required
  - will return tip and total bill in an array to facilitate test case validation


=end

def tip_calculator(bill, tip)
  return [(bill.to_f * (tip.to_f/100)).round(1), (bill.to_f * (1 + (tip.to_f/100))).round(1)] # beware!  if using round(2), whole numbers will still ony display with 1 decimal place by default
end

print "What is the bill? "
bill = gets.chomp.to_f
puts ""

print "What is the tip percentage? "
tip = gets.chomp.to_f
puts ""

result = tip_calculator(bill, tip)

puts "The tip is $#{result[0]}"
puts "The total is $#{result[1]}"

# test cases
p tip_calculator(200, 15) #== [30.0, 230.0]
p tip_calculator(100, 15) #== [15.0, 115.0]
p tip_calculator(0, 15) #== [0.0, 0.0]
