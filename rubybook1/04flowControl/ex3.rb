print "enter a number (between 0 and 100): "
num = gets.chomp!.to_i

# case
# when num >= 0 && num <=50 then puts "number is between 0 and 50"
# when num > 50 && num <=100 then puts "number is between 51 and 100"
# when num > 100 then puts "number is greater than 100"
# else puts "number is less than 0"
# end

case
when num < 0 then puts "number is less than 0"
when num <=50 then puts "number is between 0 and 50"
when num <=100 then puts "number is between 51 and 100"
else puts "number is greater than 100"
end
