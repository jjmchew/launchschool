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

# @@cats_count is a class variable, which is available on all instances of 'Cat' and will have the same value for all instances of `Cat`
# It's being used in the class `Cat` to keep track of how many instances of `Cat` have been created i.e., @@cats_count will increment by 1 for each instance of `Cat` created.

p Cat.cats_count
Cat.new('blue')
Cat.new('green')
p Cat.cats_count