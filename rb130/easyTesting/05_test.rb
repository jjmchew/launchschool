require 'minitest/autorun'

class Tests < Minitest::Test
  def test_included
    list = ['x','xyz','z']
    assert_equal(true, list.include?('xyz'))
  end
end