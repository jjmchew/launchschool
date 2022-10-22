# rock paper scissors lizard Spock
# questions:
#   - more perfomant to use symbols for hash and have to convert strings to symbols for lookup?
#   - OR just use strings as key?
#   - should I worry about not running get_result multiple times (i.e., assign to a variable for 're-use')?

VALID_CHOICES = %w(rock paper scissors lizard Spock)
OPTIONS = %w(r p sc l sp)

def match_outcome?(first, second)
  outcome = {
    'rock': {
      paper: {win: 'paper', msg: 'paper covers rock'},
      scissors: {win: 'rock', msg: 'rock crushes scissors'},
      Spock: {win: 'Spock', msg: 'Spock vaporizes rock'},
      lizard: {win: 'rock', msg: 'rock crushes lizard'}
    },
    'paper': {
      scissors: {win: 'scissors', msg: 'scissors cut paper'},
      Spock: {win: 'paper', msg: 'paper disproves Spock'},
      lizard: {win: 'lizard', msg: 'lizard eats paper'},
      rock: {win: 'paper', msg: 'paper covers rock'}
    },
    'scissors': {
      Spock: {win: 'Spock', msg: 'Spock smashes scissors'},
      lizard: {win: 'scissors', msg: 'scissors decapitates lizard'},
      rock: {win: 'rock', msg: 'rock crushes scissors'},
      paper: {win: 'scissors', msg: 'scissors cut paper'},
    },
    'Spock': {
      lizard: {win: 'lizard', msg: 'lizard poisons Spock'},
      rock: {win: 'Spock', msg: 'Spock vaporizes rock'},
      paper: {win: 'paper', msg: 'paper disproves Spock'},
      scissors: {win: 'Spock', msg: 'Spock smashes scissors'},
    },
    'lizard': {
      rock: {win: 'rock', msg: 'rock crushes lizard'},
      paper: {win: 'lizard', msg: 'lizard eats paper'},
      scissors: {win: 'scissors', msg: 'scissors decapitates lizard'},
      Spock: {win: 'lizard', msg: 'lizard poisons Spock'},
    }
  }

  return outcome[first.to_sym][second.to_sym]
end

def get_result(player_choice, computer_choice)
  if player_choice == computer_choice
    {winner: 'tie', msg: ''}
  elsif match_outcome?(player_choice, computer_choice)[:win] == player_choice
    {winner: 'player', msg: match_outcome?(player_choice, computer_choice)[:msg]}
  elsif match_outcome?(player_choice, computer_choice)[:win] == computer_choice
    {winner: 'computer', msg: match_outcome?(player_choice, computer_choice)[:msg]}
  end
end

def prompt(message)
  puts "   => #{message}"
end

def get_full_choice(choice)
  case choice
  when 'r' then 'rock'
  when 'p' then 'paper'
  when 'sc' then 'scissors'
  when 'l' then 'lizard'
  when 'sp' then 'Spock'
  end
end

def get_player_choice

  choice = ''
  prompt "Choose one:   rock   paper  scissors  lizard  Spock"
  puts "            type:   r      p      sc        l       sp"
  puts

  loop do 
    print '                  > '
    
    choice = gets.chomp.strip.downcase

    if OPTIONS.include? choice
      break
    else
      puts
      prompt "That's not a valid choice."
      puts
    end
  end

  get_full_choice(choice)
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
  when 'Spock'    then '      Spock      '
  end
end

def reset_choice(choice)
  choice[:player] = ''
  choice[:computer] = ''
end

def display_title
  puts
  puts '  +--------------------------------------------------------------------------+ '
  puts '  |    R O C K    P A P E R    S C I S S O R S    S P O C K    L I Z A R D   | '
  puts '  +--------------------------------------------------------------------------+ '
end

def draw_layout(score, choice, result)
  system('clear') || system('cls')

  display_title
  
  puts
  puts '                    +-----------------+-----------------+'
  puts "                    |       You       |    Computer     |"
  puts '                    +-----------------+-----------------+'
  puts "             WINS   |        #{score[:player]}        |        #{score[:computer]}        |"
  puts '                    +-----------------+-----------------+'                                     
  puts "           CHOICE   |#{display_choice choice[:player]}|#{display_choice choice[:computer]}|"
  puts '                    +-----------------+-----------------+'                                     
  puts
end

def display_outcome(result)
  if result[:winner] == 'player'
    puts "                       ... #{result[:msg]}"
    puts
    puts
    puts '                            ****  YOU WIN !!  ****'
    puts
  elsif result[:winner] == 'computer'
    puts "                       ... #{result[:msg]}"
    puts
    puts
    puts '                                 You LOST !!'
    puts
  elsif result[:winner] == 'tie'
    puts
    puts '                                 You TIED !!'
    puts
  end
end

def get_pause(score)
  unless score[:player] == 3 || score[:computer] == 3
    puts
    puts '                    press any key to continue the battle'
  else
    puts
    puts '                         press any key to continue'
  end
  gets.chomp! # pause
end


loop do

  # initialize game variables
  score = {
    player: 0,
    computer: 0,
  }

  choice = {
    player: '',
    computer: ''
  }

  result = {
    winner: '',
    msg: ''
  }

  loop do
    # re-draw screen
    draw_layout(score, choice, result)

    # get choices
    choice[:player] = get_player_choice
    choice[:computer] = VALID_CHOICES.sample

    # display outcomes
    draw_layout score, choice, result
    
    result = get_result choice[:player], choice[:computer]
    increment_score(result[:winner],score) unless result[:winner] == 'tie'
    
    display_outcome result

    # pause
    get_pause score
    reset_choice choice

    break if score[:player] == 3 || score[:computer] == 3 
  end

  draw_layout(score, choice, result)
  puts
  if score[:player] == 3
    puts '                      Good job - you beat the computer!'
  else
    puts '                    Tough break - better luck next time!'
  end

  puts
  puts
  prompt "Want to try again?   y to play, any key to exit"
  puts
  print '                         > '
  answer = gets.chomp
  break unless answer.downcase.start_with? 'y'

end
