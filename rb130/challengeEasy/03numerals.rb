class RomanNumeral
  CHARS = {
    1 => 'I',
    4 => 'IV',
    5 => 'V',
    9 => 'IX',
    10 => 'X',
    40 => 'XL',
    50 => 'L',
    90 => 'XC',
    100 => 'C',
    400 => 'CD',
    500 => 'D',
    900 => 'CM',
    1000 => 'M'
  }

  def initialize(num)
    @num = num
  end

  def to_roman
    remain = @num
    roman = ""

    # returns array of numbers (keys) that corresponding to each roman character
    num_arr = CHARS.keys.sort { |a, b| b <=> a }

    num_arr.each do |divide_by|
      if remain / divide_by > 0 && remain / divide_by < 4
        roman += CHARS[divide_by] * (remain / divide_by)
        remain %= divide_by
      end
    end

    roman
  end
end

# p RomanNumeral.new(27).to_roman
# p RomanNumeral.new(5).to_roman
# p RomanNumeral.new(10).to_roman
# p RomanNumeral.new(50).to_roman
# p RomanNumeral.new(100).to_roman
# p RomanNumeral.new(500).to_roman
# p RomanNumeral.new(1000).to_roman
