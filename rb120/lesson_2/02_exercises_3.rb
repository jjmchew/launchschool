class Person
  attr_reader :name
  attr_accessor :first_name, :last_name

  def initialize(input)
    self.name = (input)
  end

  def name=(input)
    if input.include?(" ")
      self.first_name, self.last_name = input.split(" ")
    else
      self.first_name = input
      self.last_name = ""
    end
    assign_name
  end

  def first_name=(first_name)
    @first_name = first_name
    assign_name if self.last_name != nil
  end
  
  def last_name=(last_name)
    @last_name = last_name
    assign_name
  end

  def assign_name
    @name = self.last_name == "" ? self.first_name : self.first_name + " " + self.last_name
  end

end


bob = Person.new('Robert')

p bob.name                  # => 'Robert'
p bob.first_name            # => 'Robert'
p bob.last_name             # => ''
bob.last_name = 'Smith'
p bob.name                  # => 'Robert Smith'

bob.name = "John Adams"
p bob.first_name            # => 'John'
p bob.last_name             # => 'Adams'