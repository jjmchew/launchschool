SUITS = %w(clubs hearts spades diamonds)
NAMES = %w(A 2 3 4 5 6 7 8 9 10 J Q K)
VALUES = { "A" => 11, "J" => 10, "Q" => 10, "K" => 10 }
DEALER_STAYS_ON = 17
TARGET_TOTAL = 21
TARGET_GAMES = 3

def initialize_deck
  deck = []
  SUITS.each do |suit|
    NAMES.each do |name|
      value = if name.to_i.to_s == name then name.to_i
              else VALUES[name]
              end
      deck << { name: name, suit: suit, value: value }
    end
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
  card_string << (card[:name] + " " + card[:suit]).center(11)
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

def draw_layout(hands, score, totals_mode, option = 'play')
  calculate_total(hands, :player)
  calculate_total(hands, :dealer)

  draw_header
  draw_score(score)

  blank_line
  puts " Dealer has:  "
  display_hand(option, hands[:dealer])
  blank_line
  puts " You have:"
  display_hand('all', hands[:player])
  blank_line
  if totals_mode
    puts " Your total is currently: #{hands[:player_total]}"
    blank_line
  end
end

def draw_header
  system "clear"
  blank_line
  puts " T w e n t y - O n e"
  blank_line
  puts " Closest to #{TARGET_TOTAL} wins."
  puts " Dealer stays on #{DEALER_STAYS_ON}"
  puts " Tie goes to the dealer."
  puts " First to win #{TARGET_GAMES} rounds is the overall winner."
  blank_line
end

def draw_score(score)
  player = score[:player]
  dealer = score[:dealer]
  player_g = "game#{player == 1 ? ' ' : 's'}"
  dealer_g = "game#{dealer == 1 ? ' ' : 's'}"
  puts " Player : #{player} #{player_g}     Dealer : #{dealer} #{dealer_g}"
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
  total = values.reduce(0) { |tot, value| tot + value }

  names = hands[who].map { |card| card[:name] }
  names.select { |name| name == "A" }.count.times do
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

def get_user_input(options)
  answer = ''
  loop do
    print ' '
    answer = gets.chomp.downcase
    break if options.include?(answer)
    display_invalid_choice
  end
  answer
end

def display_invalid_choice
  prompt " Sorry, that's an invalid choice.  Try again: "
end

def hit_or_stay?
  prompt " Hit or stay (h or s)? "
  action = get_user_input(%w(h hit s stay))

  case action[0]
  when 'h' then 'hit'
  when 's' then 'stay'
  end
end

def player_action(hands, deck, score, totals_mode)
  loop do
    action = hit_or_stay?
    hands[:player] += deal_cards(1, deck) if action == 'hit'
    draw_layout(hands, score, totals_mode)
    break if hands[:player_total] > TARGET_TOTAL ||
             action == 'stay'
  end
end

def pause
  prompt "   press enter to continue"
  print " "
  gets.chomp
end

def display_player_bust
  puts " Player busts!"
  blank_line
  pause
end

def dealer_action(hands, deck, score, totals_mode)
  draw_layout(hands, score, totals_mode, 'all')

  loop do
    break if hands[:dealer_total] >= DEALER_STAYS_ON
    puts " ... dealer hits"
    blank_line
    hands[:dealer] += deal_cards(1, deck)
    pause
    draw_layout(hands, score, totals_mode, 'all')
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
  answer = get_user_input(%w(y yes n no))
  return true if answer[0] == 'y'
  return false if answer[0] == 'n'
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

def display_totals?
  draw_header
  blank_line
  puts " This game involves adding the values of the cards in your hand."
  puts "    Mode 1:  The total of your cards is automatically displayed."
  puts "    Mode 2:  No total is displayed."
  blank_line
  prompt " Would you like to play in Mode 1 or 2 (enter 1 or 2)?"
  answer = get_user_input(%w(1 2))
  return true if answer == '1'
  return false if answer == '2'
end

loop do
  score = initialize_score
  totals_mode = display_totals?

  loop do
    deck = initialize_deck
    hands = initialize_hands

    hands[:player] += deal_cards(2, deck)
    hands[:dealer] += deal_cards(2, deck)
    draw_layout(hands, score, totals_mode)

    player_action(hands, deck, score, totals_mode)

    if hands[:player_total] > TARGET_TOTAL then display_player_bust
    else dealer_action(hands, deck, score, totals_mode)
    end

    draw_layout(hands, score, totals_mode, 'all')

    winner = determine_winner(hands)
    increment_score(score, winner)
    display_win_message(winner, hands)

    break if overall_winner?(score)
  end

  draw_header
  draw_score(score)
  display_overall_message(overall_winner?(score))

  break unless play_again?
end

puts " Thanks for playing twenty-one!"
blank_line
