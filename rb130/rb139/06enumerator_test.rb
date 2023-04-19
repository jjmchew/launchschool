require 'minitest/autorun'
require_relative '06enumerator'

class FactorialTest < Minitest::Test
  def setup
    @fact = Factorial.new
  end

  def test_n_1
    assert_equal 1, @fact.next
  end

  def test_n_3
    result = 0
    # add 1 since n is zero-indexed
    (3 + 1).times { result = @fact.next }
    assert_equal 6, result
  end

  def test_take_10
    assert_equal [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880], @fact.take(10)
  end

  def test_2_sets_of_next
    4.times { @fact.next }
    4.times { @fact.next }
    assert_equal 40320, @fact.next
  end

  def test_rewind
    4.times { @fact.next }
    @fact.rewind
    3.times { @fact.next }
    assert_equal 6, @fact.next
  end
end
