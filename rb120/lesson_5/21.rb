module Displayable
  require 'io/console'
  DISPLAY_WIDTH = 80
  COL_WIDTH = 30
  MAX_COLS = 3

  class Column
    attr_reader :content

    def initialize(content = [])
      @content = content
    end

    def add_row(content)
      @content = if content.class == Array then @content + content
                 else @content + [content.center(COL_WIDTH)]
                 end
    end

    def row(num)
      @content[num]
    end

    def to_s
      content.join("\n")
    end
  end

  def display_cols(col_array)
    idx = 0
    loop do
      print_rows(col_array[idx, MAX_COLS])
      display_blank_line
      idx += MAX_COLS
      break if idx >= col_array.length
    end
    display_blank_line
  end

  def ljustify(msg, width)
    msg ||= ""
    if width > msg.length
      "#{msg}#{' ' * (width - msg.length)}"
    else
      msg[0...width]
    end
  end

  def col_puts(num, msg)
    num = adjust_col_num(num)
    puts " " + " " * COL_WIDTH * (num - 1) + msg
  end

  def cursor(num=2.5)
    num = adjust_col_num(num)
    print "#{' ' * (num - 1) * COL_WIDTH} > "
  end

  def display_blank_line
    puts
  end

  def clear_screen
    system('clear') || system('cls')
  end

  def wait
    sleep 0.75
  end

  def pause
    display_blank_line
    puts "press any key to continue".center(DISPLAY_WIDTH)
    cursor
    $stdin.getch
    display_blank_line
  end

  private

  def adjust_col_num(num)
    return num if num <= MAX_COLS
    loop do
      num -= MAX_COLS
      break if num <= MAX_COLS
    end
    num
  end

  def max_row(col_array)
    col_array.max_by { |col| col.content.length }.content.length
  end

  def print_rows(col_array)
    row = 0
    loop do
      row_string = ""
      (0...col_array.length).each do |col_idx|
        row_string += ljustify(col_array[col_idx].row(row), COL_WIDTH)
      end
      puts row_string
      row += 1
      break if row > max_row(col_array)
    end
  end

  def box(message)
    output "****#{'*' * message.length}****"
    output "*   #{message}   *"
    output "****#{'*' * message.length}****"
  end

  def output(string)
    puts string.center(DISPLAY_WIDTH)
  end
end

class Deck
  SUITS = %w(clubs hearts spades diamonds)
  NAMES = %w(A 2 3 4 5 6 7 8 9 10 J Q K)
  VALUES = { "A" => 11, "J" => 10, "Q" => 10, "K" => 10 }

  def initialize
    @cards = []
    SUITS.each do |suit|
      NAMES.each do |name|
        value = if name.to_i.to_s == name then name.to_i
                else VALUES[name]
                end
        @cards << Card.new(suit, name, value)
      end
    end
    @cards.shuffle!
  end

  def deal(num, face_up: false)
    cards_dealt = []
    if face_up
      num.times { cards_dealt << @cards.shift.flip_up }
    else
      num.times { cards_dealt << @cards.shift }
    end
    cards_dealt
  end

  def to_s
    output = ""
    @cards.each_with_index do |card, index|
      output += if index % 5 == 0
                  card.to_s + " \n"
                else
                  card.to_s + " "
                end
    end
    output
  end
end

class Card
  attr_accessor :show, :suit, :name, :value

  def initialize(suit, name, value)
    @show = false
    @value = value
    @name = name
    @suit = suit
  end

  def flip_up
    @show = true
    self
  end

  def to_s
    if show
      "[ " + "#{@name} #{@suit}".center(12) + " ]"
    else
      "[ " + "unknown".center(12) + " ]"
    end
  end
end

class Participant
  attr_reader :hand, :total, :name, :wins, :money, :bet

  def initialize(initial_money = 0)
    new_hand
    @name = ""
    @wins = 0
    @money = initial_money
    @bet = 0
  end

  def get(card)
    @hand += card
    calc_total
  end

  def busted?
    @total > Game::TARGET_TOTAL
  end

  def new_hand
    @hand = []
    @total = 0
  end

  def status
    msg = "Busted".center(Displayable::COL_WIDTH) if busted?
    msg = "Total : #{@total}".center(Displayable::COL_WIDTH) if !busted?
    msg
  end

  def add_win
    return_bet = @bet.dup
    @wins += 1
    @money += @bet
    reset_bet
    -return_bet
  end

  def add_loss
    return_bet = @bet.dup
    @money -= @bet
    reset_bet
    +return_bet
  end

  private

  def reset_bet
    @bet = 0
  end

  def calc_total
    @total = @hand.reduce(0) { |total, card| total + card.value }
    count_aces.times { @total -= 10 if @total > Game::TARGET_TOTAL }
    @total
  end

  def count_aces
    @hand.count { |card| card.name == "A" }
  end
end

class Player < Participant
  include Displayable
  attr_reader :num

  def initialize(initial_money = 0)
    super(initial_money)
    @num = 0
  end

  def change_name(num)
    @num = num
    display_blank_line
    display_blank_line
    col_puts(num, "Player #{num}:  What should we call you? (15 char max)")
    @name = get_name(num)
  end

  def make_bet(player)
    clear_screen
    display_blank_line
    display_blank_line
    col_puts(num, "#{player.name}:  You've got $#{player.money}.")
    col_puts(num, "What do you want to bet?")
    @bet = get_bet(player)
  end

  private

  def get_name(num)
    ans = nil
    loop do
      cursor(num)
      ans = gets.chomp.strip
      display_blank_line
      break unless ans == ""
      col_puts(num, "Sorry, try entering something else")
    end
    ans[0, 15]
  end

  def get_bet(player)
    ans = nil
    loop do
      cursor(num)
      ans = gets.chomp.strip
      display_blank_line
      break if ans.to_i.to_s == ans && ans.to_i <= player.money
      # rubocop:disable Layout/LineLength
      col_puts(num, "Sorry, your bet should be a number less than your current money")
      # rubocop:enable Layout/LineLength
    end
    ans.to_i
  end
end

class Dealer < Participant
  attr_reader :tally

  def initialize(initial_money = 0)
    super
    # rubocop:disable Layout/LineLength
    @name = ['Sammy Shark', 'Count Cathy', 'Calamity Jane', 'One-eye Jack'].sample
    # rubocop:enable Layout/LineLength
    @tally = 0
  end

  def tally_house(amount)
    @tally += amount
  end
end

class Game
  include Displayable

  TARGET_TOTAL = 21
  DEALER_STAYS_ON = 17
  INITIAL_MONEY = 100

  def initialize
    @deck = Deck.new
    @players = []
    @dealer = Dealer.new
    @result = Hash.new("")
  end

  def start
    display_welcome_message
    assign_new_players
    loop do
      play_round
      break unless play_again?
    end
    display_goodbye_message
  end

  private

  # rubocop:disable Metrics/MethodLength, Metrics/AbcSize
  def display_welcome_message
    clear_screen
    box("Welcome to (simple) 21")
    display_blank_line
    output "Each player plays against the dealer;"
    output "Closest to #{TARGET_TOTAL} wins."
    output "Dealer stands on #{DEALER_STAYS_ON}."
    output "Tie goes to the dealer"
    display_blank_line
    output "In this version, you only win or lose your bet."
    output "There are no naturals, splits, doubling down, or insurance."
    display_blank_line
    pause
  end

  def make_player_col(player, include_result)
    col = Column.new
    col.add_row("")
    col.add_row(" == " + player.name + " == ")
    col.add_row("Wins : #{player.wins}")
    col.add_row("Money: $#{player.money}")
    col.add_row("Current Bet: $#{player.bet}")
    col.add_row("")
    col.add_row(display_hand(player))
    col.add_row("")
    col.add_row(player.status)
    col.add_row(@result[player]) if include_result
    col.add_row("")
    col
  end

  def make_dealer_col(show_dealer_total, include_result)
    col = Column.new
    col.add_row("")
    col.add_row(@dealer.name)
    col.add_row("*** DEALER ***")
    col.add_row("")
    col.add_row("House tally: $#{@dealer.tally}")
    col.add_row("")
    col.add_row(display_hand(@dealer))
    col.add_row("")
    col.add_row("Total : ??") if !show_dealer_total
    col.add_row("Total : #{@dealer.total}") if show_dealer_total
    col.add_row(@result[@dealer]) if include_result
    col.add_row("")
    col
  end
  # rubocop:enable Metrics/MethodLength, Metrics/AbcSize

  def display_goodbye_message
    display_blank_line
    output "Thanks for playing 21!"
    display_blank_line
  end

  def assign_new_players
    num_players = prompt_for_players
    num_players.times do |num|
      @players << Player.new(INITIAL_MONEY)
      clear_screen
      @players.last.change_name(num + 1)
    end
  end

  def prompt_for_players
    clear_screen
    display_blank_line
    display_blank_line
    display_blank_line
    output "How many players? (1 minimum - 5 max)"
    number_of_players
  end

  def number_of_players
    ans = nil
    loop do
      cursor
      ans = gets.chomp.strip
      display_blank_line
      break if ans.to_i.to_s == ans && (1..5).cover?(ans.to_i)
      output "Sorry, please enter a number between 1 and 5."
    end
    ans.to_i
  end

  def play_round
    new_game
    make_bets
    deal_cards
    display_cards
    @players.each { |player| choose_action(player) }
    dealer_turn
    show_result
  end

  def new_game
    @deck = Deck.new
    @players.each(&:new_hand)
    @dealer.new_hand
    @result = {}
  end

  def make_bets
    clear_screen
    @players.each do |player|
      player.make_bet(player)
    end
  end

  def play_again?
    answer = nil
    output "Would you like to play again? (y/n)"
    loop do
      cursor
      answer = gets.chomp.downcase
      display_blank_line
      break if %w(y n).include? answer
      output "Sorry, must be y or n"
    end
    answer == 'y'
  end

  def deal_cards
    @players.each { |player| player.get(@deck.deal(1, face_up: true)) }
    @dealer.get(@deck.deal(1))
    @players.each { |player| player.get(@deck.deal(1, face_up: true)) }
    @dealer.get(@deck.deal(1, face_up: true))
  end

  def display_cards(show_dealer_total: false, include_result: false)
    cols = assign_cols(show_dealer_total, include_result)

    clear_screen
    display_cols(cols)
  end

  def assign_cols(show_dealer_total, include_result)
    cols = []
    @players.each { |player| cols << make_player_col(player, include_result) }
    cols << make_dealer_col(show_dealer_total, include_result)
    cols
  end

  def display_hand(player)
    hand = []
    player.hand.each { |card| hand << card.to_s.center(COL_WIDTH) }
    hand
  end

  def choose_action(player)
    display_cards
    loop do
      ans = player_choice(player)
      display_deal(player) if ans == 'h'
      break if player.busted? || ans == "s"
    end
  end

  def player_choice(player)
    col_puts(player.num, "Okay, #{player.name}: ")
    col_puts(player.num, "Do you want to Hit or Stay (h or s)?")
    get_player_choice(player)
  end

  def get_player_choice(player)
    ans = nil
    loop do
      cursor(player.num)
      ans = gets.chomp.downcase
      display_player_choice(ans, player.num)
      break if %w(h s).include?(ans)
      col_puts(player.num, "Sorry, please enter h or s")
    end
    ans
  end

  def display_player_choice(ans, num)
    display_blank_line
    col_puts(num, "I'll hit you with another card ...") if ans == 'h'
    col_puts(num, "Alright - you'll stand.") if ans == 's'
  end

  def display_deal(participant)
    participant.get(@deck.deal(1, face_up: true)) if participant.class == Player
    @dealer.get(@deck.deal(1, face_up: true)) if participant.class == Dealer
    wait
    display_cards if participant.class == Player
    display_cards(show_dealer_total: true) if participant.class == Dealer
  end

  def dealer_turn
    @dealer.hand[0].flip_up
    display_cards(show_dealer_total: true)

    loop do
      break if @dealer.busted? || @dealer.total >= DEALER_STAYS_ON
      display_deal(@dealer)
    end
    pause
  end

  def show_result
    process_results
    display_cards(show_dealer_total: true, include_result: true)
  end

  def process_results
    busted, not_busted = @players.partition(&:busted?)

    busted.each { |player| assign_loss(player, "You lose.") }
    if @dealer.busted? then assign_bust_win(not_busted)
    else check_player_results(not_busted)
    end
  end

  def assign_loss(player, msg)
    @result[player] = msg
    amt = player.add_loss
    @dealer.tally_house(amt)
  end

  def assign_win(player, msg)
    @result[player] = msg
    amt = player.add_win
    @dealer.tally_house(amt)
  end

  def assign_bust_win(players)
    players.each { |player| assign_win(player, "Dealer busts. You win!") }
    @result[@dealer] = "Dealer busts."
  end

  def check_player_results(not_busted)
    @result[@dealer] = " "
    not_busted.each do |player|
      if player.total > @dealer.total
        assign_win(player, "You win with #{player.total}!")
      elsif player.total == @dealer.total
        assign_loss(player, "Tie - you lose.")
      else assign_loss(player, "You lose, Dealer has #{@dealer.total}.")
      end
    end
  end
end

Game.new.start
