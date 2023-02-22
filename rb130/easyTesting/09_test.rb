require 'minitest/autorun'

class Tests < Minitest::Test
  def test_object_equality
    list = ['a', 'b']
    assert_equal(list.object_id, list.process.object_id)
  end
end
