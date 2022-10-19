def repeat_after_me
  
  loop do
    puts ">> Type anything you want: "
    input = gets.chomp!
    puts input
  end

  end
# repeat_after_me

def your_age_in_months
  puts ">> What is your age in years? "
  yrs = gets.chomp!.to_i
  puts "You are #{yrs * 12} months old."
  end
# your_age_in_months

def print_something_1
  puts ">> Do you want me to print something? (y/n)"
  ans = gets.chomp.downcase
  puts "something" if ans == "y" 
  end
# print_something_1

def print_something_2
  # my solution:
  # loop do
  #   puts ">> Do you want me to print something? (y/n)"
  #   ans = gets.chomp!.downcase
  #   if ans == "y" 
  #     puts "something"
  #     break
  #   elsif ans == "n"
  #     break
  #   else
  #     puts "Invalid input!  Please enter y or n"
  #   end
  # end

  # LS solution:
  ans = nil
  loop do
    puts ">> Do you want me to print something? (y/n)"
    ans = gets.chomp!.downcase
    break if %w(y n).include?(ans)
    puts "Invalid input!  Please enter y or n"
  end
  puts "something" if ans == 'y'

  end
# print_something_2

def launch_school_printer_1
  input = nil
  
  loop do
    puts ">> How many output lines do you want?  Enter a number >= 3: "
    input = gets.chomp!.to_i
    break if input >= 3
    puts ">> That's not enough lines."
  end

  input.times { puts "Launch School is the best!"}
  end
# launch_school_printer_1

USERNAME = "James"
PW = "secretPw"

def passwords
   
  loop do
    puts ">> Please enter your password:"
    input = gets.chomp!
    break if input == PW
    puts ">> Invalid password!"
  end

  puts ">> Welcome!"
  end
# passwords

def user_name_and_password

  loop do
    puts ">> Please enter user name:"
    input_username = gets.chomp!
    puts ">> Please enter your password:"
    input_pw = gets.chomp!
    break if input_pw == PW && input_username == USERNAME
    puts ">> Authorization failed!"
  end

  puts ">> Welcome!"

  end
# user_name_and_password

def dividing_numbers

  def valid_number?(number_string)
    number_string.to_i.to_s == number_string
  end

  numer= nil
  denom = nil

  loop do
    puts ">> Please enter the numerator:"
    numer = gets.chomp!
    break if valid_number?(numer)
    puts ">> Invalid input.  Only integers are allowed."
  end

  loop do
    puts ">> Please enter the denominator:"
    denom = gets.chomp!
    break if valid_number?(denom) && denom.to_i != 0
    if denom.to_i == 0
      puts ">> Invalid input.  A denominator of 0 is not allowed."
    else
      puts ">> Invalid input.  Only integers are allowed."
    end
  end

  ans = numer.to_i.divmod(denom.to_i)
  puts "#{numer} / #{denom} is #{ans[0]}"
  puts "the remainder is #{ans[1]}" if ans[1] != 0

  end
# dividing_numbers

def launch_school_printer_2

  input = nil
  
  loop do
    loop do
      puts ">> How many output lines do you want?  Enter a number >= 3 (Q to quit) "
      input = gets.chomp!
      break if input.to_i >= 3 || input.downcase == 'q'
      puts ">> That's not enough lines."
    end

    break if input.downcase == 'q'
    input.to_i.times { puts "Launch School is the best!"}
  end


  end
# launch_school_printer_2

def opposites_attract

  def valid_number?(number_string)
    number_string.to_i.to_s == number_string && number_string.to_i != 0
  end

  def get_integer
    # ans = nil
    loop do
      puts ">> Please enter a positive or negative integer: "
      ans = gets.chomp!
      # break if valid_number?(ans)
      return ans.to_i if valid_number?(ans)
      puts ">> Invalid input.  Only non-zero integers are allowed."
    end
    # return ans.to_i
  end

  num_1 = nil
  num_2 = nil
  
  loop do
    num_1 = get_integer
    num_2 = get_integer
    break if num_1 * num_2 < 0
    puts "   >> Sorry.  One integer must be positive, one must be negative."
    puts "   >> Please start over."
  end

  puts ">> #{num_1} + #{num_2} = #{num_1 + num_2}"

  end
# opposites_attract