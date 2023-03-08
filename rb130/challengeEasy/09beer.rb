class BeerSong
  def self.lyrics
    self.verses(99,0)
  end

  def self.verses(start, finish)
    output = ""
    start.downto(finish).each do |num|
      output += words(num)
      output += "\n" if num > finish
    end
    output
  end

  def self.verse(num)
    words(num)
  end

  class << self
    private
    
    def words(num)
      number = num
      if num > 0
        "#{number} bottle#{number > 1 ? "s" : ""} of beer on the wall, " + 
        "#{number} bottle#{number > 1 ? "s" : ""} of beer.\n" + 
        "Take #{number == 1 ? "it" : "one"} down and pass it around, " +
        "#{number-1 > 0 ? number-1 : "no more"} bottle#{number == 2 ? "" : "s"} of beer on the wall.\n"
      else
        "No more bottles of beer on the wall, no more bottles of beer.\n" +
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
      end
    end
  end
end

# puts BeerSong.verses(2, 0)
# BeerSong.verse(99)
# BeerSong.lyrics