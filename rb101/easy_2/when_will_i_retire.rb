=begin

input:
  - prompt for age
  - prompt for retirement age

output:
  - "It's #{current_year}.  You will retire in #{retirement_year}.\nYou have only #{work_years} years of work to go!"

assumptions / constraints:
  - no data validation; all integers
  - current year can be hardcoded (i.e., doesn't use date methods to extract current date)

=end

current_year = Time.now.year

def retirement_calcs(current_age, retirement_age, current_year)
  work_years = retirement_age - current_age
  retirement_year = current_year + work_years
  return [retirement_year, work_years]
end

print "What is your age? "
current_age = gets.chomp.to_i

print "At what age would you like to retire? "
retirement_age = gets.chomp.to_i
puts ""

result = retirement_calcs(current_age, retirement_age, current_year)
puts "It's #{current_year}.  You will retire in #{result[0]}.\nYou have only #{result[1]} years of work to go!"
# test cases
p retirement_calcs(30, 70, 2016) == [2056, 40]
p retirement_calcs(1, 70, 2022) == [2091, 69]