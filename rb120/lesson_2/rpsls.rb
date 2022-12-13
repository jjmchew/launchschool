require 'pry'

module DisplayMethods
  require 'io/console'
  DISPLAY_WIDTH = 80

  def display_blank_line
    puts
  end

  def clear_screen
    system('clear') || system('cls')
  end

  def pause
    display_blank_line
    puts "press any key to continue".center(DISPLAY_WIDTH)
    cursor
    $stdin.getch
    display_blank_line
  end

  def prompt(message)
    puts "   => #{message}".center(DISPLAY_WIDTH)
  end

  def output(string)
    puts string.center(DISPLAY_WIDTH)
  end

  def cursor
    print "#{' ' * (DISPLAY_WIDTH / 2 - 5)} >  ".center(DISPLAY_WIDTH / 2 - 2)
  end

  def box(message)
    output "****#{'*' * message.length}****"
    output "*   #{message}   *"
    output "****#{'*' * message.length}****"
  end

  def ljustify(msg, width)
    if width > msg.length
      "#{msg}#{' ' * (width - msg.length)}"
    else
      "#{msg[0...width]}"
    end
  end
end

class Move
  attr_reader :value

  VALUES = %w(rock paper scissors lizard spock)
  OPTIONS = %w(r p sc l sp)

  WINS_AGAINST = {
    'rock' => ['scissors', 'lizard'],
    'paper' => ['rock', 'spock'],
    'scissors' => ['paper', 'lizard'],
    'lizard' => ['spock', 'paper'],
    'spock' => ['scissors', 'rock']
  }

  def initialize(value)
    @value = value
  end

  def scissors?
    value == 'scissors'
  end

  def rock?
    value == 'rock'
  end

  def paper?
    value == 'paper'
  end

  def lizard?
    value == 'lizard'
  end

  def spock?
    value == 'spock'
  end

  def >(other_move)
    return false if value == other_move.value
    return true if WINS_AGAINST[value].include?(other_move.value)
    false
  end

  def <(other_move)
    return false if value == other_move.value
    return true unless WINS_AGAINST[value].include?(other_move.value)
    false
  end

  def self.loses_vs(value)
    winner = []
    WINS_AGAINST.each do |k, v|
      winner << k if v.include?(value)
    end
    winner
  end

  def to_s
    return 'Spock' if value == 'spock'
    value
  end
end

class Player
  include DisplayMethods
  attr_accessor :move, :name

  def display_name
    name.capitalize
  end
end

class Human < Player
  def initialize
    @name = ['Regular Joe', 'Dude', 'someone', 'Regular Jane', 'Hero'].sample
  end

  def set_name
    n = nil
    loop do
      output "What's your name?"
      cursor
      n = gets.chomp
      break unless n.empty?
      output "Sorry, must enter a value."
    end
    self.name = n[0..14]
  end

  def display_choose_message
    prompt "Choose one:   rock   paper  scissors  lizard  Spock"
    output "            type:   r      p      sc        l       sp   "
    display_blank_line
  end

  def display_invalid_message
    display_blank_line
    prompt "That's not a valid choice."
    display_blank_line
  end

  def return_move(choice)
    case choice
    when 'r', 'rock' then 'rock'
    when 'p', 'paper' then 'paper'
    when 'sc', 'scissors' then 'scissors'
    when 'l', 'lizard' then 'lizard'
    when 'sp', 'spock' then 'spock'
    end
  end

  def choose
    choice = nil
    display_choose_message
    loop do
      cursor
      choice = gets.chomp.strip.downcase
      break if (Move::VALUES + Move::OPTIONS).include?(choice)
      display_invalid_message
    end
    self.move = Move.new(return_move(choice))
  end
end

class Computer < Player
  attr_reader :name

  CHARACTERS = %w(cubone r2d2 terminator luna hal)

  def initialize
    @name = "luna"
    set_name(@name)
  end

  def set_name(char)
    @name = char
    case char
    when 'luna' then @personality = Luna.new
    when 'cubone' then @personality = Cubone.new
    when 'r2d2' then @personality = R2D2.new
    when 'terminator' then @personality = Terminator.new
    when 'hal' then @personality = Hal.new
    end
  end

  def choose(history, current_set)
    if @name == 'hal'
      self.move = Move.new(@personality.get_move(history, current_set))
    else
      self.move = Move.new(@personality.sample_array.sample)
    end
    @personality.moves << move
    @personality.update_actuals(move)
  end

  def display_char_menu
    output ljustify(" ", 11) + ljustify(" ", 17) + ljustify("Select Computer Opponent", 29)
    display_blank_line
    output ljustify(" ", 11) + ljustify(" ", 17) + ljustify("L.  Luna", 29) if @name != 'luna'
    output ljustify(" ", 11) + ljustify(" ", 17) + ljustify("C.  Cubone", 29) if @name != 'cubone'
    output ljustify(" ", 11) + ljustify(" ", 17) + ljustify("R.  R2D2", 29) if @name != 'r2d2'
    output ljustify(" ", 11) + ljustify(" ", 17) + ljustify("T.  Terminator", 29) if @name != 'terminator'
    output ljustify(" ", 11) + ljustify(" ", 17) + ljustify("H.  Hal", 29) if @name != 'hal'
    display_blank_line
    output ljustify(" ", 11) + ljustify(" ", 17) + ljustify("B   Back to main menu", 29)
    display_blank_line
  end

  def get_char_selection
    display_char_menu
    loop do
      cursor
      choice = gets.chomp.downcase
      display_blank_line
      action(choice)
      break if %w(b l c r t h).include?(choice)
      output "Invalid selection, try again."
    end
  end

  private

  def action(choice)
    case choice
    when 'l' then set_name('luna')
    when 'c' then set_name('cubone')
    when 'r' then set_name('r2d2')
    when 't' then set_name('terminator')
    when 'h' then set_name('hal')
    end
  end
end

class Personality
  include DisplayMethods
  attr_reader :target_percent, :actual_percent
  attr_accessor :moves

  def initialize
    @moves = []
    @target_percent = { Move::VALUES => 1.0 }
    @actual_count = Hash.new(0)
    @actual_percent = Hash.new(0)
  end

  def update_actuals(move)
    @target_percent.keys.each do |array|
      @actual_count[array] += 1 if array.include?(move.value)
    end

    @target_percent.keys.each do |array|
      @actual_percent[array] = (@actual_count[array].to_f / @actual_count.values.sum).round(3)
    end
  end

  def sample_array
    diffs = @target_percent.map do |array, target|
      [array, target - @actual_percent[array]]
    end
    p diffs
    diffs.max_by { |subarr| subarr[1] }[0]
  end
end

class Luna < Personality
  # Luna : picks randomly 100% of the time
  def initialize
    super
    @target_percent = { Move::VALUES => 1.0 }
  end
end

class Cubone < Personality
  # Cubone :  picks rock 70% of the time, picks lizard 20% of the time, remaining random 10% of the time
  def initialize
    super
    @target_percent = { ['rock'] => 0.7, ['lizard'] => 0.2, ['paper', 'scissors','spock'] => 0.1 }
  end
end

class R2D2 < Personality
  # R2D2 : picks paper 50% of the time, lizard 30% of the time, never scissors, remaining random 20% of the time
  def initialize
    super
    @target_percent = { ['paper'] => 0.5, ['lizard'] => 0.3, ['rock', 'spock'] => 0.20 }
  end
end

class Terminator < Personality
  # Terminator : picks scissors OR spock 60% of the time, picks remaining random 40% of the time
  def initialize
    super
    @target_percent = { ['scissors', 'spock'] => 0.6, ['lizard', 'rock', 'paper'] => 0.40 }
  end
end

class Hal < Personality
  def initialize
    super
  end

  def get_move(history, current_set)
    most_common_moves = most_common_moves(history, current_set)
    winning_moves = most_common_moves.map { |player_move| Move.loses_vs(player_move) }.flatten
    get_win_vs(winning_moves)
  end

  private

  def most_common_moves(history, current_set)
    all_games = history.filter_games('hal') + current_set
    moves_count = all_games.map(&:human_move).tally
    get_max_keys(moves_count)
  end

  def get_win_vs(winning_moves)
    return Move::VALUES.sample if winning_moves.empty?
    get_max_keys(winning_moves.tally).sample
  end

  def get_max_keys(hash)
    max_count = hash.values.max
    hash.select { |_, v| v == max_count }.keys
  end
end

class Game
  include DisplayMethods
  attr_reader :computer_name, :human_name, :computer_move, :human_move

  def initialize(human, computer, winner)
    @human_name = human.name
    @human_move = human.move.value
    @computer_name = computer.name
    @computer_move = computer.move.value
    @winner = winner
  end

  # rubocop:disable Layout/LineLength
  def to_s
    ljustify("[ #{@human_name} vs #{@computer_name.capitalize}", 30) + " : " + ljustify("#{@human_move} vs #{@computer_move}", 20) + " : " + ljustify("#{@winner == 'tie' ? 'tie' : @winner + ' wins'}", 20) + "]"
  end
  # rubocop:enable Layout/LineLength
end

class History
  include DisplayMethods
  def initialize
    @sets = []
  end

  def add_set(set, winner, score)
    @sets << { winner: winner, score: score, games: set }
  end

  def display
    if @sets.empty?
      output "You haven't played any games, yet."
    else
      clear_screen
      display_blank_line
      output ljustify("Score", 34) + ljustify("Winner", 20)
      display_blank_line
      @sets.each do |set|
        output ljustify(set[:score], 34) + ljustify(set[:winner], 20)
      end
    end
    pause
  end

  def display_all
    Computer::CHARACTERS.each do |character|
      clear_screen
      display_blank_line
      output "Matches with #{character.capitalize}:"
      display_blank_line
      display_filtered_games(character)
    end
  end

  def get_all_games
    all_games = []
    @sets.each do |hash|
      all_games += hash[:games]
    end
    all_games
  end

  def filter_games(name)
    games = []
    @sets.each do |set|
      set[:games].each do |game|
        games << game if game.computer_name == name
      end
    end
    games
  end

  def display_filtered_games(name)
    games = filter_games(name)
    output "  ...nothing yet" if games.empty?
    games.each do |game|
      output game.to_s
    end
    display_blank_line
    display_blank_line
    display_blank_line
    pause
  end
end

class Scoreboard
  include DisplayMethods

  def initialize(first_to, human_name, computer_name)
    @human = 0
    @computer = 0
    @winning_score = first_to
    @human_name = human_name
    @computer_name = computer_name
  end

  # rubocop:disable Layout/LineLength
  def draw_board
    clear_screen
    display_blank_line
    output '       +-----------------+-----------------+      '
    output "       | #{@human_name.center(15)} | #{@computer_name.center(15)} |      "
    output '       +-----------------+-----------------+      '
    output "WINS   |        #{@human}        |        #{@computer}        |      "
    output '       +-----------------+-----------------+      '
    display_blank_line
  end
  # rubocop:enable Layout/LineLength

  def add_human
    @human += 1
  end

  def add_computer
    @computer += 1
  end

  def winner?
    return true if @human == @winning_score || @computer == @winning_score
    false
  end

  def winner
    return @human_name if @human == @winning_score
    @computer_name
  end

  def string
    "#{@human_name} #{@human} vs #{@computer_name} #{@computer}"
  end
end

class RPSGame
  include DisplayMethods
  attr_accessor :human, :computer

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

  def initialize
    @human = Human.new
    @computer = Computer.new
    @history = History.new
    @play_to = 3
  end

  private

  # rubocop:disable Layout/LineLength, Metrics/MethodLength
  def display_header
    output '+---------------------------------------------------------------------------+'
    output '|    R O C K    P A P E R    S C I S S O R S    L I Z A R D    S P O C K    |'
    output '+---------------------------------------------------------------------------+'
    display_blank_line
  end

  def display_welcome_message
    clear_screen
    display_header
    output "This is an updated version of Rock, Paper, Scissors."
    output "Give it a go, and you'll figure it out."
    display_blank_line
    display_blank_line
    pause
  end

  def display_menu
    clear_screen
    display_header
    output ljustify(" ", 11) + ljustify("Current settings", 17) + ljustify(" ", 29)
    display_blank_line
    output ljustify("Player:", 11) + ljustify(@human.name, 17) + ljustify("1.  Change player", 29)
    output ljustify("Computer:", 11) + ljustify(@computer.display_name, 17) + ljustify("2.  Change computer", 29)
    output ljustify("First to:", 11) + ljustify("#{@play_to} games", 17) + ljustify("3.  Change games to play to", 29)
    output ljustify(" ", 11) + ljustify(" ", 17) + ljustify("4.  View game history", 29)
    output ljustify(" ", 11) + ljustify(" ", 17) + ljustify("5.  View match detail", 29)
    display_blank_line
    output ljustify(" ", 11) + ljustify(" ", 17) + ljustify("Q   Quit", 29)
    output ljustify(" ", 11) + ljustify(" ", 17) + ljustify("P   Play the game!!", 29)
    display_blank_line
  end

  def display_choices
    # output '        +-----------------+-----------------+      '
    output "         #{human.move.to_s.center(15)} vs #{computer.move.to_s.center(15)}       "
    # output '        +-----------------+-----------------+      '
    display_blank_line
  end

  def display_battle_message
    draw_layout
    display_blank_line
    output get_battle_message(@human.move, @computer.move)
    display_blank_line
    display_blank_line
  end
  # rubocop:enable Layout/LineLength, Metrics/MethodLength

  def display_goodbye_message
    output "Thanks for playing Rock, Paper, Scissors, Lizard, Spock.  Good bye!"
    display_blank_line
  end

  def get_battle_message(hmove, cmove)
    msg = OUTCOME_MESSAGES[[hmove.value, cmove.value].sort]
    return "" if msg.nil?
    "... #{msg} ..."
  end

  def determine_winner
    display_battle_message
    if @human.move > @computer.move then human_won
    elsif @human.move < @computer.move then computer_won
    else tie
    end
    display_blank_line
    pause
    @score.draw_board
  end

  def human_won
    box "#{@human.name} won!"
    @score.add_human
    @current_set << Game.new(@human, @computer, @human.name)
  end

  def computer_won
    output "#{@computer.display_name} won!"
    @score.add_computer
    @current_set << Game.new(@human, @computer, @computer.display_name)
  end

  def tie
    output "It's a tie!"
    @current_set << Game.new(human, computer, "tie")
  end

  def play_again?
    answer = nil
    output "Would you like to play again? (y/n)"
    loop do
      cursor
      answer = gets.chomp
      break if ['y', 'n'].include? answer.downcase
      output "Sorry, must be y or n."
    end
    return true if answer == 'y'
    false
  end

  def draw_layout
    @score.draw_board
    display_choices
  end

  def display_final_message(winner)
    display_blank_line
    if winner == @human.name
      output "Good job - you beat #{@computer.display_name}!"
    else
      output "Tough break - better luck next time!"
    end
    display_blank_line
    display_blank_line
  end

  def setup_new_game
    @score = Scoreboard.new(@play_to, @human.name, @computer.display_name)
    @score.draw_board
    @current_set = []
  end

  def change_play_to
    output "How many games do you want to play to?"
    cursor
    gets.chomp.to_i
  end

  def choose_moves
    human.choose
    computer.choose(@history, @current_set)
  end

  def winning_actions
    display_final_message(@score.winner)
    @history.add_set(@current_set, @score.winner, @score.string)
  end

  def play_game
    loop do
      setup_new_game
      loop do
        choose_moves
        determine_winner
        break if @score.winner?
      end
      winning_actions
      break unless play_again?
    end
  end

  def menu_action(choice)
    case choice
    when '1' then @human.set_name
    when '2' then @computer.get_char_selection
    when '3' then @play_to = change_play_to
    when '4' then @history.display
    when 'p' then play_game
    when '5' then @history.display_all
    end
  end

  public

  def start
    display_welcome_message

    loop do
      display_menu
      cursor
      choice = gets.chomp.downcase
      display_blank_line
      break if choice == 'q'
      menu_action(choice)
    end

    display_goodbye_message
  end
end

RPSGame.new.start
