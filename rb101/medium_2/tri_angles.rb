=begin
8:43 pm - 8:49 pm  :  6 minutes

algorithm
  - check 1: if all angles sum to 180
  - check 2:  if all angles are > 0
  
  - check 3: right triangle
  - check 4: obtuse triangle
  - check 5: acute triangle
=end

def triangle(angle1, angle2, angle3)
  angles = [angle1, angle2, angle3]

  return :invalid unless angles.inject(:+) == 180
  return :invalid if angles.include?(0)
  return :right if angles.include?(90)
  angles.each do |angle|
    return :obtuse if angle > 90
  end
  return :acute

end

# test cases
p triangle(60, 70, 50) == :acute
p triangle(30, 90, 60) == :right
p triangle(120, 50, 10) == :obtuse
p triangle(0, 90, 90) == :invalid
p triangle(50, 50, 50) == :invalid