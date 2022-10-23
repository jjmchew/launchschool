def q1
  # 10.times do |i|
  #   i.times do |_|
  #     print ' '
  #   end
  #   print "The Flintstones Rock!"
  #   puts
  # end
  # worked, but long
  10.times { |i| puts (" " * i) + "The Flintstones Rock!" }
end
# q1

def q2
  puts "the value of 40 + 2 is " + (40 + 2).to_s
  puts "the value of 40 + 2 is #{40 + 2}"
end
# q2

def q3
  def factors(number)
    divisor = number
    factors = []
    # begin
    while divisor > 0
      factors << number / divisor if number % divisor == 0  
      # number % divisor == 0 ensure no remainder of number / divisor (i.e. ensure number / divisor is a factor)
      divisor -= 1
    end # until divisor == 0
    factors  # to ensure the method returns the array of factors
  end
  p factors(0)
  p factors(-1)
  p factors(3)
  p factors(15)
end
# q3

def q4
  def rolling_buffer1(buffer, max_buffer_size, new_element)
    buffer << new_element # << is 'destructive' - adds new_element to buffer, modifying buffer (the caller)
    buffer.shift if buffer.size > max_buffer_size
    buffer
  end
  
  def rolling_buffer2(input_array, max_buffer_size, new_element)
    buffer = input_array + [new_element] # + requires re_assignment to buffer, won't change 'input_array'
    buffer.shift if buffer.size > max_buffer_size
    buffer
  end

end

def q5

  limit = 15

  def fib(first_num, second_num, limit)
    while first_num + second_num < limit 
      sum = first_num + second_num
      first_num = second_num
      second_num = sum
    end
    sum
  end

  result = fib(0, 1, limit) #need to add argument here
  puts "result is #{result}"

  # limit needs to be passed into method fib (otherwise, not accessible)

end
# q5

def q6

  answer = 42

  def mess_with_it(some_number)
    some_number += 8
  end

  new_answer = mess_with_it(answer)

  p answer - 8

  # 34
end
# q6

def q7
  
  munsters = {
    "Herman" => { "age" => 32, "gender" => "male" },
    "Lily" => { "age" => 30, "gender" => "female" },
    "Grandpa" => { "age" => 402, "gender" => "male" },
    "Eddie" => { "age" => 10, "gender" => "male" },
    "Marilyn" => { "age" => 23, "gender" => "female"}
  }

  def mess_with_demographics(demo_hash)
    demo_hash.values.each do |family_member|
      family_member["age"] += 42
      family_member["gender"] = "other"
    end
  end

  mess_with_demographics(munsters)

  p munsters

  # predict:  yes - assignment by key will alter original hash (destructive - def gets passed reference to existing hash)
end
# q7

def q8
  
  def rps(fist1, fist2)
    if fist1 == "rock"
      (fist2 == "paper") ? "paper" : "rock"
    elsif fist1 == "paper"
      (fist2 == "scissors") ? "scissors" : "paper"
    else
      (fist2 == "rock") ? "rock" : "scissors"
    end
  end

  puts rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock")
  
  # puts rps(rps("paper", "rock"), "rock")
  # puts rps("paper", "rock")
  # "paper" is final output

end
# q8

def q9

  def foo(param = "no")
    "yes"
  end
  
  def bar(param = "no")
    param == "no" ? "yes" : "no"
  end

  p bar(foo)
  # bar("yes")
  # "no"
  
end
q9



