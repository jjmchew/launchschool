require 'minitest/autorun'

class NilTest < Minitest::Test
  def setup
    @value = gets.chomp.strip
  end

  def test_nil
    value = @value
    assert_nil(value, "value is not nil")
  end
end