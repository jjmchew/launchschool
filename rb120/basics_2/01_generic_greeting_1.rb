class Cat
  def self.generic_greeting
    puts "Hello! I'm a cat!"
  end
end

Cat.generic_greeting
kitty = Cat.new
kitty.class.generic_greeting
# works on same principles as method chaining - kitty.class returns a class, 'Cat' on which we can invoke the generic_greeting method