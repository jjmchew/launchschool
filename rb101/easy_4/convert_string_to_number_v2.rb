DIGITS = {
  '0' => 0,
  '1' => 1,
  '2' => 2,
  '3' => 3,
  '4' => 4,
  '5' => 5,
  '6' => 6,
  '7' => 7,
  '8' => 8,
  '9' => 9,
}

def string_to_integer(str_num)
  chars = str_num.chars
  num = 0
  chars.each do |char|
    num = num * 10 + DIGITS[char]
  end
  num
end

# test cases
p string_to_integer('4321') == 4321
p string_to_integer('570') == 570