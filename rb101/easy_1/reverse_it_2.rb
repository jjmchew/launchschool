# problem
# input:  string (sentence, 1 or more words, separated by a space)
# output: same string, but words with 5 or more characters are reversed (e.g., block > kcolb)
# assumptions / constraints:
#   - word is any consecutive series of characters/numbers delimited by a space
#   - case doesn't change
#   - assume any punctuation is 'part of the word'

# Data structure
#   - use array / strings

# Algorithm
#   1.  Separate sentence string into array of discrete words
#   2.  For each word:
#         a.  count the number of characters
#         b.  check if there are 5 or more characters:
#         c.  if so, reverse the word
#         d.  if not, leave word unchanged
#   3.  recombine "words" into sentence (with space between)

def reverse_words(sentence)
  # new_words = []
  # words = sentence.split
  # sentence.split.each do |word|
  #   if word.length >= 5
  #     new_words << word.reverse
  #   else
  #     new_words << word
  #   end
  # end
  # new_words.join(' ')

  words = sentence.split
  words.map do |word|
    if word.length >= 5
      word.reverse! # using destructive version is key here
    else
      word
    end
  end
  words.join(' ')
end

#Test cases / examples
puts reverse_words('Professional')          == "lanoisseforP"
puts reverse_words('Walk around the block') == "Walk dnuora the kcolb"
puts reverse_words('Launch School')         == 'hcnuaL loohcS'