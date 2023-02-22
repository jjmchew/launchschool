require 'minitest/autorun'

class Tests < Minitest::Test
  def test_refute
    list = [1, 2, 'xyz']
    refute_includes(list, 'xyz')
  end
end