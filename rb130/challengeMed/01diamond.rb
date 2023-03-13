class Diamond
  CHARS = %W(_ A B C D E F G H I J K L M N O P Q R S T U V W X Y Z)

  def self.make_diamond(char)
    max = CHARS.find_index(char)
    output = ""
    1.upto(max).each { |idx| output += row(idx, max) }
    (max-1).downto(1).each { |idx| output += row(idx,max) }
    output
  end

  class << self
    private

    def row(idx, max)
      if idx == 1
        "#{" " * (max-1)}#{CHARS[idx]}#{" " * (max-1)}\n"
      else
        "#{" " * (max - idx)}#{CHARS[idx]}#{" " * (2*idx - 3)}#{CHARS[idx]}#{" " * (max - idx)}\n"
      end
    end
    
  end
end


# puts Diamond.make_diamond('E')


=begin
max 5

123456789   idx  spaces
    A        1     0
   B B       2     1
  C   C      3     3
 D     D     4     5
E       E    5     7
 D     D
  C   C
   B B
    A

12345678
     A     
    B_B    
   C _ C   
  D  _  D  
 E   _   E 
F    _    F
 E       E
  D     D
   C   C
    B B
     A
=end
