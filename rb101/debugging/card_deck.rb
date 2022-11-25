cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, :jack, :queen, :king, :ace]

deck = { :hearts   => cards.dup,
         :diamonds => cards.dup,
         :clubs    => cards.dup,
         :spades   => cards.dup }

def score(card)
  case card
  when :ace   then 11
  when :king  then 10
  when :queen then 10
  when :jack  then 10
  else card
  end
end

# Pick one random card per suit

player_cards = []
deck.keys.each do |suit|
  cards = deck[suit]
  cards.shuffle!
  player_cards << cards.pop
end

# Determine the score of the remaining cards in the deck
p deck

sum = deck.reduce(0) do |sum, (_, remaining_cards)|
  remaining_cards.map! do |card|
    score(card)
  end

  sum += remaining_cards.sum
end

puts sum

=begin
The TypeError on line 34 occurs since `remaining_cards` still contains symbols to represent face cards.  The `map` method called on `remaining.cards` on line 30 is non-destructive and the return array with the symbol elements replaced by integer elements is never assigned to be used. To fix this the `map!` function can be called instead to update the remaining_cards array.

The sum is lower than it should be since the same card is removed for every suit - i.e., 16 cards are moved, not just 4.  This is because within the hash, each suit is assigned to the same array of cards via the local variable `cards`.  Any destructive (mutating) change to that array (e.g., the `pop` method called for each `suit`) will then be reflected for every suit.  Calling the `dup` method on `cards` when assigning the deck will ensure that each suit is an independent array object.

=end