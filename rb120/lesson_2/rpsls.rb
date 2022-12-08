module DisplayMethods
  DISPLAY_WIDTH = 80

  def display_blank_line
    puts
  end

  def clear_screen
    system('clear') || system('cls')
  end

  def get_pause
    display_blank_line
    puts "press enter to continue".center(DISPLAY_WIDTH)
    cursor
    gets.chomp!
  end

  def prompt(message)
    puts "   => #{message}".center(DISPLAY_WIDTH)
  end

  def output(string)
    puts string.center(DISPLAY_WIDTH)
  end

  def cursor
    print "#{" " * (DISPLAY_WIDTH/2 - 5)} >  ".center(DISPLAY_WIDTH/2 - 2)
  end

  def box(message)
    output "****#{"*" * message.length}****"
    output "*   #{message}   *"
    output "****#{"*" * message.length}****"
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
    self.value == 'scissors'
  end

  def rock?
    self.value == 'rock'
  end

  def paper?
    self.value == 'paper'
  end

  def lizard?
    self.value == 'lizard'
  end

  def spock?
    self.value == 'spock'
  end

  def >(other_move)
    return false if self.value == other_move.value
    return true if WINS_AGAINST[self.value].include?(other_move.value) 
    false
  end

  def <(other_move)
    return false if self.value == other_move.value
    return true unless WINS_AGAINST[self.value].include?(other_move.value)
    false
  end

  def to_s
    return 'Spock' if self.value == 'spock'
    self.value
  end
end

class Player
  include DisplayMethods
  attr_accessor :move, :name

  def initialize
    set_name
  end
end

class Human < Player
  def set_name
    n = nil
    loop do
      output "What's your name?"
      cursor
      n = gets.chomp
      break unless n.empty?
      output "Sorry, must enter a value."
    end
    self.name = n
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
  def set_name
    self.name = ['R2D2', 'Hal', 'Chappie', 'Sonny', 'Number 5'].sample
  end

  def choose
    self.move = Move.new(Move::VALUES.sample)
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

  def display
    clear_screen
    display_blank_line
    output '       +-----------------+-----------------+      '
    output "       | #{@human_name.center(15)} | #{@computer_name.center(15)} |      "
    output '       +-----------------+-----------------+      '
    output "WINS   |        #{@human}        |        #{@computer}        |      "
    output '       +-----------------+-----------------+      '
    display_blank_line
  end

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
    if @human == @winning_score
      return @human_name
    else
      return @computer_name
    end
  end
end

class RPSGame
  include DisplayMethods

  PLAY_TO = 2
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

  attr_accessor :human, :computer

  def initialize
    @human = Human.new
    @computer = Computer.new
  end

  def display_welcome_message
    clear_screen
    output '+--------------------------------------------------------------------------+'
    output '|    R O C K    P A P E R    S C I S S O R S    S P O C K    L I Z A R D   |'
    output '+--------------------------------------------------------------------------+'
    display_blank_line
    output "This is an updated version of Rock, Paper, Scissors."
    output "Give it a go, and you'll figure it out."
    display_blank_line
    output "Winner is the first to win #{PLAY_TO} games."
    get_pause
  end

  def display_goodbye_message
    output "Thanks for playing Rock, Paper, Scissors.  Good bye!"
    display_blank_line
  end

  def get_outcome_message(hmove, cmove)
    msg = OUTCOME_MESSAGES[[hmove.value, cmove.value].sort]
    return "" if msg == nil
    "... #{msg} ..."
  end

  def display_winner
    display_blank_line
    # output "#{human.name} chose #{human.move}."
    # output "#{computer.name} chose #{computer.move}."
    # display_blank_line
    output "#{get_outcome_message(human.move, computer.move)}"
    display_blank_line
    display_blank_line
    win_message(human, computer)
    display_blank_line
    get_pause
  end

  def win_message(human, computer)
    if human.move > computer.move
      box "#{human.name} won!"
      @score.add_human
    elsif human.move < computer.move
      output "#{computer.name} won!"
      @score.add_computer
    else
      output "It's a tie!"
    end
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

  def display_choices
    # output '        +-----------------+-----------------+      '
    output "         #{human.move.to_s.center(15)} vs #{computer.move.to_s.center(15)}       "
    # output '        +-----------------+-----------------+      '
    display_blank_line
  end

  def draw_layout
    @score.display
    display_choices
  end

  def display_final_message(winner)
    display_blank_line
    if winner == @human.name
      output "Good job - you beat #{@computer.name}!"
    else
      output "Tough break - better luck next time!"
    end
    display_blank_line
    display_blank_line
  end

  def play
    display_welcome_message

    loop do
      @score = Scoreboard.new(PLAY_TO, @human.name, @computer.name)
      @score.display

      loop do
        human.choose
        computer.choose
        draw_layout
        display_winner
        @score.display
        break if @score.winner?
      end
      display_final_message(@score.winner)
      break unless play_again?
    end

    display_goodbye_message
  end
end

RPSGame.new.play


=begin
ToDos
- Add intro "menu":
    - allow 'configuration' :  player name, 
                            :  choose computer opponent (eventually will correlate to level of difficulty)
                            :  choose # of games to play to
    - 
- Don't initialize player name and computer name on instantiation of Player
    - change to invoked method, after "opening menu"
=end
