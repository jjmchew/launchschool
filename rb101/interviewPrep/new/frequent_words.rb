=begin
10.Most frequently used words in a text
(https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/ruby)
4 kyu
=begin
Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

Assumptions:
A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
Matches should be case-insensitive, and the words in the result should be lowercased.
Ties may be broken arbitrarily.
If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

Examples:
top_3_words("In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
on Sundays, made away with three-quarters of his income.")
# => ["a", "of", "on"]

top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
# => ["e", "ddd", "aa"]

top_3_words("  //wont won't won't")
# => ["won't", "wont"]

Bonus points (not really, but just for fun):
    Avoid creating an array whose memory footprint is roughly as big as the input text.
    Avoid sorting the entire array of unique words.

input
  - string : multiples word, maybe with newlines
output
  - array of strings : top 3 (up to), most frequent 'words', descending order
rules
  - punctuation (in the middle) creates a unique word
  - ignore sequences of digits - not words; assume not in input string
  - convert string to lowercase - show matches in lowercase
  - break ties arbitrarily
  - return 1, or 2 or none if there aren't a 'top 3'
  - words are ONLY characters (plus middle punctuation)

notes
  - identifying words might be key
  - avoid creating an array of the entire text
      - need to scan the text 1 word at a time
  - helper method:  words are all space delimited - look for all characters between 2 spaces
      - first char isn't a space
  - could use a word to count word occurrences

algorithm
  - create a copy of the input string (for mutation)

  - initialize a count hash
  - iterate through each character of the duplicate input
      - look for a word
      - increment the count for the word in the hash
  
  - initialize an output array
  - determine the 3 (or fewer) words with most occurrences 
      - (without sorting all of them?)
      - iterate through the hash to find the maximum value 
          - add that value to the output array
          - remove the max value from the hash
      - stop iterating when we've got 3 values or there are no more

=end

def find_max(count)
  max_key = ""
  max_value = count.values.max

  count.each do |k, v|
    max_key = k if v == max_value
  end
 
  # return hash key for removal
  max_key
end

def word_end?(string)
  if ["'", "-"].include?(string[0])
    return false if ('a'..'z').to_a.include?(string[1])
    return true
  elsif string[0] == " "
    return true
  elsif ('a'..'z').to_a.include?(string[0])
    return false
  else
    return true
  end
end

def top_3_words(string)
  string_dup = string.downcase

  count = Hash.new(0)
  word = ""

  (0...string.length).each do |index|
    # if !('a'..'z').to_a.include?(string_dup[index])
    if word_end?(string_dup[index, 2])
      count[word] += 1 if word != ""
      word = ""
    else
      word << string_dup[index]
    end
  end
  p count

  #  find_max(count)
  output = []
  3.times do
    max = find_max(count)
    output << max if max != ""
    count.delete(max)
    break if count.empty?
  end

  # p count

  output

end

p top_3_words("a a a  b  c c  d d d d  e e e e e") == ["e", "d", "a"]
p top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e") == ["e", "ddd", "aa"]
p top_3_words("  //wont won't won't ") == ["won't", "wont"]
p top_3_words("  , e   .. ") == ["e"]
p top_3_words("  ...  ") == []
p top_3_words("  '  ") == []
p top_3_words("  '''  ") == []
p top_3_words("""In a village of La Mancha, the name of which I have no desire to call to
mind, there lived not long since one of those gentlemen that keep a lance
in the lance-rack, an old buckler, a lean hack, and a greyhound for
coursing. An olla of rather more beef than mutton, a salad on most
nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
# on Sundays, made away with three-quarters of his income.""") == ["a", "of", "on"]
