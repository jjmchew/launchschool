require 'pry'
require 'pry-byebug'

SUITS = %w(clubs hearts spades diamonds)
VALUES = %w(A 2 3 4 5 6 7 8 9 10 J Q K)

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
  { player: [], dealer: [] }
end

def get_display_card(card)
  card_string = "[ "
  card_string << (card[:value] + " " + card[:suit]).center(10)
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
      print "[  unknown   ]  " if index == 0
      print get_display_card(card) unless index == 0
    end
    blank_line
  end
end

def draw_layout(hands, option = 'play')
  system "clear"
  blank_line
  puts " T w e n t y - O n e"
  blank_line
  blank_line
  puts " Dealer has:  "
  display_hand(option, hands[:dealer])
  blank_line
  puts " You have:"
  display_hand('all', hands[:player])
  blank_line
end

def calculate_hand(hand)
  values = hand.map { |card| card[:value] }

  total = 0
  values.each do |value|
    total += if value == "A" then 11
             elsif value.to_i == 0 then 10
             else value.to_i
             end
  end

  values.select { |value| value == "A" }.count.times do
    total -= 10 if total > 21
  end

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

def dealer_action(hands, deck)
  draw_layout(hands, 'all')

  loop do
    break if calculate_hand(hands[:dealer]) >= 17
    puts " ... dealer hits"
    blank_line
    hands[:dealer] += deal_cards(1, deck)
    pause
    draw_layout(hands, 'all')
  end
  puts " Dealer busts!" if calculate_hand(hands[:dealer]) > 21
  blank_line
  pause
end

def determine_winner(hands)
  player_total = calculate_hand(hands[:player])
  dealer_total = calculate_hand(hands[:dealer])

  if player_total > 21 then 'dealer'
  elsif dealer_total > 21 then 'player'
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

def display_win_message(winner, num)
  case winner
  when 'player' then puts " You win with #{num}!"
  when 'dealer' then puts " Dealer wins with #{num}!"
  end
end

loop do
  deck = initialize_deck
  hands = initialize_hands

  hands[:player] += deal_cards(2, deck)
  hands[:dealer] += deal_cards(2, deck)
  draw_layout(hands)

  loop do
    action = player_action
    hands[:player] += deal_cards(1, deck) if action == 'hit'
    draw_layout(hands)
    break if calculate_hand(hands[:player]) > 21 || action == 'stay'
  end

  if calculate_hand(hands[:player]) > 21
    puts " Player busts!"
    blank_line
    pause
  else
    dealer_action(hands, deck)
  end

  draw_layout(hands, 'all')

  winner = determine_winner(hands)
  display_win_message(winner, calculate_hand(hands[winner.to_sym]))

  break unless play_again?
end

puts " Thanks for playing twenty-one!"
blank_line
