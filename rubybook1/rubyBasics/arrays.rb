def new_pet

  pets = ['cat', 'dog', 'fish', 'lizard']

  # my_pet = pets.select { |pet| pet == 'fish' }
  my_pet = pets[2]

  puts "I have a pet #{my_pet}!"
  end
# new_pet

def more_than_one
  pets = ['cat', 'dog', 'fish', 'lizard']

  # my_pet = pets.select { |pet| pet == 'fish' || pet =='lizard' }
  my_pet = pets[2..3]
  p my_pet

  puts "I have a pet #{my_pet[0]} and a pet #{my_pet[1]}!"

  end
# more_than_one

def free_the_lizard
  pets = ['cat', 'dog', 'fish', 'lizard']
  my_pets = pets[2..3]

  my_pets.delete("lizard")
  p my_pets

  first = true
  loop do
    print "I have a pet " + my_pets.shift if first
    first = false
    if my_pets.empty? == false && first == false
      print " and a pet " + my_pets.shift
    end
    break if my_pets.empty?
  end
  print "!"
  puts

  end
# free_the_lizard

def one_isnt_enough
  
  pets = ['cat', 'dog', 'fish', 'lizard']
  my_pets = pets[2..3]
  my_pets.pop
  my_pets.push(pets[1])

  p my_pets # too lazy to do string interpolation on output

  end
# one_isnt_enough

def what_color_are_you
  colors = ['red', 'yellow', 'purple', 'green']
  colors.each { |c| puts "I'm the color #{c}!" }

  end
# what_color_are_you

def doubled
  numbers = [1, 2, 3, 4, 5]
  doubled_numbers = numbers.map { |n| n*2 }

  p doubled_numbers
  end
# doubled

def divisible_by_3
  numbers = [5, 9, 21, 26, 39]
  divisible_by_three = numbers.select { |n| n % 3 == 0 }

  p divisible_by_three
  end
# divisible_by_3

def favorite_number_1
  # old 
  ['Dave', 7, 'Miranda', 3, 'Jason', 11]

  # new
  [ ['Dave', 7], ['Miranda', 3], ['Jason', 11] ]

  end

def favorite_number_2
  favorites = [['Dave', 7], ['Miranda', 3], ['Jason', 11]]

  favorites.flatten!
  p favorites
  end
# favorite_number_2

def are_we_the_same
  array1 = [1, 5, 9]
  array2 = [1, 9, 5]

  p array1 == array2
  end
# are_we_the_same
