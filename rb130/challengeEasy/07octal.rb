class Octal
  def initialize(str)
    @oct = str.strip
  end

  def to_decimal
    return 0 unless valid_octal?

    dec = 0
    @oct.chars.reverse.each_with_index do |digit, idx|
      dec += digit.to_i * (8 ** idx)
    end
    
    dec
  end

  private
  def valid_octal?
    return false if @oct.gsub(/[^0-7]/,"*").include?("*") || @oct == ""
    true
  end
end

# p Octal.new('233').to_decimal