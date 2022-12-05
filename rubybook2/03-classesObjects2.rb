class GoodDog
  attr_accessor :name, :height, :weight, :age
  @@number_of_dogs = 0

  DOG_YEARS = 7

  def initialize(n, h, w, a)
    # puts "this object was initialized"
    self.name = n
    self.height = h
    self.weight = w
    self.age = a * DOG_YEARS
    @@number_of_dogs += 1
  end

  def speak
    "#{name} says arf!"
  end

  def change_info(n, h, w)
    self.name = n
    self.height = h
    self.weight = w
  end

  def info
    "#{name} weights #{weight} and is #{height} tall."
  end

  def self.what_am_i
    "I'm a GoodDog class!"
  end

  def self.total_number_of_dogs
    @@number_of_dogs
  end

  def to_s
    "This dog's name is #{name} and it is #{age} in dog years."
  end

  def self.what_is_self
    self
  end

end

p GoodDog.total_number_of_dogs
sparky = GoodDog.new('Sparky', '12 inches', '10 lbs', 3)
fido = GoodDog.new('Fido', '8 inches', '8 lbs', 8)


p GoodDog.what_am_i
p sparky.age
p fido.age

p GoodDog.total_number_of_dogs

puts sparky
puts fido

# p sparky.what_is_self

p GoodDog.what_is_self
p GoodDog.name