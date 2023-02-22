require 'minitest/autorun'

class TestDowncase < Minitest::Test
  def setup
    @value = gets.chomp.strip
  end
  
  def test_downcase
    value = @value
    assert_equal('xyz', value.downcase, "return value is not 'xyz'")
  end
end