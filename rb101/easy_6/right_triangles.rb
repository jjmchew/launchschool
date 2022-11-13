=begin

data structure
  - for given number the pattern of spaces vs stars is:
    e.g., 5
      spaces    stars
      4         1
      3         2
      2         3
      1         4
      0         5
  - spaces + stars = num where stars is 1..num

algorithm
  - create a loop where the index goes from 1 .. num
    - output spaces:  (num - index) * " "  AND index * "*"

=end

def triangle(num)
  1.upto(num) { |index| puts " " * (num - index) + "*" * index }
end

# test cases
triangle(5)
triangle(9)
