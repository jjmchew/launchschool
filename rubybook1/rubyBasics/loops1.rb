def runawayLoop

  loop do
    puts "Just keep printing..."
    break
  end

end
# runawayLoop

def loopception

  loop do
    puts 'This is the outer loop.'
  
    loop do
      puts 'This is the inner loop.'
      break
    end

    break
  end
  
  puts 'This is outside all loops.'
  
end
# loopception

def control_the_loop
  iterations = 1

  loop do
    puts "Number of iterations = #{iterations}"
    break if iterations == 5
    iterations += 1
  end

end
# control_the_loop

def loop_on_command
  loop do
    puts 'Should I stop looping?'
    answer = gets.chomp
    break if answer == "yes"
  end
end
# loop_on_command

def say_hello
  say_hello = true
  i = 1

  while say_hello
    puts 'Hello!'
    say_hello = false if i == 5
    i += 1
  end
end
# say_hello

def print_while
  numbers = []

  while numbers.length < 5
    tmp = rand(0..99)
    numbers << tmp
    puts tmp
  end
end
# print_while

def count_up
  count = 1

  until count == 11
    puts count
    count += 1
  end
end
# count_up

def print_until
  numbers = [7, 9, 13, 25, 18]
  count = 0
  until count == numbers.length
    puts numbers[count]
    count += 1
  end
end
# print_until

def thats_odd
  for i in 1..100
    puts i if i % 2 != 0
  end
end
# thats_odd

def greet_your_friends
  friends = ['Sarah', 'John', 'Hannah', 'Dave']
  for friend in friends
    puts "Hello, #{friend}!"
  end
end
# greet_your_friends