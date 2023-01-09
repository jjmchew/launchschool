require 'pry'

class GuessingGame
  def initialize
    reset
  end

  def play
    guess = nil
    loop do
      display_status
      guess = enter_guess
      guess_response(guess)
      break if guessed?(guess) || @guesses < 1
      # binding.pry
    end
    puts "You won!" if guessed?(guess)
    puts "You have no more guesses. You lost!" unless guessed?(guess)
    reset
  end

  private

  def reset
    @target_num = rand(99) + 1
    @guesses = 7
  end

  def display_status
    puts "You have #{@guesses} guesses remaining."
  end

  def enter_guess
    guess = nil
    print "Enter a number between 1 and 100: "
    loop do
      guess = gets.chomp.strip
      break if guess.to_i.to_s == guess && (1...100).cover?(guess.to_i)
      print "Invalid guess.  Enter a number between 1 and 100: "
    end
    guess.to_i
  end

  def guess_response(guess)
    @guesses -= 1
    case 
    when guess < @target_num then response "Your guess is too low."
    when guess > @target_num then response "Your guess is too high."
    else response "That's the number!"
    end
  end

  def guessed?(guess)
    return true if guess == @target_num
    false
  end

  def response(msg)
    puts msg
    puts ""
  end
end

game = GuessingGame.new
game.play

=begin
You have 7 guesses remaining.
Enter a number between 1 and 100: 104
Invalid guess. Enter a number between 1 and 100: 50
Your guess is too low.

You have 6 guesses remaining.
Enter a number between 1 and 100: 75
Your guess is too low.

You have 5 guesses remaining.
Enter a number between 1 and 100: 85
Your guess is too high.

You have 4 guesses remaining.
Enter a number between 1 and 100: 0
Invalid guess. Enter a number between 1 and 100: 80

You have 3 guesses remaining.
Enter a number between 1 and 100: 81
That's the number!

You won!
=end

game.play

=begin
You have 7 guesses remaining.
Enter a number between 1 and 100: 50
Your guess is too high.

You have 6 guesses remaining.
Enter a number between 1 and 100: 25
Your guess is too low.

You have 5 guesses remaining.
Enter a number between 1 and 100: 37
Your guess is too high.

You have 4 guesses remaining.
Enter a number between 1 and 100: 31
Your guess is too low.

You have 3 guesses remaining.
Enter a number between 1 and 100: 34
Your guess is too high.

You have 2 guesses remaining.
Enter a number between 1 and 100: 32
Your guess is too low.

You have 1 guess remaining.
Enter a number between 1 and 100: 32
Your guess is too low.

You have no more guesses. You lost!
=end