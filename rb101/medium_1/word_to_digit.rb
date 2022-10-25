# input:
#   - sentence string (with numbers as words)

# output:
#   - same sentence with number words replaced by number digits

# assumptions:
#   - return the same actual string object_id
#   - spacing of words/numbers remains unchanged (i.e., there will be spaces between numbers)
#     - However, assume only 1 space between 'words' / sentences
#   - will accommodate capitalized, uppercase versions of the word
#   - if sentence is split into words, don't need to include spaces in search / replacement terms (e.g., 'one' is in 'done')

# data structure:
#   - array of strings (words)

# algorithm:
#   - convert sentence to array of words - iterate over each word
#     - check downcase version of word to see if changes are required (don't use destructive downcase here)
#     - IF changes are required, call method to replace a digit (use destructive method to update word)
#        - use gsub to replace number words with digits:
#     - if changes are NOT required, return unchanged word

def word_to_digit(sentence)
  replacements = [
    ['zero','0'],
    ['one','1'],
    ['two','2'],
    ['three','3'],
    ['four','4'],
    ['five','5'],
    ['six','6'],
    ['seven','7'],
    ['eight','8'],
    ['nine','9'],
  ]

  def check_change(word, replacements)
    need_change = false
    10.times do |index| # could have iterated through array elements instead!
      if word.downcase.include?(replacements[index][0]) && word.downcase.index(/\b#{replacements[index][0]}\b/)
        need_change = true
      end
    end
    need_change
  end

  def replace_num(word, replacements)
    10.times do |index| # could have iterated through array elements instead!
      loop do
        check = word.gsub!(replacements[index][0], replacements[index][1])
        break if check == nil
      end
    end
    word
  end

  words = sentence.split
  words.map! do |word|
    # p word
    # p check_change(word, replacements)
    if check_change(word, replacements)
      replace_num(word.downcase, replacements)
    else
      word
    end
  end
  words.join(' ')
end

# test cases / examples:
p word_to_digit('Please call me at five five five one two three four. Thanks.') == 'Please call me at 5 5 5 1 2 3 4. Thanks.'
p word_to_digit("Four three one. Six five seven? Eight nine zero two! That's what I thought.") == "4 3 1. 6 5 7? 8 9 0 2! That's what I thought."
p word_to_digit("This was six a sneaky five question. One and done is eight ninety nine.") == "This was 6 a sneaky 5 question. 1 and done is 8 ninety 9."