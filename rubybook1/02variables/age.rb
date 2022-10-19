print "How old are you? "
age = gets.chomp!.to_i

def AgeOut(age,num_add)
  puts "In #{num_add} years you will be:"
  puts age+num_add
end

AgeOut(age,10)
AgeOut(age,20)
AgeOut(age,30)
AgeOut(age,40)