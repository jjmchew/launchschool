module Walkable
  def walk
    "#{walk_name} #{gait} forward"
  end
end

class Noble
  include Walkable
  attr_accessor :name, :title

  def initialize(name, title)
    self.name = name
    self.title = title
  end

  private
  def gait
    "struts"
  end

  protected
  def walk_name
    "#{title} #{name}"
  end
end

class Creature
  include Walkable
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def walk_name
    @name
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

byron = Noble.new("Byron", "Lord")
p byron.walk
# => "Lord Byron struts forward"

p byron.name
p byron.title


mike = Person.new("Mike")
p mike.walk
# => "Mike strolls forward"

kitty = Cat.new("Kitty")
p kitty.walk
# => "Kitty saunters forward"

flash = Cheetah.new("Flash")
p flash.walk
# => "Flash runs forward"