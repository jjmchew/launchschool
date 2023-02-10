module Walkable
  def walk
    "I'm walking."
  end
end

module Swimmable
  def swim
    "I'm swimming."
  end
end

module Climbable
  def climb
    "I'm climbing."
  end
end

module Danceable
  def dance
    "I'm dancing."
  end
end

module GoodAnimals
  include Climbable

  class GoodDog < Animal
    include Swimmable
    include Danceable
  end
  
  class GoodCat < Animal; end
end

class Animal
  include Walkable

  def speak
    "I'm an animal, and I speak!"
  end
end



good_dog = GoodAnimals::GoodDog.new
p good_dog.walk

p good_dog.class.ancestors
# GoodAnimals::GoodDog, Danceable, Swimmable, Animal, Walkable, Object, Kernel, BasicObject

