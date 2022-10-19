def print_me_1

  def print_me
    puts "I'm printing within the method!"
  end

  print_me

  end
# print_me_1

def print_me_2

  def print_me
    "I'm printing within the method!"
  end

  puts print_me

  end
# print_me_2

def greeting_through_methods_1
  def hello
    "Hello"
  end

  def world
    "World"
  end

  puts hello + " " + world

  end
# greeting_through_methods_1

def greeting_through_methods_2
  def hello
    'Hello'
  end
  
  def world
    'World'
  end

  def greet
    hello + " " + world
  end

  puts greet
  end
# greeting_through_methods_2

def make_and_model
  def car(s1, s2)
    puts s1 + " " + s2
  end

  car("Toyota","Corolla")

  end
# make_and_model

def day_or_night
  daylight = [true, false].sample

  def time_of_day(daylight)
    if daylight then puts "It's daytime!"
    else puts "It's nighttime!"
    end
  end

  time_of_day(daylight)

  end
# day_or_night

def naming_animals

  def dog(name)
    return name
  end
  
  def cat(name)
    return name
  end
  
  puts "The dog's name is #{dog('Spot')}."
  puts "The cat's name is #{cat('Ginger')}."


  end
# naming_animals

def name_not_found

  def assign_name(name = "Bob")
    name
  end

  puts assign_name('Kevin') == 'Kevin'
  puts assign_name == 'Bob'

  end
# name_not_found

def multiply_the_sum

  def add(n1, n2)
    n1 + n2
  end

  def multiply(n1,n2)
    n1 * n2
  end

  puts add(2, 2) == 4
  puts add(5, 4) == 9
  puts multiply(add(2, 2), add(5, 4)) == 36

  end
# multiply_the_sum

def random_sentence

  names = ['Dave', 'Sally', 'George', 'Jessica']
  activities = ['walking', 'running', 'cycling']

  def name(names)
    # names[rand(names.size)]
    names.sample
  end

  def activity(activities)
    # activities[rand(activities.size)]
    activities.sample
  end

  def sentence (n, a)
    n + " went " + a + " today!"
  end

  puts sentence(name(names), activity(activities))

  end
# random_sentence