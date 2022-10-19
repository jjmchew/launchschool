def unpredictable_weather_1

  sun = ['visible', 'hidden'].sample

  puts "The sun is so bright!" if sun == 'visible'  

  end
# unpredictable_weather_1

def unpredictable_weather_2

  sun = ['visible', 'hidden'].sample

  puts sun
  puts "The clouds are blocking the sun!" unless sun == 'visible'  

  end
# unpredictable_weather_2

def unpredictable_weather_3

  sun = ['visible', 'hidden'].sample

  puts sun
  puts "The sun is so bright!" if sun == 'visible'  
  puts "The clouds are blocking the sun!" unless sun == 'visible'  

  end
# unpredictable_weather_3

def true_or_false
  boolean = [true, false].sample
  p boolean
  # puts boolean ? "I'm true" : "I'm false"
  boolean ? puts("I'm true") : puts("I'm false")
  end
# true_or_false

def truthy_number
  number = 7

  if number
    puts "My favorite number is #{number}."
  else
    puts "I don't have a favorite number."
  end

  # predict: "My favorite number is 7."
  # RIGHT
  end
# truthy_number

def stoplight_1

  stoplight = ['green', 'yellow', 'red'].sample

  p stoplight

  case stoplight
  when 'green' then puts "Go!"
  when 'yellow' then puts "Slow down!"
  when 'red' then puts "Stop!"
  end


  end
# stoplight_1

def stoplight_2

  stoplight = ['green', 'yellow', 'red'].sample

  p stoplight

  if stoplight == 'green' then puts "Go!"
  elsif stoplight == 'yellow' then puts "Slow down!"
  elsif stoplight =='red' then puts "Stop!"
  end


  end
# stoplight_2

def sleep_alert

  status = ['awake', 'tired'].sample
  p status

  msg =
  if status == 'awake'
    'Be productive!'
  else
    'Go to sleep!'
  end

  puts msg

  end
# sleep_alert

def cool_numbers

  number = rand(10)
  p number

  if number == 5
    puts '5 is a cool number!'
  else
    puts 'Other numbers are cool too!'
  end

  end
# cool_numbers

def stoplight_3
  # see stoplight_1
  end
# stoplight_3

