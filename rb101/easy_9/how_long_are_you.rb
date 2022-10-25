# input:
#   - string of words (1 or more words)

# output:
#   - array:  each element is the word, a space, the length of that word
#             - should contain every word in original string

# assumptions / constraints:
#   - words are delimited by spaces (even if containing non-alphabetic characters)

# data structure:
#   - use arrays of strings

# algorithm:
#   1.  split sentence into array of words
#   2.  iterate across each word:
#       - append space and length of word (need to mutate caller)

def word_lengths(str)
  words = str.split
  words.map! { |word| word << " #{word.length}"}
end

# test cases / examples:
p word_lengths("cow sheep chicken") == ["cow 3", "sheep 5", "chicken 7"]

p word_lengths("baseball hot dogs and apple pie") ==
  ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

p word_lengths("It ain't easy, is it?") == ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

p word_lengths("Supercalifragilisticexpialidocious") ==
  ["Supercalifragilisticexpialidocious 34"]

p word_lengths("") == []