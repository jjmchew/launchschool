class MyCar
  attr_accessor :colour
  attr_reader :year

  def initialize(year, model, colour)
    @current_speed = 0
    @year = year
    @model = model
    @colour = colour
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

  def to_s
    "#{year} #{colour} #{@model} car"
  end
end

first_car = MyCar.new(1997, 'Outback', 'black')
first_car.speed_up(20)
p first_car
first_car.shut_off
p first_car
first_car.colour = 'red'
p first_car
p first_car.year
# first_car.year = 2002
first_car.spray_paint('blue')
p first_car

MyCar.gas_mileage(6.6, 100)
puts first_car