=begin
Twenty-one is a card game where players are trying to get the sum of their cards as close to 21 as possible, without going over.
Cards have the value of their numbers, Aces are 1 or 11, face cards are 10.
Each player is dealt 2 cards - 1 face up and 1 face down.
For each (non-dealer) player's turn, they can choose to "hit" or "stay".  For a "hit", the player is dealt another card (face up).
  For a "stay" the player chooses to end their turn and keep the cards they have.
  If the total values of the player's hand does not exceed 21, then the player can continue choosing to "hit" or "stay".
  If the total value of the player's hand exceeds 21, they are said to "bust".
For the dealer, the rules are similar, but with added restrictions:
  - If the total value of the dealer's hand is less than 17, then the dealer MUST hit
  - If the total value of the dealer's hand is 17 or more, then the dealer MUST stay
The winner of each hand is the one whose total value is closest to 21 (any player who has not 'bust').

nouns:
  - deck
  - card
  - hand
  - player
  - dealer
  - total

verbs:
  - hit
  - stay
  - deal
  - sum

Player
  - hand
  - busted?
  - total

  - hit
  - stay

Dealer
  - hand
  - busted?
  - total

  - hit
  - stay

Deck
  - cards
  - deal

Game
  - start
=end

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

  def deal(num)
    cards_dealt = []
    num.times { cards_dealt << @cards.shift }
    cards_dealt
  end

  def to_s
    output = ""
    @cards.each_with_index do |card, index| 
      if index % 5 == 0
        output += card.to_s + " \n"
      else
        output += card.to_s + " "
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

  def suit
    "confused"
  end

  def flip_up
    @show = true
  end

  def flip_down
    @show = false
  end

  def to_s
    if show
      "[" + "#{@name} #{@suit}".center(12) + "]"
    else
      "[" + "unknown".center(12) + "]"
    end
  end
end

class Participant
  attr_accessor :hand

  def initialize
    @hand = []
    @total = 0
  end

  def hit
  end

  def stay
  end

  def busted?
  end
end

class Player < Participant
end

class Dealer < Participant
end

class Game
  def initialize
    @deck = Deck.new
    @player = Player.new
    @dealer = Player.new
  end

  def deal_cards
    2.times do
      @player.hand += @deck.deal(1)
      @dealer.hand += @deck.deal(1)
    end
  end

  def show_initial_cards
    @player.hand[0].flip_up
    @player.hand[1].flip_up
    @dealer.hand[0].flip_up

    @player.hand.each { |card| p card.to_s }
    @dealer.hand.each { |card| p card.to_s }
  end

  def start
    deal_cards
    show_initial_cards
    # player_turn
    # dealer_turn
    # show_result
  end
end

Game.new.start

=begin
 24 char / col 

 Player 1 : James        Player 2 : Alex         Player 3 : Chappie
     Wins : 0                Wins : 0                Wins : 0
    Total : 18              Total : 21              Total : 20  
 [ 10 diamonds  ]        [ 10 diamonds  ]        [ 10 diamonds  ]
 [   8 spades   ]        [   A clubs    ]        [ 10 diamonds  ]
                                                 [   A clubs    ]

 Player 4 : James        Player 5 : Alex         Dealer : Chappie
     Wins : 0                Wins : 0              Wins : 0
    Total : 18              Total : 21            Total : ??
 [ 10 diamonds  ]        [ 10 diamonds  ]        [   unknown    ]
 [   8 spades   ]        [   A clubs    ]        [ 10 diamonds  ]
 [   A clubs    ]        [   A clubs    ]
 

 To add betting:
 - need to add a round asking each player what they want to bet
    - need to check that bet isn't more than the money they have
 - if they win - need to add their bet to their money
 - if they lose, need to subtract their bet from their money
 - need to decide what to do with the dealer's money 
  (e.g., keep track of what the house makes off everyone else)
 
=end