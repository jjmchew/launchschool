def reading_error_messages

  def find_first_nonzero_among(numbers)
    numbers.each do |n|
      return n if n.nonzero?
    end
  end
  
  # Examples
  
  find_first_nonzero_among(0, 0, 1, 0, 2, 0)
  find_first_nonzero_among(1)

  # predict arguments passed aren't arrays "ArgumentError"
  # also 'NoMethodError' - can't run .each on integer
end
# reading_error_messages

def weather_forecast
  def predict_weather
    sunshine = ['true', 'false'].sample  # LS solution changes strings to boolean
  
    if sunshine == 'true'  # my solution
      puts "Today's weather will be sunny!"
    else
      puts "Today's weather will be cloudy!"
    end
  end

  predict_weather
  end
# weather_forecast

def multiply_by_5

  def multiply_by_five(n)
    n * 5
  end
  
  puts "Hello! Which number would you like to multiply by 5?"
  number = gets.chomp.to_i
  
  puts "The result is #{multiply_by_five(number)}!"

  # typeError : number needs to be an integer
end
# multiply_by_5

def pets

  pets = { cat: 'fluffy', dog: ['sparky', 'fido'], fish: 'oscar' }

  pets[:dog] << 'bowser'

  p pets 

  end
# pets

def even_numbers

  numbers = [5, 2, 9, 6, 3, 1, 8]

  even_numbers = numbers.select do |n|
    n.even?
  end

  p even_numbers # expected output: [2, 6, 8]

  end
# even_numbers

def confucius_says

  def get_quote(person)
    if person == 'Yoda'
      return 'Do. Or do not. There is no try.'
    end
  
    if person == 'Confucius'
      return 'I hear and I forget. I see and I remember. I do and I understand.'
    end
  
    if person == 'Einstein'
      return 'Do not worry about your difficulties in Mathematics. I can assure you mine are still greater.'
    end
  end
  
  puts 'Confucius says:'
  puts '"' + get_quote('Confucius') + '"'

  # get_quote returns nil (if statement only returns string when true, but Einstein is last), not a string
  end
# confucius_says

def account_balance

  # Financially, you started the year with a clean slate.

  balance = 0

  # Here's what you earned and spent during the first three months.

  january = {
    income: [ 1200, 75 ],
    expenses: [ 650, 140, 33.2, 100, 26.9, 78 ]
  }

  february = {
    income: [ 1200 ],
    expenses: [ 650, 140, 320, 46.7, 122.5 ]
  }

  march = {
    income: [ 1200, 10, 75 ],
    expenses: [ 650, 140, 350, 12, 59.9, 2.5 ]
  }

  # Let's see how much you've got now...

  def calculate_balance(month)
    plus  = month[:income].sum
    minus = month[:expenses].sum

    plus - minus
  end

  [january, february, march].each do |month|
    balance += calculate_balance(month)  # balance was being reassigned instead of carried over each month
  end

  puts balance


  end
# account_balance

def colorful_things

  colors = ['red', 'yellow', 'purple', 'green', 'dark blue', 'turquoise', 'silver', 'black']
  things = ['pen', 'mouse pad', 'coffee mug', 'sofa', 'surf board', 'training mat', 'notebook']

  colors.shuffle!
  things.shuffle!

  i = 0
  loop do
    break if i == things.length # things is fewer elements than colors, can't use > length (0 based indexes)

    if i == 0
      puts 'I have a ' + colors[i] + ' ' + things[i] + '.'
    else
      puts 'And a ' + colors[i] + ' ' + things[i] + '.'
    end

    i += 1
  end

  end
# colorful_things

def digit_product

  def digit_product(str_num)
    digits = str_num.chars.map { |n| n.to_i }
    product = 1  # can't start w/ zero - anything times zero is zero

    digits.each do |digit|
      product *= digit
    end
  
    product
  end
  
  
  p digit_product('12345')
  # expected return value: 120
  # actual return value: 0

  end
# digit_product

def warriors_and_wizards
  # Each player starts with the same basic stats.

  player = { strength: 10, dexterity: 10, charisma: 10, stamina: 10 }

  # Then the player picks a character class and gets an upgrade accordingly.

  character_classes = {
    warrior: { strength:  20 },
    thief:   { dexterity: 20 },
    scout:   { stamina:   20 },
    mage:    { charisma:  20 }
  }

  input = nil
  loop do
    puts 'Please type your class (warrior, thief, scout, mage):'
    input = gets.chomp!.downcase
    break if %w(warrior thief scout mage).include?(input)
    puts ' >> please choose from available options'
  end

  # need to use symbol, not string to access hash; also needed destructive version of merge
  player.merge!(character_classes[input.to_sym]) 

  puts 'Your character stats:'
  puts player

  end
# warriors_and_wizards