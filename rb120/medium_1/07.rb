class GuessingGame
  def initialize(low, high)
    @low = low
    @high = high
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
    @target_num = rand(@low...@high)
    @guesses = Math.log2(@high - @low).to_i + 1
  end

  def display_status
    puts "You have #{@guesses} guesses remaining."
  end

  def enter_guess
    guess = nil
    print "Enter a number between #{@low} and #{@high}: "
    loop do
      guess = gets.chomp.strip
      break if guess.to_i.to_s == guess && (@low...@high).cover?(guess.to_i)
      print "Invalid guess.  Enter a number between #{@low} and #{@high}: "
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

game = GuessingGame.new(501, 1500)
game.play

=begin
You have 10 guesses remaining.
Enter a number between 501 and 1500: 104
Invalid guess. Enter a number between 501 and 1500: 1000
Your guess is too low.

You have 9 guesses remaining.
Enter a number between 501 and 1500: 1250
Your guess is too low.

You have 8 guesses remaining.
Enter a number between 501 and 1500: 1375
Your guess is too high.

You have 7 guesses remaining.
Enter a number between 501 and 1500: 80
Invalid guess. Enter a number between 501 and 1500: 1312
Your guess is too low.

You have 6 guesses remaining.
Enter a number between 501 and 1500: 1343
Your guess is too low.

You have 5 guesses remaining.
Enter a number between 501 and 1500: 1359
Your guess is too high.

You have 4 guesses remaining.
Enter a number between 501 and 1500: 1351
Your guess is too high.

You have 3 guesses remaining.
Enter a number between 501 and 1500: 1355
That's the number!

You won!
=end

game.play

=begin
You have 10 guesses remaining.
Enter a number between 501 and 1500: 1000
Your guess is too high.

You have 9 guesses remaining.
Enter a number between 501 and 1500: 750
Your guess is too low.

You have 8 guesses remaining.
Enter a number between 501 and 1500: 875
Your guess is too high.

You have 7 guesses remaining.
Enter a number between 501 and 1500: 812
Your guess is too low.

You have 6 guesses remaining.
Enter a number between 501 and 1500: 843
Your guess is too high.

You have 5 guesses remaining.
Enter a number between 501 and 1500: 820
Your guess is too low.

You have 4 guesses remaining.
Enter a number between 501 and 1500: 830
Your guess is too low.

You have 3 guesses remaining.
Enter a number between 501 and 1500: 835
Your guess is too low.

You have 2 guesses remaining.
Enter a number between 501 and 1500: 836
Your guess is too low.

You have 1 guess remaining.
Enter a number between 501 and 1500: 837
Your guess is too low.

You have no more guesses. You lost!
=end