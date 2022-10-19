def breakfast_lunch_or_dinner_1
  def meal
    return 'Breakfast'
  end
  
  puts meal
  # predict 'Breakfast'

  # RIGHT
  end
# breakfast_lunch_or_dinner_1

def breakfast_lunch_or_dinner_2
  def meal
    'Evening'
  end
  
  puts meal
  # predict 'Evening'

  # RIGHT
  end
# breakfast_lunch_or_dinner_2

def breakfast_lunch_or_dinner_3
  def meal
    return 'Breakfast'
    'Dinner'
  end
  
  puts meal
  # predict 'Breakfast'

  # RIGHT
  end
# breakfast_lunch_or_dinner_3

def breakfast_lunch_or_dinner_4
  def meal
    puts 'Dinner'
    return 'Breakfast'
  end
  
  puts meal
  # predict:
  # 'Dinner'
  # 'Breakfast'
  
  # RIGHT
  end
# breakfast_lunch_or_dinner_4

def breakfast_lunch_or_dinner_5
  def meal
    'Dinner'
    puts 'Dinner'
  end
  
  p meal
  # predict:
  # 'Dinner'
  # WRONG - forgot that "p" will show "nil"

  end
# breakfast_lunch_or_dinner_5

def breakfast_lunch_or_dinner_6
  def meal
    return 'Breakfast'
    'Dinner'
    puts 'Dinner'
  end
  
  puts meal
  # predict:
  # 'Breakfast'
  
  # RIGHT
  end
# breakfast_lunch_or_dinner_6

def counting_sheep_1
  def count_sheep
    5.times do |sheep|
      puts sheep
    end
  end
  
  puts count_sheep
  
  # predict:
  # 1
  # 2
  # 3
  # 4
  # 5
  
  # WRONG - numbers start at 0!  
  # Also NOTE:  #times will return the initial integer so final puts count_sheep also return a number!
  
  end
# counting_sheep_1

def counting_sheep_2
  def count_sheep
    5.times do |sheep|
      puts sheep
    end
    10
  end
  
  puts count_sheep
  
  # predict:
  # 0
  # 1
  # 2
  # 3
  # 4
  # 10

  # RIGHT
  end
# counting_sheep_2

def counting_sheep_3
  def count_sheep
    5.times do |sheep|
      puts sheep
      if sheep >= 2
        return
      end
    end
  end
  
  p count_sheep
  
  # predict:
  # 0
  # 1
  # 2
  # nil
  
  # RIGHT
  end
# counting_sheep_3

def tricky_number

  def tricky_number
    if true
      number = 1
    else
      2
    end
  end
  
  puts tricky_number

  # predict: 1

  end
# tricky_number