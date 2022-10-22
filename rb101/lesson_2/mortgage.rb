# mortage calculator

# inputs:
  # loan amount
  # APR (ensure same units as duration)
  # loan duration (in months, assuming monthly compounding)

# output:
  # monthly payment

# test cases (see below):
# payment(loan_amount, apr, monthly_duration)

def payment(loan_amount, apr, monthly_duration)
  if apr == 0
    return loan_amount / monthly_duration
  elsif apr > 0
    rate = apr.to_f / 100 / 12
  else 
    rate = apr.to_f / 12
  end
  duration = monthly_duration
  ( loan_amount.to_f * (rate / (1 - (1 + rate)**(-duration))) ).round(2)
end

pass_test = true
pass_test = pass_test && payment(1000,0,20) == 1000 / 20     # => true
pass_test = pass_test && payment(0,5,20) == 0                # => true
pass_test = pass_test && payment(100000, 6, 120) == 1110.21  # => true
pass_test = pass_test && payment(30000, 4.5, 33) == 968.20   # => true

puts "something's not working" unless pass_test 

def integer?(input)
  /^-?\d+$/.match(input)
end

def float?(input)
  /\d/.match(input) && /^-?\d*\.?\d*$/.match(input)  # note \. is an escaped '.' 
end

def prompt(msg)
  puts "===> #{msg} "
end

def errormsg(msg)
  puts "    ** #{msg} **"
end

if pass_test # only run program if calcs are working

  loan_amount = 0.0
  loop do
    prompt "How much money did you borrow?"
    loan_amount = gets.chomp!
    if float? loan_amount
      break
    else
      errormsg "That doesn't seem like a valid amount of money.  Please try again."
    end
  end

  apr = 0.0
  loop do
    prompt "What is your annual interest rate?"
    apr = gets.chomp!
    if float? apr
      break
    else
      errormsg "That doesn't seem like a valid percentage.  Please try again."
    end
  end

  monthly_duration = 0
  loop do
    prompt "What is your total loan duration in *months*?  (we assume you're compounding monthly)"
    monthly_duration = gets.chomp!
    if integer? monthly_duration
      break
    else
      errormsg "That doesn't seem like a valid duration.  Please try again."
    end
  end

  prompt "Your monthly payment is $#{payment loan_amount.to_f, apr.to_f, monthly_duration.to_i} for #{monthly_duration} months."
  prompt "Your combined total payment will be $#{(payment loan_amount.to_f, apr.to_f, monthly_duration.to_i) * monthly_duration.to_i} when complete."

end # end if pass_test

    




