class BeerSong
  def self.lyrics
    verses(99, 0)
  end

  def self.verses(start, finish)
    output = ''
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

    def words(number)
      if number > 0
        option = options(number)

        "#{option[0]} bottle#{option[1]} of beer on the wall, " \
        "#{option[0]} bottle#{option[1]} of beer.\n" \
        "Take #{option[2]} down and pass it around, " \
        "#{option[3]} bottle#{option[4]} of beer on the wall.\n"

      else
        "No more bottles of beer on the wall, no more bottles of beer.\n" \
        "Go to the store and buy some more, 99 bottles of beer on the wall.\n"
      end
    end

    def options(number)
      opt = [0, '', 'one', 'no more', 's']
      opt[0] = number

      opt[1] = 's' if number > 1
      opt[2] = 'it' if number == 1
      opt[3] = number - 1 if number - 1 > 0
      opt[4] = '' if number == 2

      opt
    end
  end
end

# puts BeerSong.verses(2, 0)
# BeerSong.verse(99)
# BeerSong.lyrics
