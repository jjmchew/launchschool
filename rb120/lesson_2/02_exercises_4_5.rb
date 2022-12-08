class Person
  attr_accessor :first_name, :last_name

  def initialize(name)
    parse_names(name)
  end

  def name
    (self.first_name + " " + self.last_name).strip
  end

  def name=(name)
    parse_names(name)
  end

  def to_s
    name
  end

  private
  def parse_names(name)
    parts = name.split(" ")
    self.first_name = parts.first
    self.last_name = parts.length > 1 ? parts.last : ""
  end

end



bob = Person.new('Robert Smith')
rob = Person.new('Robert Smith')

p bob.object_id
p rob.object_id
p bob.name == rob.name

str1 = 'hello world'
str2 = 'hello world'

p str1.object_id
p str2.object_id
p str1 == str2

puts "The person's name is: #{bob}"