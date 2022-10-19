def create_a_string
  var = String.new()
  p var

  end
# create_a_string

def quote_confusion
  puts "It\"s now 12 o\"clock."
  end
# quote_confusion

def ignoring_case
  name = 'Roger'

  # p name.downcase == 'RoGeR'.downcase
  # p name.downcase == 'DAVE'.downcase

  puts name.casecmp('RoGeR') == 0
  puts name.casecmp('DAVE') == 0
  end
# ignoring_case

def dynamic_string
  name = 'Elizabeth'

  puts "Hello, #{name}!"
  end
# dynamic_string

def combining_names
  first_name = 'John'
  last_name = 'Doe'

  full_name = "#{first_name} #{last_name}"
  puts full_name

  end
# combining_names

def tricky_formatting
  state = 'tExAs'
  puts state.capitalize!

  p state
  end
# tricky_formatting

def goodbye_not_hello
  greeting = 'Hello!'
  greeting.gsub!('Hello!',"Goodbye!")
  puts greeting

  end
# goodbye_not_hello

def print_the_alphabet
  alphabet = 'abcdefghijklmnopqrstuvwxyz'
  chars = alphabet.split(//)

  chars.each { |ch| puts ch }
  end
# print_the_alphabet

def pluralize
  words = 'car human elephant airplane'

  words_ar = words.split(' ')
  words_ar.each { |wd| puts wd<<"s" }

  end
# pluralize

def are_you_there
  colors = 'blue pink yellow orange boredom'

  puts colors.include? "yellow"
  puts colors.include? "purple"
  puts colors.include? "red"

  end
# are_you_there