module Describable
  def describe_shape
    "I am a #{self.class} and have #{SIDES} sides."
  end
end

class Shape
  include Describable

  def self.sides
    self::SIDES
  end
end

class Quadrilateral < Shape
  SIDES = 4
end

class Square < Quadrilateral; end

Square.sides # => 4
Square.new.sides # => 4
Square.new.describe_shape # => "I am a Square and have 4 sides."