# input:
#   - odd integer
#     - represents the height and widest measure of a diamond to be drawn on-screen

# output:
#   - diamond drawn on-screen using *

# assumptions / constraints:
#   - assume no need to validate input

# data structure:
#   - loops, strings (using .center() )

# algorithm:
#   1.  set num_stars = 1 
#   2.  setup loop from 1 to input
#       - if index.odd? draw_stars(index, input)
#   3.  setup look from input-1 to 1
#       - if index.odd? draw_stars(index, input)


# examples:
# diamond(5)
#
#         *
#        ***
#       *****
#        ***
#         *

def draw_stars(num, width)
  stars = ''
  num.times { |i| stars << "*" }
  stars.center(width)
end

def draw_star_outline(num, width)
  stars = ''
  num.times do |i|
    if i == 0 || i == num-1
      stars << "*"
    else
      stars << " "
    end
  end
  stars.center(width)
end

def diamond(num)
  puts "diamond(#{num})"
  puts ''
  num_stars = 1
  # 1.upto(num).each { |i| puts draw_stars(i, num) if i.odd? }
  # (num-1).downto(1).each { |i| puts draw_stars(i, num) if i.odd? }

  1.upto(num).each { |i| puts draw_star_outline(i, num) if i.odd? }
  (num-1).downto(1).each { |i| puts draw_star_outline(i, num) if i.odd? }
end

diamond(1)
diamond(3)
diamond(5)
diamond(9)

