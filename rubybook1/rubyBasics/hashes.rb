def first_car
  car = {
    type: 'sedan',
    color: 'blue',
    mileage: 80_000
  }
  p car
  end
# first_car

def adding_the_year
  car = {
    type:    'sedan',
    color:   'blue',
    mileage: 80_000
  }
  car[:year] = 2003

  p car
  end
# adding_the_year

def broken_odometer
  car = {
    type:    'sedan',
    color:   'blue',
    mileage: 80_000,
    year:    2003
  }
  car.delete(:mileage)

  p car
  end
# broken_odometer

def what_color
  car = {
    type:    'sedan',
    color:   'blue',
    year:    2003
  }

  puts car[:color]
  end
# what_color

def labeled_numbers
  numbers = {
    high:   100,
    medium: 50,
    low:    10
  }

  numbers.each { |k,v| puts "A #{k} number is #{v}."}

  end
# labeled_numbers

def divided_by_two
  numbers = {
    high:   100,
    medium: 50,
    low:    10
  }

  half_numbers = numbers.map { |k,v| v / 2 }

  p half_numbers

  end
# divided_by_two

def low_med_high

  numbers = {
    high:   100,
    medium: 50,
    low:    10
  }

  low_numbers = numbers.select { |k,v| v < 25 }

  p low_numbers
  end
# low_med_high

def low_or_nothing

  numbers = {
    high:   100,
    medium: 50,
    low:    10
  }

  low_numbers = numbers.select! do |key, value|
                  value < 25
                end

  p low_numbers
  p numbers

  end
# low_or_nothing

def multiple_cars
  hash = {
    car: {
      type: 'sedan',
      color: 'blue',
      year: 2003
    },
    truck: {
      type: 'pickup',
      color: 'red',
      year: 1998
    }
  }

  p hash
  end
# multiple_cars

def which_collection
  car = [
    [:type, 'sedan'],
    [:color, 'blue'],
    [:year, 2003]
  ]

  p car
  end
# which_collection