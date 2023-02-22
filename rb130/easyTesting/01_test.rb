require 'minitest/autorun'

class OddTest < Minitest::Test
  def setup
    @value = rand(1000)
  end

  def test_odd?
    value = @value
    puts "value was #{value}"
    assert_equal(true, value.odd?, "value is not odd")
  end
end