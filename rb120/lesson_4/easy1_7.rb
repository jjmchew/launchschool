class Cat
  attr_accessor :type, :age

  def initialize(type)
    @type = type
    @age  = 0
  end

  def make_one_year_older
    self.age += 1
  end
end

# `self` refers to the calling object - which would be an instance of class `Cat`. Hence, `self.age` would refer to the instance variable `@age`, accessed via the standard getter method associated with `attr_accessor` for `:age`.
