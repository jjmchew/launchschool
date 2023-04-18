class Anagram
  def initialize(string)
    @str = string
    @tally = @str.downcase.chars.tally
  end

  def match(words)
    result = []
    words.each { |word| result << word if anagram?(word.downcase) }
    result
  end

  private

  def anagram?(word)
    return true if word.chars.tally == @tally && word != @str
  end
end

# p Anagram.new('ant').match(%w(tan stand at ant nat))
