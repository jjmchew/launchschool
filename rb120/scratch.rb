WHEELS = 6

class Vehicle
  # WHEELS = 4
end

# WHEELS = 8

class Car < Vehicle
  # WHEELS = 2

  def wheels
    WHEELS
  end
end

car = Car.new
puts car.wheels        # => 4