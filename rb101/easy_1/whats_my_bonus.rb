# Problem
# input: 
#   - positive integer (salary)
#   - boolean
# output:  if true:  half of salary;  if false: 0
# assumptions / constraints:
#   - only positive salaries
# 

# Data structure
#   - can use conditional with regular numbers

# Algorithm
#   1.  if boolean is true then calculate half of salary
#   2.  if not, return 0

def calculate_bonus(salary, get_bonus)
  if get_bonus then return salary / 2
  else 0
  end
end

# Test cases
puts calculate_bonus(2800, true) == 1400
puts calculate_bonus(1000, false) == 0
puts calculate_bonus(50000, true) == 25000

