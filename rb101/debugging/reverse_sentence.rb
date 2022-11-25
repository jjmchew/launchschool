def reverse_sentence(sentence)
  words = sentence.split(' ')
  reversed_words = []

  i = 0
  while i < words.length
    # reversed_words = [words[i]] + reversed_words
    reversed_words.unshift(words[i])
    i += 1
  end

  reversed_words.join(' ')
end

p reverse_sentence('how are you doing')
# expected output: 'doing you are how'

=begin

A 'TypeError' is raised from line 7 since `words[i]` is a string, which we are trying to concatenate to an array `reversed_words`.  The quick fix is to turn `words[i]` into an array by adding `[]` around it.  We could also use `unshift` to prepend `words[i]` to `reversed_words`.

=end