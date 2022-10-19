

print "enter a 4 digit number: "
num = gets.chomp!.to_i

puts num

d_1000 = num.divmod(1000)[0]
new_num = num.divmod(1000)[1]

d_100 = new_num.divmod(100)[0]
new_num = new_num.divmod(100)[1]

d_10 = new_num.divmod(10)[0]
d_1 = new_num.divmod(10)[1]

puts "thousands digit: #{d_1000}"
puts " hundreds digit: #{d_100}"
puts "     tens digit: #{d_10}"
puts "     ones digit: #{d_1}"