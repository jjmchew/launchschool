# class Animal
#   attr_accessor :name

#   def initialize(name)
#     @name = name
#   end

#   def speak
#     "hello!"
#   end
# end

# class GoodDog < Animal
#   def initialize(colour, name)
#     super(name)
#     @colour = colour
#   end

#   def speak
#     super + " I eat meat"
#   end
# end

# class GoodCat < Animal
# end

# p sparky = GoodDog.new("brown", "sparky")
# # tabby = GoodCat.new

# # p sparky.speak
# # p tabby.speak

module Swimmable
  def swim
    "I'm swimming"
  end
end

class Animal; end

class Fish < Animal
  include Swimmable
end

class Mammal < Animal
end

class Cat < Mammal
end

class Dog < Mammal
  include Swimmable
end

sparky = Dog.new
nemo = Fish.new
tabby = Cat.new

p sparky.swim
p nemo.swim
p tabby.swim