def decrease(counter)
  counter -= 1
end

counter = 10

counter.times do
  puts counter
  counter = decrease(counter)
end

puts 'LAUNCH!'

=begin
The method `decrease` will calculate a decremented counter, but that returned value isn't being used (within the method `decrease` there is a method variable `counter` which is distinct from the `counter` local variable in the outer / main scope.)

=end
