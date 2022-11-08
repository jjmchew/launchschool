
def leap_year?(year)
  # p "#{year} 4: #{year % 4} 100: #{year % 100} 400: #{year % 400}"
  if year % 400 == 0
    return true
  elsif year % 4 == 0 && year % 100 != 0
    return true
  end
  false
end

# test cases
p leap_year?(2016) == true
p leap_year?(2015) == false
p leap_year?(2100) == false
p leap_year?(2400) == true
p leap_year?(240000) == true
p leap_year?(240001) == false
p leap_year?(2000) == true
p leap_year?(1900) == false
p leap_year?(1752) == true
p leap_year?(1700) == false
p leap_year?(1) == false
p leap_year?(100) == false
p leap_year?(400) == true