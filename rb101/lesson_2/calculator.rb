# ask user for 2 numbers
# ask user for operation to perform
# perform the operation on the 2 numbers
# output the result

# answer = Kernel.gets()
# Kernel.puts(answer)

Kernel.puts("Welcome to calculator!")

Kernel.puts("What's the first number?")
num1 = Kernel.gets().chomp()
Kernel.puts("the number is : " + num1 + "!")

Kernel.puts("What's the second number?")
num2 = Kernel.gets().chomp()
Kernel.puts("the number is : " + num2 + "!")

Kernel.puts("What operation would you like to perform?  1) add 2) subtract 3) multiply 4) divide")
operator = Kernel.gets().chomp()

if operator == '1'
  result = num1.to_i() + num2.to_i()
elsif operator == '2'
  result = num1.to_i() - num2.to_i()
elsif operator == '3'
  result = num1.to_i() * num2.to_i()
elsif operator == '4'
  result = num1.to_f() / num2.to_f()
end

Kernel.puts("The result is #{result}")