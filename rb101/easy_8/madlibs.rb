words = {}

def get_word(type, words)
  print "Enter a #{type}: "
  word = gets.chomp
  words[type] = word
end

get_word('noun', words)
get_word('verb', words)
get_word('adjective', words)
get_word('adverb', words)

p "#{words["verb"].capitalize} this #{words["adjective"]} #{words["noun"]} #{words["adverb"]}!"