class Pet
  attr_reader :name

  def initialize(name)
    @name = name.to_s
  end

  def to_s
    # @name.upcase!
    "My name is #{@name.upcase}."
  end
end

# Problem
# name = 'Fluffy'
# fluffy = Pet.new(name)
# puts fluffy.name
# puts fluffy
# puts fluffy.name
# puts name

# Further exploration
name = 42
fluffy = Pet.new(name)
name += 1
puts fluffy.name
puts fluffy
puts fluffy.name
puts name

# when the integer object referenced by `name` is converted to a string object and assigned to the instance variable `@name` it points to a different location in memory (it's a totally different type of object than the integer object referenced by `name`). Thus, the re-assignment to `name` which occurs when incrementing it by `1` does not impact the instance variable `@name` which remains unchanged from it's initial value of `"42"`.
