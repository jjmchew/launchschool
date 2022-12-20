require 'pry'

module Displayable
  require 'io/console'
  DISPLAY_WIDTH = 80

  class Column
    attr_reader :content

    def initialize(content = [])
      @content = content
    end

    def add_row(content)
      if content.class == Array
        @content += content
      else
        @content += [content]
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
    p "Max row:  #{max_row(col_array)}"
    row = 0
    loop do
      row_string = ""
      (0...col_array.length).each do |col_idx|
        row_string += ljustify(col_array[col_idx].row(row), 25)
      end
      puts row_string
      row += 1
      break if row > max_row(col_array)
    end
  end

  def ljustify(msg, width)
    msg = msg || ""
    if width > msg.length
      "#{msg}#{' ' * (width - msg.length)}"
    else
      "#{msg[0...width]}"
    end
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

  def cursor
    print "#{' ' * (DISPLAY_WIDTH / 2 - 5)} >  ".center(DISPLAY_WIDTH / 2 - 2)
  end

  private

  def max_row(col_array)
    col_array.max_by { |col| col.content.length }.content.length
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
  attr_reader :hand, :total, :name

  def initialize
    new_hand
    @name = ""
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
    msg = "Busted".center(16) if busted?
    msg = "   Total : #{@total}" if !busted?
    msg
  end

  private

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
  attr_reader :num

  def initialize
    super
    @num = 0
  end

  def change_name(num)
    @num = num
    puts "Player #{num}:  What should we call you? (15 char max)"
    ans = nil
    loop do
      ans = gets.chomp.strip
      break unless ans == ""
      puts "Sorry, trying entering something else"
    end
    @name = ans[0, 15]
  end
end

class Dealer < Participant
  def initialize
    super
    @name = ['Sammy Shark', 'Count Cathy', 'Calamity Jane', 'One-eye Jack'].sample
  end
end

class Game
  include Displayable

  TARGET_TOTAL = 21
  DEALER_STAYS_ON = 17

  def initialize
    @deck = Deck.new
    @players = []
    @dealer = Dealer.new
    @result = {}
  end

  def start
    col1 = Column.new(["Player 1 : James", "    Wins : 0", "   Total : 18"])
    col2 = Column.new(["Player 2 : Alex", "    Wins : 0", "   Total : 21"])
    display_cols([col1, col2])

    pause

    assign_new_players
    loop do
      play_round
      break unless play_again?
    end
  end

  private

  def assign_new_players
    num_players = new_players
    num_players.times do |num| 
      @players << Player.new
      clear_screen
      @players.last.change_name(num+1)
    end
  end

  def new_players
    clear_screen
    puts "How many players? (1 minimum - 5 max)"
    ans = nil
    loop do
      ans = gets.chomp.strip
      break if ans.to_i.to_s == ans && (1..5).cover?(ans.to_i)
      puts "Sorry, please enter a number between 1 and 5."
    end
    ans.to_i
  end

  def new_game
    @deck = Deck.new
    @players.each { |player| player.new_hand }
    @dealer.new_hand
    @result = {}
  end

  def play_round
    new_game
    deal_cards
    show_initial_cards
    @players.each { |player| choose_action(player) }
    dealer_turn
    show_result
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

  def deal_cards
    @players.each { |player| player.get(@deck.deal(1, face_up: true))}
    @dealer.get(@deck.deal(1))
    @players.each { |player| player.get(@deck.deal(1, face_up: true))}
    @dealer.get(@deck.deal(1, face_up: true))
  end

  def display_hand(player)
    hand = []
    player.hand.each { |card| hand << card.to_s }
    hand
  end

  def display_cards(show_dealer_total: false)
    clear_screen
    cols = []
    @players.each do |player|
      col = Column.new
      col.add_row(player.name)
      col.add_row(display_hand(player))
      col.add_row(player.status)
      col.add_row("")
      cols << col
    end
    col = Column.new
    col.add_row(@dealer.name)
    col.add_row(display_hand(@dealer))
    col.add_row("Total : ??".center(16)) if !show_dealer_total
    col.add_row("Total : #{@dealer.total}".center(16)) if show_dealer_total
    col.add_row("")
    cols << col

    display_cols(cols)
  end

  def display_win
    clear_screen
    @players.each do |player|
      puts player.name
      display_hand(player)
      puts player.status
      puts @result[player]
      puts ""
      puts ""
    end
    puts @dealer.name
    display_hand(@dealer)
    puts @dealer.status
    puts @result[@dealer]
    puts ""
  end

  def show_initial_cards
    display_cards
  end

  def player_choice
    puts "Do you want to Hit or Stay (h or s)?"
    ans = nil
    loop do
      ans = gets.chomp.downcase
      display_player_choice(ans)
      break if %w(h s).include?(ans)
      puts "Sorry, please enter h or s"
    end
    ans
  end

  def display_player_choice(ans)
    puts "I'll hit you with another card ..." if ans == 'h'
    puts "Alright - you'll stand pat." if ans == 's'
  end

  def display_deal(participant)
    participant.get(@deck.deal(1, face_up: true)) if participant.class == Player
    @dealer.get(@deck.deal(1, face_up: true)) if participant.class == Dealer
    wait
    display_cards(show_dealer_total: true)
  end

  def choose_action(player)
    puts "Okay, Player #{player.num} : "
    loop do
      ans = player_choice
      display_deal(player) if ans == 'h'
      break if player.busted? || ans == "s"
    end
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

  # rubocop:disable Layout/LineLength
  # rubocop:enable Layout/LineLength

  def assign_bust_win(players)
    players.each { |player| @result[player] = "Dealer busted - you win!" }
  end

  def assign_results
    busted, not_busted = @players.partition { |player| player.busted? }
    busted.each { |player| @result[player] = "You lose.".center(16) }
    
    if @dealer.busted? then assign_bust_win(not_busted)
    else
      not_busted.each do |player|
        if player.total > @dealer.total
          @result[player] = "You beat the dealer - you win!"
        elsif player.total == @dealer.total
          @result[player] = "Tie goes to dealer - you lose."
        else
          @result[player] = "Dealer beat you - you lose."
        end
      end
    end
  end

  def show_result
    assign_results
    display_win
  end
end

Game.new.start
