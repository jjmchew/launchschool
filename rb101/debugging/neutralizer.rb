def neutralize(sentence)
  words = sentence.split(' ')
  new_words = words.dup
  words.each do |word|
    new_words.delete(word) if negative?(word)
  end

  new_words.join(' ')
end

def negative?(word)
  [ 'dull',
    'boring',
    'annoying',
    'chaotic'
  ].include?(word)
end

puts neutralize('These dull boring cards are part of a chaotic board game.')
# Expected: These cards are part of a board game.
# Actual: These boring cards are part of a board game.


=begin
This is an example of why mutating the array you are iterating through is not recommended. The index which tracks the iteration does not change, but since the array `words` changes, the word `'boring'` is never evaluated and thus isn't removed.
A solution might be to create a duplicate of the `words` array for deleting the desired words and ultimately displaying the resulting sentence.

=end