
=begin

algorithm
  - convert string to array of words
  - capitalize each word
  - join array of words back into 1 string

=end

def word_cap(sentence)
  words = sentence.split(" ")
  words.map { |word| word.capitalize }.join(" ")
end

# test cases
p word_cap('four score and seven') == 'Four Score And Seven'
p word_cap('the javaScript language') == 'The Javascript Language'
p word_cap('this is a "quoted" word') == 'This Is A "quoted" Word'