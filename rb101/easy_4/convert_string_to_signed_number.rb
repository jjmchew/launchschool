
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
    # p "#{multiplier} #{total} #{digit}"
    new_total = total + ( multiplier * digit )
    multiplier *= 10
    new_total
  end
  sum
end

def string_to_signed_integer(str_num)
  case str_num[0]
  when '+'
    string_to_integer(str_num[1..(str_num.length-1)])
  when '-'
    -1 * string_to_integer(str_num[1..(str_num.length-1)])
  else
    string_to_integer(str_num)
  end
end

# test cases
p string_to_signed_integer('4321') == 4321
p string_to_signed_integer('-570') == -570
p string_to_signed_integer('+100') == 100

