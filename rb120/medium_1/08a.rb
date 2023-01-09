class Card
  include Comparable
  attr_reader :rank, :suit

  RANK_ORDER = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
  SUIT_ORDER = ['Diamonds', 'Clubs', 'Hearts', 'Spades']

  def initialize(rank, suit)
    @rank = rank
    @suit = suit
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
    "#{rank} of #{suit}"
  end
end



cards = [Card.new(2, 'Hearts'),
         Card.new(10, 'Diamonds'),
         Card.new('Ace', 'Clubs')]
puts cards
puts cards.min == Card.new(2, 'Hearts')
puts cards.max == Card.new('Ace', 'Clubs')

cards = [Card.new(5, 'Hearts')]
puts cards.min == Card.new(5, 'Hearts')
puts cards.max == Card.new(5, 'Hearts')

cards = [Card.new(4, 'Hearts'),
         Card.new(4, 'Diamonds'),
         Card.new(10, 'Clubs')]
puts cards.min.rank == 4
puts cards.max == Card.new(10, 'Clubs')

cards = [Card.new(7, 'Diamonds'),
         Card.new('Jack', 'Diamonds'),
         Card.new('Jack', 'Spades')]
puts cards.min == Card.new(7, 'Diamonds')
puts cards.max.rank == 'Jack'

cards = [Card.new(8, 'Diamonds'),
         Card.new(8, 'Clubs'),
         Card.new(8, 'Spades')]
# puts cards.min.rank == 8
# puts cards.max.rank == 8
puts cards.min == Card.new(8, 'Diamonds')
puts cards.max == Card.new(8, 'Spades')

cards = [Card.new('Ace', 'Diamonds'),
         Card.new('Ace', 'Clubs'),
         Card.new(8, 'Spades'),
         Card.new(8, 'Hearts')]
puts cards.min == Card.new(8, "Hearts")
puts cards.max == Card.new("Ace", "Clubs")