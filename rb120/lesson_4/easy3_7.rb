class Light
  attr_accessor :brightness, :color

  def initialize(brightness, color)
    @brightness = brightness
    @color = color
  end

  def self.information
    return "I want to turn on the light with a brightness level of super high and a color of green"
  end

end

# also don't need the 'return' statement - Ruby will automatically return the last line in the method
# getter and setter methods are defined, but aren't being used at all in the class