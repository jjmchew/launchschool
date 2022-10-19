def fibonacci(number)
  if number < 2
    number
  else
    result = fibonacci(number -1) + fibonacci(number-2)
    puts "fibonacci(#{number}) : #{result}"
    result
  end
end

puts fibonacci(6)

