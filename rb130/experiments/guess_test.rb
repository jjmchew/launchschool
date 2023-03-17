require 'minitest/autorun'
require_relative 'guess'

class GuessingGameTest < Minitest::Test
  def setup
    Kernel.srand 1000 # 4 should be the first random number generated between 1..5
    @game = GuessingGame.new
    @msg_prompt = <<~PROMPT
    Guess a number between 1 and 5 (inclusive).
    PROMPT
    @msg_invalid = <<~MSG
    Invalid guess (must be a number between 1 and 5 inclusive).
    MSG
    @msg_wrong = <<~MSG
    Nope. Try again.
    MSG
    @msg_correct = <<~MSG
    You guessed correctly!
    MSG
    @msg_lose = <<~MSG
    Sorry, you're out of guesses.  The number was 4.
    MSG
  end

  def test_guess_invalid_then_correct
    input1 = StringIO.new("10\n4\n")
    expected = @msg_prompt + @msg_invalid + @msg_prompt + @msg_correct
    assert_output(expected, nil) do
      @game.play(input: input1)
    end
  end

  def test_num_of_guesses
    input2 = StringIO.new("1\n1\n1\n")
    expected = @msg_prompt + @msg_wrong + @msg_prompt + @msg_wrong + @msg_prompt + @msg_lose
    assert_output(expected, nil) do
      @game.play(input: input2)
    end
  end
end
