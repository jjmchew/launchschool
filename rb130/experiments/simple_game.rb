class SimpleGame
  def get_guess(input: $stdin, output: $stdout)
    guess = nil
    loop do
      output.puts "Guess a number between 1 and 200 inclusive."
      guess = input.gets.chomp.to_i
      break if (1..200).cover?(guess)
      output.puts "Invalid guess.  Try again."
    end
    guess
  end
end