class Triangle
  def initialize(side1, side2, side3)
    @sides = [side1, side2, side3]
    check_sides
  end

  def kind
    return "equilateral" if equilateral?
    return "isosceles" if isosceles?
    return "scalene" if scalene?
  end

  private
  def check_sides
    @sides.each do |side|
      raise ArgumentError, "Side cannot be 0" if side == 0
      raise ArgumentError, "Side cannot be less than 0" if side < 0
    end
    raise ArgumentError unless sides_valid?
  end

  def sides_valid?
    return false if @sides[0] + @sides[1] <= @sides[2]
    return false if @sides[0] + @sides[2] <= @sides[1]
    return false if @sides[1] + @sides[2] <= @sides[0]
    true
  end

  def count_sides
    count = []
    @sides.each do |side|
      count << @sides.count(side)
    end
    count.sort
  end

  def equilateral?
    return false if count_sides != [3, 3, 3]
    true
  end

  def isosceles?
    return false if count_sides != [1, 2, 2]
    true
  end

  def scalene?
    return false if count_sides != [1, 1, 1]
    true
  end
end

# p Triangle.new(3, 3, 3).kind
# p Triangle.new(3, 3, 4).kind
# p Triangle.new(4, 3, 10).kind
p Triangle.new(0, 3, 3).kind



=begin

For check_lengths
  - need array of subarrays : all possible combos of sides to test [side1 + side2, side3]
      e.g. [3, 4, 5] :  [3, 4, 5] => [0 + 1] > [2]
                        [3, 5, 4] => [0 + 2] > [1]
                        [4, 5, 3] => [1 + 2] > [0]
  - this can be hard-coded for initial version

=end
