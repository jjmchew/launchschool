# rock paper scissors

VALID_CHOICES = %w(rock paper scissors)

def win?(first, second)
  (first == 'rock' && second == 'scissors') ||
  (first == 'paper' && second == 'rock') ||
  (first == 'scissors' && second == 'paper')
end

def get_result(choice, computer_choice)
  if win? choice, computer_choice
    "You won!"
  elsif win? computer_choice, choice
    "Computer won!"
  else
    "You tied the computer!"
  end
end

def prompt(message)
  Kernel.puts("=> #{message}")
end

def get_player_choice
  choice = ''
  loop do
    prompt "Choose one: #{VALID_CHOICES.join(', ')}"
    choice = Kernel.gets().chomp()

    if VALID_CHOICES.include? choice
      break
    else
      prompt "That's not a valid choice."
    end
  end
  return choice
end

loop do
  choice = get_player_choice
  computer_choice = VALID_CHOICES.sample

  Kernel.puts "You chose: #{choice};  Computer chose: #{computer_choice}"
  puts get_result choice, computer_choice

  prompt "Do you want to play again?"
  answer = Kernel.gets().chomp()
  break unless answer.downcase().start_with? 'y'
end
