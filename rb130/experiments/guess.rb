class GuessingGame
  def initialize
    @num = rand(1..5)
  end

  def play(input: $stdin)
    guess = nil
    guesses = 3
    loop do
      loop do
        puts "Guess a number between 1 and 5 (inclusive)."
        guess = input.gets.chomp.to_i
        break if (1..5).cover?(guess)
        puts "Invalid guess (must be a number between 1 and 5 inclusive)."
      end
      guesses -= 1
      break if guesses == 0 || guess == @num
      puts "Nope. Try again." unless guess == @num
    end
    puts "You guessed correctly!" if guess == @num
    puts "Sorry, you're out of guesses.  The number was #{@num}." unless guess == @num
  end

  # private

  # def get_input(input: input2)
  #   guess = nil
  #   loop do
  #     puts "Guess a number between 1 and 5 (inclusive)."
  #     guess = input.gets.chomp.to_i
  #     break if (1..5).cover?(guess)
  #     puts "Invalid guess (must be a number between 1 and 5 inclusive)."
  #   end
  #   guess
  # end
end

# GuessingGame.new.play
