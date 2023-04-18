require 'minitest/autorun'
require_relative '06numbers'

class PerfectNumberTest < Minitest::Test
  def test_initialize_perfect_number
    assert_raises StandardError do
      PerfectNumber.classify(-1)
    end
  end

  def test_classify_deficient
    # skip
    assert_equal 'deficient', PerfectNumber.classify(13)
    assert_equal 'deficient', PerfectNumber.classify(15)
    assert_equal 'deficient', PerfectNumber.classify(7)
    assert_equal 'deficient', PerfectNumber.classify(21)
  end

  def test_classify_perfect
    # skip
    assert_equal 'perfect', PerfectNumber.classify(28)
    assert_equal 'perfect', PerfectNumber.classify(6)
    assert_equal 'perfect', PerfectNumber.classify(1)
  end

  def test_classify_abundant
    # skip
    assert_equal 'abundant', PerfectNumber.classify(12)
    assert_equal 'abundant', PerfectNumber.classify(24)
  end
end
