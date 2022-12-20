module GameConstants
  WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] +  # rows
                  [[1, 4, 7], [2, 5, 8], [3, 6, 9]] +  # cols
                  [[1, 5, 9], [3, 5, 7]] # diagonals
  CORNERS = [1, 3, 7, 9]
  EDGES = [2, 4, 6, 8]
  INITIAL_MARKER = " "
  HUMAN_MARKER = "X"
  COMPUTER_MARKER = "O"
  PLAY_TO = 2
end

module ComputerPlayable
  include GameConstants

  def inner_join(array1, array2)
    new_array = []
    array1.each do |el|
      new_array << el if array2.include?(el)
    end
    new_array
  end

  def get_computer_square(brd, human_marker)
    def_move = check_defense(brd, human_marker)
    off_move = check_offense(brd)
    if off_move
      square = off_move
    elsif def_move
      square = def_move
    else
      square = next_best_move(brd, human_marker)
    end
    square
  end

  def check_defense(brd, human_marker)
    move = nil
    WINNING_LINES.each do |line|
      if brd.values_at(*line).map(&:marker).count(human_marker) == 2 && brd.values_at(*line).map(&:marker).include?(INITIAL_MARKER)
        move = get_third_move(brd, line, INITIAL_MARKER)
      end
    end
    move
  end
  
  def check_offense(brd)
    move = nil
    WINNING_LINES.each do |line|
      if brd.values_at(*line).map(&:marker).count(COMPUTER_MARKER) == 2 && brd.values_at(*line).map(&:marker).include?(INITIAL_MARKER)
        move = get_third_move(brd, line, INITIAL_MARKER)
      end
    end
    move
  end

  def next_best_move(brd, human_marker)
    player_move = brd.select { |_,v| v.marker == human_marker }.keys[0]
    first_move = first_move?(brd)
  
    if first_move && player_move == nil
      return CORNERS.sample
    elsif first_move && CORNERS.include?(player_move)
      return inner_join(CORNERS, empty_squares(brd)).sample
    elsif first_move && EDGES.include?(player_move)
      return CORNERS.sample
    elsif !first_move && empty_squares(brd).include?(5)
      return 5
    else
      check_open_lines(brd, human_marker)
    end
  end
  
  def check_open_lines(brd, human_marker)
    move = nil
    line_options = []
    WINNING_LINES.each do |line|
      if brd.values_at(*line).count(COMPUTER_MARKER) == 1 && brd.values_at(*line).count(human_marker) == 0 && brd.values_at(*line).include?(INITIAL_MARKER)
        line_options << line
      end
    end
    key_spots = find_key_spots(line_options.flatten)
    if key_spots.length != 0
      move = inner_join(key_spots, empty_squares(brd)).sample 
    else
      move = empty_squares(brd).sample
    end
  end
  
  def find_key_spots(array)
    # a 'key spot' is one that appears in multiple line options
    key_spots = []
    array.each { |spot| key_spots << spot if array.count(spot) >= 2 }
    key_spots.uniq
  end

  def first_move?(brd)
    return true if brd.values.map(&:marker).count(INITIAL_MARKER) == 9 || brd.values.map(&:marker).count(INITIAL_MARKER) == 8
    false
  end

  def get_third_move(brd, line, marker)
    move = brd.select do |key,value| 
      line.include?(key) && value.marker == marker
    end
    move.keys[0]
  end

  def empty_squares(brd)
    brd.keys.select { |num| brd[num].marker == INITIAL_MARKER }
  end
end

class Board
  include GameConstants
  def initialize
    @squares = {}
    reset
  end

  def reset
    (1..9).each { |key| @squares[key] = Square.new }
  end

  def []=(key, marker)
    @squares[key].marker = marker
  end

  # rubocop:disable Metrics/AbcSize, Metrics/MethodLength
  def draw
    puts ""
    puts "     |     |"
    puts "  #{@squares[1]}  |  #{@squares[2]}  |  #{@squares[3]}"
    puts "     |     |"
    puts "-----+-----+-----"
    puts "     |     |"
    puts "  #{@squares[4]}  |  #{@squares[5]}  |  #{@squares[6]}"
    puts "     |     |"
    puts "-----+-----+-----"
    puts "     |     |"
    puts "  #{@squares[7]}  |  #{@squares[8]}  |  #{@squares[9]}"
    puts "     |     |"
    puts ""
  end
  # rubocop:enable Metrics/AbcSize, Metrics/MethodLength

  def unmarked_keys
    @squares.keys.select { |key| @squares[key].unmarked? }
  end

  def full?
    unmarked_keys.empty?
  end

  def someone_won?
    !!winning_marker
  end

  def squares
    @squares
  end

  def winning_marker
    WINNING_LINES.each do |line|
      check = count_marker(@squares.values_at(*line))
      return check if check
    end
    nil
  end

  private

  def count_marker(squares)
    markers = squares.map(&:marker)
    markers.uniq.each do |marker|
      next if marker == Square::INITIAL_MARKER
      return marker if markers.count(marker) == 3
    end
    nil
  end
end

class Square
  include GameConstants

  attr_accessor :marker

  def initialize(marker=INITIAL_MARKER)
    @marker = marker
  end

  def to_s
    marker
  end

  def unmarked?
    marker == INITIAL_MARKER
  end
end

class Player
  include GameConstants
  attr_reader :marker, :name

  def initialize(marker)
    @marker = marker
    @name = ['Taylor', 'Chris', 'Pat', 'Dylan', 'Terry'].sample
  end

  def change_marker
    ans = nil
    puts "Enter your desired marker"
    loop do
      ans = gets.chomp
      break if ans[0] != COMPUTER_MARKER && ans[0] != " "
      puts "That marker is being used, please try again."
    end
    puts "Marker changed to #{ans[0]}"
    puts ""
    @marker = ans[0]
  end

  def change_name
    ans = nil
    puts "What's your name?"
    loop do
      ans = gets.chomp
      break unless ans == "" || ans == " "
      puts "Invalid name, please try again."
    end
    puts "Howdy, #{ans}!"
    puts ""
    @name = ans
  end
end

class Score
  def initialize(players)
    @players = players
    @score = Hash.new(0)
    reset
  end

  def [](player)
    @score[player]
  end

  def []=(player, score)
    @score[player] = score
  end

  def reset
    @players.each do |player|
      @score[player] = 0
    end
  end

  def overall_winner
    return 'human' if @score['human'] == TTTGame::PLAY_TO
    return 'computer' if @score['computer'] == TTTGame::PLAY_TO
    nil
  end
end

class TTTGame
  include GameConstants
  include ComputerPlayable

  attr_reader :board, :human, :computer, :score

  def initialize
    @board = Board.new
    @human = Player.new(HUMAN_MARKER)
    @computer = Player.new(COMPUTER_MARKER)
    @current_player = 'human'
    @score = Score.new(['human', 'computer'])
  end

  private

  def clear
    system("clear")
  end

  def display_welcome_message
    puts "Welcome to tic tac toe!"
    puts ""
  end

  def display_goodbye_message
    puts "Thanks for playing tic tac toe.  Goodbye!"
  end

  def display_board
    puts "#{@human.name} is '#{@human.marker}', #{@computer.name} is '#{COMPUTER_MARKER}'"
    puts "Score:    #{score['human']}            #{score['computer']}"
    board.draw
  end

  def clear_screen_and_display_board
    clear
    display_board
  end

  # rubocop:disable Layout/LineLength
  def toggle_player
    @current_player == 'human' ? @current_player = 'computer' : @current_player = 'human'
  end
  # rubocop:enable Layout/LineLength

  def current_player_moves
    @current_player == 'human' ? human_moves : computer_moves
    toggle_player
  end

  def joinor(array, delim = ',', last = 'or')
    case array.size
    when 0 then return ""
    when 1 then return array.first.to_s
    when 2 then return array.join(" #{last} ")
    else
      array[-2] = "#{array[-2]} #{last} #{array[-1]}"
      array.pop
    end
    array.join("#{delim} ")
  end

  def human_moves
    puts "Choose a square (#{joinor(board.unmarked_keys)})"
    square = nil
    loop do
      square = gets.chomp.to_i
      break if board.unmarked_keys.include?(square)
      puts "Sorry, that's not a valid choice."
    end
    board[square] = human.marker
  end

  def computer_moves
    board[get_computer_square(@board.squares, @human.marker)] = computer.marker
  end

  def display_result
    clear_screen_and_display_board
    case board.winning_marker
    when human.marker
      puts "#{human.name} wins!"
      @score['human'] += 1
    when computer.marker
      puts "#{computer.name} wins."
      @score['computer'] += 1
    else
      puts "It's a tie!"
    end
  end

  def play_again?
    answer = nil
    loop do
      puts "Would you like to play again? (y/n)"
      answer = gets.chomp.downcase
      break if %w(y n).include? answer
      puts "Sorry, must be y or n"
    end
    answer == 'y'
  end

  def reset_board
    puts "Let's play again!"
    puts ""
    puts "press enter to continue"
    gets.chomp
    board.reset
    clear
  end

  def reset_all
    score.reset
    board.reset
    clear
  end

  def player_move
    loop do
      current_player_moves
      break if board.someone_won? || board.full?
      clear_screen_and_display_board if @current_player == 'human'
    end
  end

  def display_overall_message(winner)
    case winner
    when 'human'
      puts "Good job #{human.name} - you won #{PLAY_TO} games!"
    when 'computer'
      puts "Tough break - #{computer.name} beat you to #{PLAY_TO} games.  Better luck next time!"
    end
  end

  def main_game
    loop do
      display_board
      player_move
      display_result
      break if score.overall_winner
      reset_board
    end
    display_overall_message(score.overall_winner)
  end

  public

  def play
    clear
    display_welcome_message
    human.change_marker
    human.change_name
    loop do
      main_game
      break unless play_again?
      reset_all
    end
    display_goodbye_message
  end
end

game = TTTGame.new
game.play
