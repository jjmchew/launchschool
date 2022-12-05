module Liftable
  def stomp
    puts "I'm bigger than you!"
  end
end

class Vehicle
  attr_accessor :colour
  attr_reader :year, :model

  @@number_of_vehicles = 0

  def initialize(year, model, colour)
    @current_speed = 0
    @year = year
    @model = model
    @colour = colour
    @@number_of_vehicles += 1
  end

  def speed_up(num)
    @current_speed += num
  end

  def brake(num)
    @current_speed -= num
    @current_speed = 0 if @current_speed < 0
  end

  def shut_off
    @current_speed = 0
  end

  def spray_paint(colour)
    self.colour = colour
    puts "you painted the car #{colour}"
  end

  def self.gas_mileage(l, km)
    puts "gas mileage was #{(l.to_f/(km)*100).round(2)} L/ 100 km"
  end

  def self.total_vehicles
    "There #{@@number_of_vehicles == 1 ? "is" : "are"} #{@@number_of_vehicles} vehicle#{@@number_of_vehicles == 1 ? "" : "s"}"
  end

  def age
    p "My vehicle is #{calc_age} years old."
  end

  private
  def calc_age
    Time.now.year - self.year
  end
  
end

class MyCar < Vehicle
  PRIMARY_USE = "commuting"

  def to_s
    "My car is a #{year} #{colour} #{model}"
  end

end

class MyTruck < Vehicle
  include Liftable
  PRIMARY_USE = "hauling"

  def to_s
    "My truck is a #{year} #{colour} #{model}"
  end
end

my_car = MyCar.new(2020, "Subaru Outback", "blue")
p Vehicle.total_vehicles
my_truck = MyTruck.new(1998, "Ford Bronco", "black")

puts my_car
puts my_truck

my_truck.stomp

p MyCar.ancestors
p MyTruck.ancestors
p Vehicle.ancestors

my_car.speed_up(20)
my_truck.speed_up(10)
p my_car
p my_truck

my_car.age
my_truck.age

my_car.calc_age