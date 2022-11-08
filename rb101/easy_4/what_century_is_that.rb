=begin

input
  - a year (as integer)

output
  - returns century (a string with appropriate suffix appended)
  - see test cases

assumptions / constraints
  - 

algorithm
  - determine last digit of number (in ones position) to determine suffix
    - convert to string, reference last character or last 2 (index is length - 1)
  - determine appropriate suffix based on last digit
  - determine the appropriate century
    - divide the year by 100
    - if there is a remainder then the century is + 1 (e.g., 2001 / 100 = 20 + .01 which is the 21st century)
    - if there is no remainder then the century is the result of year / 100

=end

# test cases

def suffix(century_num)
  century_str = century_num.to_s
  if century_str[-2,2] == '11' then 'th'
  elsif century_str[-2,2] == '12' then 'th'
  elsif century_str[-2,2] == '13' then 'th'
  elsif century_str[-1] == '1' then 'st'
  elsif century_str[-1] == '2' then 'nd'
  elsif century_str[-1] == '3' then 'rd'
  else 'th'
  end
end

def century(year)
  century_num, remainder = year.divmod(100)
  century_num += 1 if remainder > 0
  century_num.to_s + suffix(century_num)
end

p century(2000) == '20th'
p century(2001) == '21st'
p century(1965) == '20th'
p century(256) == '3rd'
p century(5) == '1st'
p century(10103) == '102nd'
p century(1052) == '11th'
p century(1127) == '12th'
p century(11201) == '113th'