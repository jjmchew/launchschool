=begin
1:45 pm - 1:54 pm : 9 minutes

Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:
if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
  
Notes:there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

input
  - array : each element is a string of the form "x:y" where x and y are numbers from 0..4 (inclusive)
output
  - integer:  a number of points
rules
  - x > y, then 3 points
  - x < y, then 0 points
  - x = y, then 1 point
  - always 10 elements in array
  - assume no input validation is required

algorithm
  - initialize a points counter (`points`)
  - iterate through each set of results in given array
      - parse the results to get x, y (`parse_results`)
      - determine the appropriate # of points based on x, y (`get_points`)
      - add those points to the points counter
  - return points counter

notes
  - need to parse results > helper method?
  - assign points could also be a helper method (pass in x, y)
=end

def get_results(string)
  string.split(":")
end

def get_points(x, y)
  case
  when x > y
    3
  when x < y
    0
  when x == y
    1
  end
end

def football_points(array)
  points = 0

  array.each do |result|
    x, y = get_results(result)
    points += get_points(x, y)
    # p "#{x} #{y} #{get_points(x,y)}"
  end

  points
end

p football_points(["1:3", "2:4", "0:1", "0:2", "1:4", "1:4", "2:3", "3:4", "0:4", "1:2"]) == 0
p football_points(["1:3", "2:4", "0:1", "2:2", "1:4", "1:4", "3:3", "3:4", "0:4", "1:2"]) == 2
p football_points(["4:3", "2:4", "0:1", "0:2", "1:4", "1:4", "2:3", "3:4", "0:4", "1:2"]) == 3
p football_points(["0:3", "2:4", "1:1", "3:2", "1:4", "1:4", "4:3", "3:4", "0:0", "1:2"]) == 8