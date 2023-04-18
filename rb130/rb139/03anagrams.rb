=begin
start: 2:06 pm finish 2:13 pm

notes:
- compare words using `.chars.tally`:
    - resulting hash should be the same
- need to compare `.downcase` words (case-insensitive)

=end

class Anagram
  def initialize(word)
    @word = word.downcase
  end

  def match(array)
    output = []
    array.each { |word| output << word if include?(word) }
    output
  end

  private

  def include?(word)
    word.downcase.chars.tally == @word.chars.tally && @word != word.downcase
  end
end
