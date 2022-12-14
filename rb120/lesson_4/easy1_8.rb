class Cat
  @@cats_count = 0

  def initialize(type)
    @type = type
    @age  = 0
    @@cats_count += 1
  end

  def self.cats_count
    @@cats_count
  end
end

# `self` refers to the class itself.  When used in this way, it identies the method `cats_count` as a class method, which is called on the class `Cat`.