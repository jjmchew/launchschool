require 'minitest/autorun'

class Tests < Minitest::Test
  def test_subclass
    value = "df"
    assert_equal(true, value.class.ancestors.include?(Numeric))
  end
end