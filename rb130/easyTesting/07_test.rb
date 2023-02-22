require 'minitest/autorun'

class Tests < Minitest::Test
  def test_class
    value = Numeric.new
    p value.class
    assert_equal(Numeric, value.class)
  end
end