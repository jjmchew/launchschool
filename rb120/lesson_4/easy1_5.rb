class Fruit
  def initialize(name)
    name = name
  end
end

class Pizza
  def initialize(name)
    @name = name
  end
end

# only the class 'Pizza' has an instance variable : it's denoted by the `@` prepending the variable name (@name).
# can also call the `#instance_variables` method on an instance of the class to list all instance variables

puts Pizza.new("hot")