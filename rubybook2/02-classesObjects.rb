class GoodDog
  attr_accessor :name, :height, :weight

  def initialize(n, h, w)
    # puts "this object was initialized"
    @name = n
    @height = h
    @weight = w
  end

  def speak
    "#{name} says arf!"
  end

  def change_info(n, h, w)
    self.name = n
    self.height = h
    self.weight = w
  end

  def info
    "#{name} weights #{weight} and is #{height} tall."
  end

  # def name
  #   @name
  # end

  # def name=(name)
  #   @name = name
  # end
end

sparky = GoodDog.new('Sparky', '12 inches', '10 lbs')
p sparky.speak
p sparky.name
sparky.name = "Spartacus"
p sparky.name
sparky.change_info('Fido', '24 inches', '45 lbs')
p sparky.info

# fido = GoodDog.new('Fido')
# p fido.speak