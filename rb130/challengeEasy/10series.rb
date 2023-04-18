class Series
  def initialize(str)
    @str = str
  end

  def slices(num)
    raise ArgumentError if num > @str.length
    substrs = substrings(num)
    substrs.map { |substr| substr.chars.map(&:to_i) }
  end

  private

  def substrings(num)
    substrs = []
    (0..@str.length - num).each { |idx| substrs << @str[idx, num] }
    substrs
  end
end

# p Series.new('01234').slices(5)

=begin

algo
  - take substrings of correct length
  - convert those substrings into arrays of each digit

=end
