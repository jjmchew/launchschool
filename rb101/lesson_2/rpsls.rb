# rock paper scissors lizard Spock

VALID_CHOICES = %w(rock paper scissors lizard spock)

OPTIONS = %w(r p sc l sp)

WINS_AGAINST = {
  'rock' => ['scissors', 'lizard'],
  'paper' => ['rock', 'spock'],
  'scissors' => ['paper', 'lizard'],
  'lizard' => ['spock', 'paper'],
  'spock' => ['scissors', 'rock']
}

OUTCOME_MESSAGES = {
  ['paper', 'rock'] => 'paper covers rock',
  ['rock', 'scissors'] => 'rock crushes scissors',
  ['rock', 'spock'] => 'Spock vaporizes rock',
  ['lizard', 'rock'] => 'rock crushes lizard',
  ['paper', 'scissors'] => 'scissors cut paper',
  ['paper', 'spock'] => 'paper disproves Spock',
  ['lizard', 'paper'] => 'lizard eats paper',
  ['scissors', 'spock'] => 'Spock smashes scissors',
  ['lizard', 'scissors'] => 'scissors decapitates lizard',
  ['lizard', 'spock'] => 'lizard poisons Spock'
}

def display_blank_line
  puts
end

def get_match_outcome(player_choice, computer_choice)
  if player_choice == computer_choice
    { winner: 'tie', msg: '' }
  elsif WINS_AGAINST[player_choice].include?(computer_choice)
    { winner: 'player',
      msg: OUTCOME_MESSAGES[[player_choice, computer_choice].sort] }
  else
    { winner: 'computer',
      msg: OUTCOME_MESSAGES[[player_choice, computer_choice].sort] }
  end
end

def prompt(message)
  puts "   => #{message}"
end

def return_full_choice(choice)
  case choice
  when 'r', 'rock' then 'rock'
  when 'p', 'paper' then 'paper'
  when 'sc', 'scissors' then 'scissors'
  when 'l', 'lizard' then 'lizard'
  when 'sp', 'spock' then 'spock'
  end
end

def display_choose_message
  prompt "Choose one:   rock   paper  scissors  lizard  Spock"
  puts "            type:   r      p      sc        l       sp"
  display_blank_line
end

def display_invalid_message
  display_blank_line
  prompt "That's not a valid choice."
  display_blank_line
end

def get_player_choice
  choice = ''
  display_choose_message
  loop do
    print '                  > '
    choice = gets.chomp.strip.downcase

    if (OPTIONS + VALID_CHOICES).include? choice then break
    else display_invalid_message
    end
  end

  return_full_choice(choice)
end

def increment_score(winner, score)
  case winner
  when 'player' then score[:player] += 1
  when 'computer' then score[:computer] += 1
  end
end

def display_choice(choice)
  case choice
  when ''         then '                 '
  when 'rock'     then '      rock       '
  when 'paper'    then '      paper      '
  when 'scissors' then '     scissors    '
  when 'lizard'   then '      lizard     '
  when 'spock'    then '      Spock      '
  end
end

def reset_choice(choice)
  choice[:player] = ''
  choice[:computer] = ''
end

def display_title
  display_blank_line
  puts '  +--------------------------------------------------------------------------+'
  puts '  |    R O C K    P A P E R    S C I S S O R S    S P O C K    L I Z A R D   |'
  puts '  +--------------------------------------------------------------------------+'
end

def draw_layout(score, choice)
  system('clear') || system('cls')
  display_title
  display_blank_line
  puts '                    +-----------------+-----------------+'
  puts "                    |       You       |    Computer     |"
  puts '                    +-----------------+-----------------+'
  puts "             WINS   |        #{score[:player]}        |        #{score[:computer]}        |"
  puts '                    +-----------------+-----------------+'
  puts "           CHOICE   |#{display_choice choice[:player]}|#{display_choice choice[:computer]}|"
  puts '                    +-----------------+-----------------+'
  display_blank_line
end

def display_tie_message
  display_blank_line
  puts "                                 You TIED !!"
  display_blank_line
end

def display_outcome_message(message1, message2)
  puts "                       ... #{message1}"
  display_blank_line
  display_blank_line
  puts "                            #{message2}"
  display_blank_line
end

def display_outcome(match_outcome)
  if match_outcome[:winner] == 'tie' then display_tie_message
  elsif match_outcome[:winner] == 'player'
    display_outcome_message match_outcome[:msg], '****  YOU WIN !!  ****'
  elsif match_outcome[:winner] == 'computer'
    display_outcome_message match_outcome[:msg], '     You LOST !!'
  end
end

def get_pause(score)
  display_blank_line
  if score[:player] != 3 && score[:computer] != 3
    puts '                           press enter to continue'
  elsif score[:player] == 3 || score[:computer] == 3
    puts '                     press enter to continue the battle'
  end
  gets.chomp! # pause
end

def display_instructions
  system('clear') || system('cls')

  display_title

  display_blank_line
  display_blank_line
  puts "            This is an updated version of Rock, Paper, Scissors."
  puts "                  Give it a go, and you'll figure it out."
  display_blank_line
  puts "                    Winner is the first to win 3 games."
  display_blank_line
  display_blank_line
  display_blank_line
  puts '                         press enter to continue'
  gets.chomp! # pause
end

def display_final_message(score)
  puts
  if score[:player] == 3
    puts '                      Good job - you beat the computer!'
  else
    puts '                    Tough break - better luck next time!'
  end
  display_blank_line
  display_blank_line
end

def get_play_again
  prompt "Want to try again?   y to play, any key to exit"
  display_blank_line
  print '                         > '
  gets.chomp.strip
end

# START
display_instructions

loop do
  # initialize game variables
  score = { player: 0, computer: 0 }
  choice = { player: '', computer: '' }
  match_outcome = { winner: '', msg: '' }

  loop do
    # re-draw screen
    draw_layout score, choice

    # get choices
    choice[:player] = get_player_choice
    choice[:computer] = VALID_CHOICES.sample

    # display outcomes
    draw_layout score, choice

    match_outcome = get_match_outcome choice[:player], choice[:computer]
    if match_outcome[:winner] != 'tie'
      increment_score match_outcome[:winner], score
    end

    display_outcome match_outcome

    # pause
    get_pause score
    reset_choice choice

    break if score[:player] == 3 || score[:computer] == 3
  end

  draw_layout score, choice
  display_final_message score

  play_again = get_play_again
  break unless play_again.downcase.start_with? 'y'
end
