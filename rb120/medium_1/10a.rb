# Include Card and Deck classes from the last two exercises.
class Deck
  RANKS = ((2..10).to_a + %w(Jack Queen King Ace)).freeze
  SUITS = %w(Hearts Clubs Diamonds Spades).freeze

  def initialize
    @cards = []
    reset
  end

  def draw
    reset if @cards.empty?
    @cards.shift
  end

  private
  
  def reset
    @cards = []
    SUITS.each do |suit|
      RANKS.each do |rank|
        @cards << Card.new(rank, suit)
      end
    end
    @cards.shuffle!
  end
end

class Card
  RANK_ORDER = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
  SUIT_ORDER = ['Diamonds', 'Clubs', 'Hearts', 'Spades']
  attr_reader :suit, :rank

  def initialize(rank, suit)
    @suit = suit
    @rank = rank
  end

  def rank_value
    RANK_ORDER.find_index(rank)
  end

  def suit_value
    SUIT_ORDER.find_index(suit)
  end

  def <=>(other)
    if rank_value != other.rank_value
      return rank_value <=> other.rank_value
    else
      return suit_value <=> other.suit_value
    end
  end

  def to_s
    "[ #{rank} #{suit} ]"
  end
end

class PokerHand
  def initialize(deck)
    @hand = []
    5.times { @hand << deck.draw }
    @ranks_tally = count_rank
    @suits_tally = count_suit
  end

  def print_hand
    @hand.each do |card|
      print " #{card} "
    end
  end

  def sort
    @hand.sort!
  end

  def evaluate
    case
    when royal_flush?     then 'Royal flush'
    when straight_flush?  then 'Straight flush'
    when four_of_a_kind?  then 'Four of a kind'
    when full_house?      then 'Full house'
    when flush?           then 'Flush'
    when straight?        then 'Straight'
    when three_of_a_kind? then 'Three of a kind'
    when two_pair?        then 'Two pair'
    when pair?            then 'Pair'
    else                       'High card'
    end
  end
  
  # private

  def count_rank
    ranks = @hand.map { |card| card.rank }
    ranks.tally
  end

  def count_suit
    suits = @hand.map { |card| card.suit }
    suits.tally
  end

  def get_indexes
    @hand.map { |card| Deck::RANKS.find_index(card.rank)}
  end

  def royal_flush?
    flush? && straight? && get_indexes.sort.first == 8
  end

  def straight_flush?
    flush? && straight? && get_indexes.sort.first != 8
  end

  def four_of_a_kind?
    rank_counts = @ranks_tally.values.sort
    rank_counts == [1, 4]
  end

  def full_house?
    rank_counts = @ranks_tally.values.sort
    rank_counts == [2, 3]
  end

  def flush?
    suit_counts = @suits_tally.values
    suit_counts == [5]
  end

  def straight?
    indexes = get_indexes.sort
    (1..4).each do |idx|
      return false unless indexes[idx] == indexes[idx-1] + 1
    end
    true
  end

  def three_of_a_kind?
    rank_counts = @ranks_tally.values.sort
    rank_counts.last == 3
  end

  def two_pair?
    rank_counts = @ranks_tally.values.sort
    rank_counts.count(2) == 2
  end

  def pair?
    rank_counts = @ranks_tally.values.sort
    rank_counts.count(2) == 1
  end
end

NUM_HANDS = 1_000_000
hands = []
count = Hash.new(0)
NUM_HANDS.times do 
  hand = PokerHand.new(Deck.new)
  count[hand.evaluate] += 1
  # print hand.evaluate.center(10)
  # hand.sort
  # hand.print_hand
  # puts
end
pp count.map { |k,v| [k, ((v.to_f / NUM_HANDS) * 100).round(2) ] }.sort_by { |subarr| subarr[1] }.to_h