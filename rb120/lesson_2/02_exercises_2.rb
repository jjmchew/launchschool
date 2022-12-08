class Person
  attr_reader :name
  attr_reader :last_name, :first_name


  def initialize(first_name, last_name="")
    @name = last_name == "" ? first_name : first_name + " " + last_name
    @first_name = first_name
    self.last_name = last_name
  end

  def last_name=(last_name)
    @last_name = last_name
    @name = last_name == "" ? self.first_name : self.first_name + " " + last_name
  end

end


bob = Person.new('Robert')
p bob.name                  # => 'Robert'
p bob.first_name            # => 'Robert'
p bob.last_name             # => ''
bob.last_name = 'Smith'
p bob.name                  # => 'Robert Smith'