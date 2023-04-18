# outputs a diamond constructed of letters to meet requirements defined in diamond_test.rb
class Diamond
  ALPHABET = %w[_ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z].freeze

  def self.make_diamond(char)
    max = ALPHABET.find_index(char)
    diamond = ''
    1.upto(max) { |idx| diamond += Diamond.make_row(idx, max) }
    (max - 1).downto(1) { |idx| diamond += Diamond.make_row(idx, max) }
    diamond
  end

  def self.make_row(idx, max)
    row = ''
    max.downto(1) { |num| row += Diamond.add_char(num, idx) }
    2.upto(max) { |num| row += Diamond.add_char(num, idx) }
    row += "\n"
  end

  def self.add_char(num, idx)
    return ALPHABET[num] if num == idx
    return ' ' if num != idx
  end
end

# puts Diamond.make_diamond('P')

# rubocop:disable Layout/TrailingWhitespace, Style/BlockComments
=begin

notes
- note trailing spaces after each letter

A : 1
A

B : 2
 A 
B B
 A 

E : 5
    A    
   B B   
  C   C  
 D     D 
EDCBABCDE
 D     D 
  C   C  
   B B   
    A    

=end
# rubocop:enable Layout/TrailingWhitespace, Style/BlockComments
