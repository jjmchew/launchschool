=begin
8:24 pm - 8:41 pm : 17 minutes

input
  - 3 numbers (float) : represents lengths of sides of a (possible) triangle
      - num1, num2, num3
output
  - symbol : :equilateral - if all sides are equal
             :isosceles - 2 sides are equal
             :scalene - all sides of different length
constraints / assumptions
  - to be a triangle:  1. sum of length of 2 shortest sides is GREATER than length of longest side AND
                    :  2. all sides must have length > 0
  - no need for input validation - i.e., only 3 numbers

data structure
  - store the sides in an array to simplify iteration

algorithm
  - check if sides represent a valid triangle:
      - check rule 2
          - make sure all numbers are > 0
      - check rule 1
          - add each side to an array
          - check if sum of first 2 elements is > 3rd element
  - if not a valid triangle then return :invalid
  - check type of triangle
      - need to count the # of times a particular length of side occurs
      - initialize a count hash
      - iterate through the array of sides and establish a count for the number of times a particular length occurs
      - if there is only 1 key and value is 3 then return :equilateral
      - if there are 2 keys then return :isoceles
      - if there are 3 keys then return :scalene

=end

def triangle(num1, num2, num3)
  sides = [num1, num2, num3].sort
  return :invalid unless sides.all?{ |num| num > 0 }
  return :invalid unless sides[0] + sides[1] > sides[2]
  
  count = Hash.new(0)
  sides.each { |side| count[side] += 1 }

  return :equilateral if count.keys.length == 1
  return :isosceles if count.keys.length == 2
  return :scalene if count.keys.length == 3
end

# test cases
p triangle(3, 3, 3) == :equilateral
p triangle(3, 3, 1.5) == :isosceles
p triangle(3, 4, 5) == :scalene
p triangle(0, 3, 3) == :invalid
p triangle(3, 1, 1) == :invalid