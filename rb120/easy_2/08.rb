module Walkable
  def walk
    "#{name} #{gait} forward"
  end
end

class Creature
  include Walkable
  attr_reader :name

  def initialize(name)
    @name = name
  end
end

class Person < Creature
  private
  def gait
    "strolls"
  end
end

class Cat < Creature
  private
  def gait
    "saunters"
  end
end

class Cheetah < Creature
  private
  def gait
    "runs"
  end
end


mike = Person.new("Mike")
p mike.walk
# => "Mike strolls forward"

kitty = Cat.new("Kitty")
p kitty.walk
# => "Kitty saunters forward"

flash = Cheetah.new("Flash")
p flash.walk
# => "Flash runs forward"