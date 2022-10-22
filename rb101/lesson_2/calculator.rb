# ask user for 2 numbers
# ask user for operation to perform
# perform the operation on the 2 numbers
# output the result

# answer = Kernel.gets()
# Kernel.puts(answer)

require 'yaml'
MESSAGES = YAML.load_file('calculator_messages.yml')
# puts MESSAGES.inspect  # => returns a hash
LANGUAGE = 'hood'

def messages(message, lang='en')
  MESSAGES[lang][message]
end

def prompt(key)
  if MESSAGES[LANGUAGE].key? key
    message = messages(key,LANGUAGE)
  else
    message = key
  end
  Kernel.puts("=> #{message}")
end

def valid_number?(num)
  # num.to_i() != 0
  # num.to_i.to_s == num  # my slightly updated version
  /^-?\d+$/.match(num)  # regex version
end

def operation_to_message(op)
  case op
  when '1' then 'Adding'
  when '2' then 'Subtracting'
  when '3' then 'Multiplying'
  when '4' then 'Dividing'
  end
end

prompt('welcome')
name = ''
loop do
  name = Kernel.gets().chomp()

  if name.empty?()
    prompt('valid_name')
  else
    break
  end
end

prompt("Hi #{name}!")

loop do # main loop
  num1 = ''
  loop do
    prompt('first_num')
    num1 = Kernel.gets().chomp()
    if valid_number?(num1)
      break
    else
      prompt('invalid_num')
    end
  end

  num2 = ''
  loop do
    prompt('second_num')
    num2 = Kernel.gets().chomp()
    if valid_number?(num2)
      break
    else
      prompt('invalid_num')
    end
  end

  operator_prompt = <<-MSG
    What operation would you like to perform?  
    1) add 
    2) subtract 
    3) multiply 
    4) divide
  MSG
  prompt(operator_prompt)

  operator = ''
  loop do
    operator = Kernel.gets().chomp()

    if %w(1 2 3 4).include?(operator)
      break
    else
      prompt('must_choose')
    end
  end

  prompt("#{operation_to_message(operator)} the two numbers ...")

  # if operator == '1'
  #   result = num1.to_i() + num2.to_i()
  # elsif operator == '2'
  #   result = num1.to_i() - num2.to_i()
  # elsif operator == '3'
  #   result = num1.to_i() * num2.to_i()
  # elsif operator == '4'
  #   result = num1.to_f() / num2.to_f()
  # end

  result = case operator
           when '1'
             num1.to_i() + num2.to_i()
           when '2'
             num1.to_i() - num2.to_i()
           when '3'
             num1.to_i() * num2.to_i()
           when '4'
             num1.to_f() / num2.to_f()
           end

  prompt("The result is #{result}")

  prompt('another_calc')
  answer = Kernel.gets().chomp()
  break unless answer.downcase().start_with?('y')
end

prompt('thank_you')
