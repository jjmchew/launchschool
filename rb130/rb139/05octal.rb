=begin
15:08 start 15:25 finish  (17 minutes)

example:
  octal = decimal
  - 1   = 1 * 8**0
        = 1
  - 233 = 3 * 8**0 + 3 * 8**1 + 2 * 8**2
        = 3        + 24       + 128
        = 155

algo
  - convert string to array of chars, then reverse
      - index of each digit will be exponent
  - initialize a `decimal` variable with value 0
  - iterate through array of (character) digits with index
      - convert digit to integer, multiply by 8**index
      - add the value above to `decimal`
  - return `decimal`
=end

class Octal
  def initialize(str)
    @oct = str
  end

  def to_decimal
    decimal = 0
    return decimal unless valid_octal?(@oct)
    @oct.chars.reverse.each_with_index do |char, idx|
      # p "#{char.to_i} #{idx}"
      decimal += char.to_i * 8**idx
    end
    decimal
  end

  private

  def valid_octal?(str)
    !str.gsub(/[^0-7]/, '*').include?('*')
  end
end

# p Octal.new('130').to_decimal
