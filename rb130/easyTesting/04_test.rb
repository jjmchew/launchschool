require 'minitest/autorun'

class Tests < Minitest::Test
  def test_empty
    list = [1, 2]
    # assert_empty(list)
    assert_equal true, list.empty?
  end
end