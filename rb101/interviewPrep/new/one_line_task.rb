=begin

https://www.codewars.com/kata/59016379ee5456d8cc00000f/train/ruby

Since the weather was good, some students decided to go for a walk in the park after the first lectures of the new academic year. There they saw a squirrel, which climbed a tree in a spiral at a constant angle to the ground. They calculated that in one loop the squirrel climbes h meters (vertical height), the height of the tree is equal to H (v in Ruby), and the length of its circumference equals S.

These calculations were exhausting, so now the students need your help to figure out how many meters the path length of squirrel climbed when it reached the tree top. The result should be rounded to 4 decimal places.
Code Limit
  Less than 48 characters (Ruby)

Example
  For h = 4, v = 16, S = 3, the output should be 20.
  For h = 8, v = 9, S = 37, the output should be 42.5869.

input
  - h : height gained in 1 loop around tree upwards at constant angle
  - v : total height of tree
  - S : circumference of tree
output
  - float : total distance travelled by squirrel to get to top of tree
rules
  - assume all units are the same

notes
  - example 1:  For h = 4, v = 16, S = 3, the output should be 20.
      - equivalent to a right angle triangle with base S (3 m), height h (4 m)
      - (i.e., "unroll" the path the squirrel travels up the tree)
      - to find length of hypoteneuse is distance travelled in 1 loop :  (S**2 + h**2)**(1/2)
      - total distance travelled is v / h * distance travelled in 1 loop

algorithm
  - calculations:
      - to find length of hypoteneuse is distance travelled in 1 loop :  (S**2 + h**2)**(1/2)
      - total distance travelled is v / h * distance travelled in 1 loop
=end

def sq(h, v, s)
  # (v.to_f/h*(h**2+s**2)**0.5).round 4
  (Math.hypot(h,s)*v/h).round 4
end

p sq(4,16,3) == 20
p sq(4,4,3) == 5
p sq(8,9,37) == 42.5869
p sq(526,682,140) == 705.7435
p sq(247,857,669) == 2474.3392
p sq(2,11,47) == 258.7339
p sq(73,97,244) == 338.4185
p sq(15,774,948) == 48922.923
p sq(21,29,60) == 87.7856
p sq(83,97,86) == 139.6799
