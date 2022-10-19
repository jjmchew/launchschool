def factorial(num)
  result = 1
  for i in 1..num
    result *= i
  end
  return result
end

puts "5! = #{factorial(5)}"
puts "6! = #{factorial(6)}"
puts "7! = #{factorial(7)}"
puts "8! = #{factorial(8)}"