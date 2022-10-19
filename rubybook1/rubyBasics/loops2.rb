def even_or_odd
  count = 1

  loop do
    puts count.odd? ? "#{count} is odd!" : "#{count} is even!"
    count += 1
    break if count > 5
  end
  
  end
# even_or_odd

def catch_the_number
  loop do
    number = rand(100)
    puts number
    # if number >= 0 && number <= 10
    break if number.between?(0, 10)
    #  break
    # end
  end
  end
# catch_the_number

def conditional_loop
  process_the_loop = [true, false].sample

  while process_the_loop
    puts "The loop was processed"
    break
  end
  unless process_the_loop
    puts "The loop wasn't processed!"
  end
  
  end
# conditional_loop

def get_the_sum
  loop do
    puts 'What does 2 + 2 equal?'
    answer = gets.chomp.to_i
    
    if answer == 4
      puts "That's correct!" 
      break
    else
      puts "Wrong answer.  Try again!"
    end

  end
  end
# get_the_sum

def insert_numbers
  numbers = []

  loop do
    puts 'Enter any number:'
    input = gets.chomp.to_i
    numbers << input
    break if numbers.size == 5
  end
  puts numbers
  end
# insert_numbers

def empty_the_array
  names = ['Sally', 'Joe', 'Lisa', 'Henry']
  # my version:
  # loop do
  #   name = names.shift
  #   break if name == nil
  #   puts name
  # end
  
  # LS version:
  # loop do
  #   puts names.shift
  #   break if names.empty?
  # end

  # print names from last to first version:
    loop do
      puts names.pop
      break if names.empty?
    end
  end
# empty_the_array

def stop_counting
  5.times do |index|
    puts index
    break if index == 2
    # if condition changed to index == 4, will print 5 numbers (0 - 4 incl)
    # if condition changed to index < 7 , will print 7 numbers (0 - 6 incl) : WRONG!
    #   condition index < 7 will break after first iteration (it's less than 7!)
  end

  end
# stop_counting

def only_even
  number = 0

  until number == 10
    number += 1
    next if number.odd?
    puts number 
  end

  end
# only_even

def first_to_five
  number_a = 0
  number_b = 0

  loop do
    number_a += rand(2)
    number_b += rand(2)

    # if number_a != 5 && number_b != 5
    #   next
    # end
    # puts "5 was reached!"
    # break

    if number_a == 5 || number_b == 5
      puts "5 was reached!"
      break
    end

  end

  puts number_a
  puts number_b
  end
# first_to_five

def greeting_exercise
  
  def greeting
    puts 'Hello!'
  end
  
  number_of_greetings = 2

  while number_of_greetings > 0
    greeting
    number_of_greetings -= 1
  end

  end
# greeting_exercise