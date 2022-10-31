require 'pry'

INITIAL_MARKER = ' '
PLAYER_MARKER = 'X'
COMPUTER_MARKER = 'O'

FIRST_TO = 2
CORNERS = [1, 3, 7, 9]
EDGES = [2, 4, 6, 8]
WINNING_LINES = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] +  # rows
                [[1, 4, 7], [2, 5, 8], [3, 6, 9]] +  # cols
                [[1, 5, 9], [3, 5, 7]] # diagonals

def prompt(msg)
  puts " => #{msg}"
end

def joinor(array, delim = ', ', last = 'or')
  string = ''
  array.each_with_index do |element, index|
    string << element.to_s + delim unless index >= array.size - 2
    string << element.to_s + delim + last + ' ' if index == array.size - 2
    string << element.to_s if index == array.size - 1
  end
  string
end

# rubocop:disable Metrics/AbcSize
def display_board(brd)
  puts ""
  puts " You're '#{PLAYER_MARKER}'. Computer is '#{COMPUTER_MARKER}'."
  puts ""
  puts " #{num(1,brd)}    |#{num(2,brd)}    |#{num(3,brd)}"
  puts "   #{brd[1]}  |  #{brd[2]}  |  #{brd[3]}"
  puts "      |     |"
  puts " -----+-----+-----"
  puts " #{num(4,brd)}    |#{num(5,brd)}    |#{num(6,brd)}"
  puts "   #{brd[4]}  |  #{brd[5]}  |  #{brd[6]}"
  puts "      |     |"
  puts " -----+-----+-----"
  puts " #{num(7,brd)}    |#{num(8,brd)}    |#{num(9,brd)}"
  puts "   #{brd[7]}  |  #{brd[8]}  |  #{brd[9]}"
  puts "      |     |"
  puts ""
end
# rubocop:enable Metrics/AbcSize

def num(num, brd)
  if num == 5 && first_move?(brd)
    " "
  elsif brd[num] == INITIAL_MARKER
    num.to_s
  else
    " "
  end
end

def initialize_board
  new_board = {}
  (1..9).each { |num| new_board[num] = INITIAL_MARKER }
  new_board
end

def empty_squares(brd)
  brd.keys.select { |num| brd[num] == INITIAL_MARKER }
end

def player_places_piece!(brd)
  square = ''
  if first_move?(brd)
    valid_moves = empty_squares(brd).select{ |num| num != 5 }
  else
    valid_moves = empty_squares(brd)
  end

  loop do
    prompt "Choose a square (#{joinor(valid_moves)}):"
    square = gets.chomp.to_i
    break if valid_moves.include?(square)
    prompt "Sorry, that's not a valid choice."
  end
  brd[square] = PLAYER_MARKER
end

def computer_places_piece!(brd)
  def_move = check_defense(brd)
  off_move = check_offense(brd)
  if off_move
    square = off_move
  elsif def_move
    square = def_move
  else
    square = next_best_move(brd)
  end
  brd[square] = COMPUTER_MARKER
end

def first_move?(brd)
  return true if brd.values.count(INITIAL_MARKER) == 9 || brd.values.count(INITIAL_MARKER) == 8
  return false
end

def get_third_move(brd, line, marker)
  move = brd.select do |key,value| 
    line.include?(key) && value == marker
  end
  move.keys[0]
end

def check_defense(brd)
  move = nil
  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(PLAYER_MARKER) == 2 && brd.values_at(*line).include?(INITIAL_MARKER)
      move = get_third_move(brd, line, INITIAL_MARKER)
    end
  end
  move
end

def check_offense(brd)
  move = nil
  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(COMPUTER_MARKER) == 2 && brd.values_at(*line).include?(INITIAL_MARKER)
      move = get_third_move(brd, line, INITIAL_MARKER)
    end
  end
  move
end

def next_best_move(brd)
  player_move = brd.select { |_,v| v == PLAYER_MARKER }.keys[0]
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
    check_open_lines(brd)
  end
end

def check_open_lines(brd)
  move = nil
  line_options = []
  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(COMPUTER_MARKER) == 1 && brd.values_at(*line).count(PLAYER_MARKER) == 0 && brd.values_at(*line).include?(INITIAL_MARKER)
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

def board_full?(brd)
  empty_squares(brd).empty?
end

def someone_won?(brd)
  !!get_game_outcome(brd)
end

def get_game_outcome(brd)
  WINNING_LINES.each do |line|
    if brd.values_at(*line).count(PLAYER_MARKER) == 3
      return 'player'
    elsif brd.values_at(*line).count(COMPUTER_MARKER) == 3
      return 'computer'
    end
  end
  nil
end

def initialize_score
  { player: 0, computer: 0 }
end

def place_piece!(board, current_player)
  case current_player
  when 'player' then player_places_piece!(board)
  when 'computer' then computer_places_piece!(board)
  end
end

def alternate_player(current_player)
  case current_player
  when 'player' then 'computer'
  when 'computer' then 'player'
  end
end

def display_message(outcome)
  case outcome
  when 'player' then puts 'Player won!'
  when 'computer' then puts 'Computer won!'
  when nil then puts "It's a tie!"
  end
  get_pause
end

def get_pause
  puts ""
  prompt "press enter to continue"
  gets.chomp
end

def tally_score(outcome, score)
  case outcome
  when 'player' then score[:player] += 1
  when 'computer' then score[:computer] += 1
  end
end

def draw_screen_layout(board, score)
  system 'clear'
  puts "Player: #{score[:player]}   Computer: #{score[:computer]}"
  display_board(board)
end

def play_again?
  prompt "Play again? (y or n)"
  answer = gets.chomp
  return false unless answer.downcase.start_with?('y')
  true
end

def overall_winner?(score)
  return 'player' if score[:player] == FIRST_TO
  return 'computer' if score[:computer] == FIRST_TO
  nil
end

def display_overall_message(overall_winner)
  case overall_winner
  when 'player' then puts "Great job - you beat the computer in a first-to-#{FIRST_TO} tic tac toe extravaganza!"
  when 'computer' then puts "Good effort!  The computer beat you to #{FIRST_TO} this time.  Don't give up!"
  end
end

def get_starting_player
  puts " To decide who goes first, pick (H)eads or (T)ails (h or t):"
  answer = gets.chomp.downcase
  flip = %w(heads tails).sample

  if answer[0] == flip[0]
    puts " The flip turned up ... #{flip}. Do you want to go first? (y or n)"
    first = gets.chomp.downcase
    return 'player' if first.start_with?('y')
    return 'computer'
  else
    puts " The flip turned up ... #{flip}."
    computer_decision = %w(first second).sample
    puts " The computer wants to go #{computer_decision}."
    get_pause
    return 'computer' if computer_decision == 'first'
    return 'player'
  end
end

def inner_join(array1, array2)
  new_array = []
  array1.each do |el|
    new_array << el if array2.include?(el)
  end
  new_array
end

def display_instructions
  system 'clear'
  puts "  T I C   T A C   T O E"
  puts "  -----   -----   -----"
  puts ""
  puts "  In this version, no one can play the middle on their first move."
  puts "  The first player to get 3 in a row (horizontal, vertical, or diagonal) wins the game."
  puts "  The first player to win #{FIRST_TO} games is the overall winner."
  puts ""
  get_pause
end

# START
display_instructions

loop do
  score = initialize_score
  board = initialize_board

  loop do
    current_player = get_starting_player
  
    loop do
      draw_screen_layout(board, score)
      place_piece!(board, current_player)
      current_player = alternate_player(current_player)
      break if someone_won?(board) || board_full?(board)
    end

    outcome = get_game_outcome(board)
    tally_score(outcome, score)
    
    draw_screen_layout(board, score)
    display_message(outcome)

    break if overall_winner?(score)
    board = initialize_board
  end

  draw_screen_layout(board, score)
  display_overall_message(overall_winner?(score))

  break unless play_again?
end

prompt "Thanks for playing tic tac toe!"
