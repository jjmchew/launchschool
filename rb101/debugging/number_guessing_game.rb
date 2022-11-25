def valid_integer?(string)
  string.to_i.to_s == string
end

def guess_number(max_number, max_attempts)
  winning_number = (1..max_number).to_a.sample
  attempts = 0

  loop do
    attempts += 1
    break if attempts > max_attempts

    input = nil
    until valid_integer?(input)
      print 'Make a guess: '
      input = gets.chomp
    end

    guess = input.to_i

    if guess == winning_number
      puts 'Yes! You win.'
      return
    else
      puts 'Nope. Too small.' if guess < winning_number
      puts 'Nope. Too big.'   if guess > winning_number

      # Try again:
      # guess_number(max_number, max_attempts)
    end
  end
end

guess_number(10, 3)

=begin
Line 28 has created a recursive call every time the user makes a wrong guess, and since the winning number of each recursive game changes, you can never really win.  Even if you do win 1 nested game, there are likely to be many more (depending on how many incorrect guesses you've made).
The recursive call isn't necessary - the loop takes care of the additional guesses allotted to the player.
Also, the game doesn't end once the player has guessed the correct number - adding a return statement within the `if` branch is a quick fix.
=end