require 'pry'
require 'pry-byebug'

SUITS = %w(clubs hearts spades diamonds)
VALUES = %w(A 2 3 4 5 6 7 8 9 10 J Q K)
DEALER_STAYS_ON = 17
TARGET_TOTAL = 21
TARGET_GAMES = 2

def initialize_deck
  deck = []
  SUITS.each do |suit|
    VALUES.each { |name| deck << { value: name, suit: suit } }
  end
  deck.shuffle!
end

def deal_cards(num, deck)
  cards_dealt = []
  num.times do
    cards_dealt << deck.shift
  end
  cards_dealt
end

def initialize_hands
  { player: [], dealer: [], player_total: 0, dealer_total: 0 }
end

def initialize_score
  { player: 0, dealer: 0 }
end

def get_display_card(card)
  card_string = "[ "
  card_string << (card[:value] + " " + card[:suit]).center(11)
  card_string << " ]"
end

def display_hand(option, hand)
  print " "
  case option
  when 'all'
    hand.each { |card| print get_display_card(card) + "  " }
    blank_line
  when 'play'
    hand.each_with_index do |card, index|
      print "[   unknown   ]  " if index == 0
      print get_display_card(card) unless index == 0
    end
    blank_line
  end
end

def draw_layout(hands, score, option = 'play')
  draw_header(score)

  blank_line
  puts " Dealer has:  "
  display_hand(option, hands[:dealer])
  blank_line
  puts " You have:"
  display_hand('all', hands[:player])
  blank_line
end

def draw_header(score)
  system "clear"
  blank_line
  puts " T w e n t y - O n e"
  blank_line
  puts " Closest to #{TARGET_TOTAL} wins."
  puts " Dealer stays on #{DEALER_STAYS_ON}"
  puts " Tie goes to the dealer."
  puts " First to win #{TARGET_GAMES} rounds is the overall winner."
  blank_line
  puts " Player : #{score[:player]} games     Dealer : #{score[:dealer]} games"
  blank_line
  blank_line
end

def update_total(hands, who, total)
  case who
  when :player then hands[:player_total] = total
  when :dealer then hands[:dealer_total] = total
  end
end

def calculate_total(hands, who)
  values = hands[who].map { |card| card[:value] }

  total = 0
  values.each do |value|
    total += if value == "A" then 11
             elsif value.to_i == 0 then 10
             else value.to_i
             end
  end

  values.select { |value| value == "A" }.count.times do
    total -= 10 if total > TARGET_TOTAL
  end

  update_total(hands, who, total)
  total
end

def blank_line
  puts ""
end

def prompt(msg)
  puts " => #{msg}"
end

def player_action
  prompt " Hit or stay (h or s)? "
  print ' '
  action = ''
  loop do
    action = gets.chomp.downcase
    break if %w(h s).include?(action[0])
    prompt " Sorry, that's an invalid choice.  Try again: "
  end

  case action[0]
  when 'h' then 'hit'
  when 's' then 'stay'
  end
end

def pause
  prompt "   press enter to continue"
  print " "
  gets.chomp
end

def dealer_action(hands, deck, score)
  draw_layout(hands, score, 'all')

  loop do
    break if calculate_total(hands, :dealer) >= DEALER_STAYS_ON
    puts " ... dealer hits"
    blank_line
    hands[:dealer] += deal_cards(1, deck)
    pause
    draw_layout(hands, score, 'all')
  end
  puts " Dealer busts!" if hands[:dealer_total] > TARGET_TOTAL
  blank_line
  pause
end

def determine_winner(hands)
  player_total = hands[:player_total]
  dealer_total = hands[:dealer_total]

  if player_total > TARGET_TOTAL then 'dealer'
  elsif dealer_total > TARGET_TOTAL then 'player'
  elsif player_total == dealer_total then 'dealer'
  elsif dealer_total > player_total then 'dealer'
  elsif player_total > dealer_total then 'player'
  end
end

def play_again?
  blank_line
  prompt " Play again? (y or n)"
  print ' '
  answer = gets.chomp
  return false unless answer.downcase.start_with?('y')
  true
end

def display_win_message(winner, hands)
  blank_line
  case winner
  when 'player' then puts " You win with #{hands[:player_total]}!"
  when 'dealer' then puts " Dealer wins with #{hands[:dealer_total]}!"
  end
  blank_line
  pause
end

def increment_score(score, winner)
  score[winner.to_sym] += 1
end

def overall_winner?(score)
  if score[:player] == TARGET_GAMES then 'player'
  elsif score[:dealer] == TARGET_GAMES then 'dealer'
  end
end

def display_overall_message(winner)
  blank_line
  case winner
  when 'player' then puts " You beat the dealer! "
  when 'dealer'
    puts " Dealer wins!"
    puts " You know what they say... the house always wins..."
  end
  blank_line
end

loop do
  score = initialize_score

  loop do
    deck = initialize_deck
    hands = initialize_hands

    hands[:player] += deal_cards(2, deck)
    hands[:dealer] += deal_cards(2, deck)
    draw_layout(hands, score)

    loop do
      action = player_action
      hands[:player] += deal_cards(1, deck) if action == 'hit'
      draw_layout(hands, score)
      break if calculate_total(hands, :player) > TARGET_TOTAL ||
               action == 'stay'
    end

    if hands[:player_total] > TARGET_TOTAL
      puts " Player busts!"
      blank_line
      pause
    else
      dealer_action(hands, deck, score)
    end

    calculate_total(hands, :dealer)
    draw_layout(hands, score, 'all')

    winner = determine_winner(hands)
    increment_score(score, winner)
    display_win_message(winner, hands)

    break if overall_winner?(score)
  end

  draw_header(score)
  display_overall_message(overall_winner?(score))

  break unless play_again?
end

puts " Thanks for playing twenty-one!"
blank_line
