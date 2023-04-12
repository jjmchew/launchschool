require 'minitest/autorun'
require_relative 'simple_game'

class SimpleGameTest < Minitest::Test
  def setup
    @game = SimpleGame.new
  end

  def test_good_input_1
    exp = 200
    user_input = StringIO.new(exp.to_s + "\n")
    output = StringIO.new
    actual = @game.get_guess(input: user_input, output: output)
    assert_equal(exp, actual)
  end

  def test_bad_then_good_input
    exp = 156
    user_input = StringIO.new("-1\n204\n5940\n" + exp.to_s + "\n")
    output = StringIO.new
    actual = @game.get_guess(input: user_input, output: output)
    assert_equal(exp, actual)
  end
end