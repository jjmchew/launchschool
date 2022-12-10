class Pet
  attr_accessor :name, :type

  def initialize(type, name)
    self.type = type
    self.name = name
  end

  def to_s
    "a #{self.type} named #{self.name}"
  end
end

class Owner
  attr_reader :name

  def initialize(name)
    @name = name
    @pets = []
  end

  def adopt_pet(pet)
    @pets << pet
  end

  def number_of_pets
    @pets.length
  end
end

class Shelter
  attr_reader :animals

  def initialize
    @adoptions = {}
    @animals = []
  end

  def add_animal(pet)
    @animals << pet
  end

  def adopt(owner, pet)
    owner.adopt_pet(pet)
    @adoptions[owner] == nil ? @adoptions[owner] = [pet] : @adoptions[owner] << pet
  end

  def print_adoptions
    @adoptions.each do |k,v|
      puts "#{k.name} has adopted the following pets:"
      v.each { |pet| puts pet }
      puts
    end
  end

  def print_available
    puts "The Animal Shelter has the following unadopted pets:"
    @animals.each { |animal| puts animal }
  end
end

butterscotch = Pet.new('cat', 'Butterscotch')
pudding      = Pet.new('cat', 'Pudding')
darwin       = Pet.new('bearded dragon', 'Darwin')
kennedy      = Pet.new('dog', 'Kennedy')
sweetie      = Pet.new('parakeet', 'Sweetie Pie')
molly        = Pet.new('dog', 'Molly')
chester      = Pet.new('fish', 'Chester')

asta         = Pet.new('dog', 'Asta')
laddie       = Pet.new('dog', 'Laddie')
fluffy       = Pet.new('cat', 'Fluffy')
kat          = Pet.new('cat', 'Kat')

phanson = Owner.new('P Hanson')
bholmes = Owner.new('B Holmes')

shelter = Shelter.new
shelter.adopt(phanson, butterscotch)
shelter.adopt(phanson, pudding)
shelter.adopt(phanson, darwin)
shelter.adopt(bholmes, molly)
shelter.adopt(bholmes, sweetie)
shelter.adopt(bholmes, kennedy)
shelter.adopt(bholmes, chester)
shelter.print_adoptions

shelter.add_animal(asta)
shelter.add_animal(laddie)
shelter.add_animal(fluffy)
shelter.add_animal(kat)

shelter.print_available

puts "#{phanson.name} has #{phanson.number_of_pets} adopted pets."
puts "#{bholmes.name} has #{bholmes.number_of_pets} adopted pets."
puts "The Animal shelter has #{shelter.animals.length} unadopted pets."
