=begin

9:45 - 9:55 : 10 minutes

input
  - num1:  starting number
  - num2:  ending number
output
  - a string : all 1 line
             : numbers
             : words:  Fizz, Buzz, FizzBuzz

constraints / assumptions:
  - don't output numbers divisible by 3 : output 'Fizz'
  - don't output numbers divisible by 5 : output 'Buzz'
  - don't output numbers divisible by 15 : output 'FizzBuzz'
  - don't worry about input validation - assume num1 < num2, both are integers, both positive
  - note:  no comma after last output, but commas between each output

algorithm
  - create a loop from num1 to num2,  iterate across each number ('num')
      - if num divides by 15 evenly (i.e., no remainder) then output 'FizzBuzz'
      - otherwise, if num divides by 3 evenly (i.e,. no remainder) then output 'Fizz'
      - otherwise, if num divides by 5 evenly (i.e., no remainder) then output 'Buzz'
      - otherwise, output num


Debrief notes:
  - **need to remember correct syntax for `case`** :  don't add a 'var' after keyword `case` if using conditionals
  - if / elsif might be clearer & more compact

=end

def output_num(num)
  case
  when num % 15 == 0 
    print 'FizzBuzz'
  when num % 3 == 0 
    print 'Fizz'
  when num % 5 == 0  
    print 'Buzz'
  else 
    print num
  end
end

def fizzbuzz(num1, num2)
  num1.upto(num2) do |num|
    output_num(num)
    print ', ' if num != num2
  end
  puts
end


fizzbuzz(1, 15) # -> 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz