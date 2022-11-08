=begin

input
  - string of numbers

output
  - integer number

assumptions / constraints
  - cannot use built in conversion methods
  - assume number characters only, no input / data validation req'd

data structure
  - convert string to array of characters

algorithm
  - convert string to array of characters
  - iterate across the characters
      - use case to compare string to return equivalent integer value
      - store each integer value in an array
  - reverse the array of integer values (so that 1's digit is first element, 10's next, etc.)
  - iterate across this reversed array to calculate the correct integer number:
      - for each index, multiply the digit by an increasing factor of 10 and add to running total
      - i.e., index 0 : multiply by 1
              index 1 : multiple by 10
              index 2 : multiply by 100
              etc

=end

def get_digit(char)
  case char
  when '1' then 1
  when '2' then 2
  when '3' then 3
  when '4' then 4
  when '5' then 5
  when '6' then 6
  when '7' then 7
  when '8' then 8
  when '9' then 9
  when '0' then 0
  end
end

def string_to_integer(str_num)
  digits = (str_num.chars.map { |char| get_digit(char) }).reverse
  p digits

  multiplier = 1
  sum = digits.inject(0) do |total, digit|
    p "#{multiplier} #{total} #{digit}"
    new_total = total + ( multiplier * digit )
    multiplier *= 10
    new_total
  end
  sum
end

# test cases
p string_to_integer('4321') == 4321
p string_to_integer('570') == 570