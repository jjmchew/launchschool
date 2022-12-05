# 8:16 - 8:41 am  (with many distractions from Alex)
=begin
Background
There is a message that is circulating via public media that claims a reader can easily read a message where the inner letters of each words is scrambled, as long as the first and last letters remain the same and the word contains all the letters.

Another example shows that it is quite difficult to read the text where all the letters are reversed rather than scrambled.

In this kata we will make a generator that generates text in a similar pattern, but instead of scrambled or reversed, ours will be sorted alphabetically

Requirement
return a string where:

1) the first and last characters remain in original place for each word
2) characters between the first and last characters must be sorted alphabetically
3) punctuation should remain at the same place as it started, for example: shan't -> sahn't

Assumptions

1) words are seperated by single spaces
2) only spaces separate words, special characters do not, for example: tik-tak -> tai-ktk
3) special characters do not take the position of the non special characters, for example: -dcba -> -dbca
4) for this kata puctuation is limited to 4 characters: hyphen(-), apostrophe('), comma(,) and period(.)
5) ignore capitalisation

for reference: http://en.wikipedia.org/wiki/Typoglycemia

input
  - string (1 or more words)
output
  - new string, with words modified
rules
  - words are space delimited
  - punctuation (special character) doesn't 'move' - will be in the same index position in updated string as original
    - hyphen, apostrophe, comma, period are most important
  - ignore capitalization - assume only lowercase in input string
  - update of words:
      - first and last characters are unchanged
      - inbetween characters (other than special characters) are sorted alphabetically
      - punctuation in-between doesn't move
notes
  - pull out all punctuation, and then re-insert into same positions afterwards
      - need to manage the 'changing index' when inserting
data structure
  - punctuation 'record' :  use array of ['char', #], where char is the special char, # is index position in original string

algorithm
  - create 'log' of all punctuation positions (type and index) in input string
      - iterate through each char of input string
          - look for punctuation
  - remove all special characters from input string
  - split string into array of words (by space)
  - iterate through the words
      - re-arrange each word
  - join array of words with space between into output string
  - re-insert punctuation same index locations
=end

PUNCTUATION = ["-", ',', "'", "."]

def get_punctuation_positions(string)
  positions = []
  string.chars.each_with_index do |char, index|
    if PUNCTUATION.include?(char)
      positions << [char, index]
    end
  end
  positions
end

def rearrange(word)
  return word unless word.length > 2
  word[0] + word[1..-2].chars.sort.join + word[-1]
end

def insert_punctuation(string, punctuation, index)
  string[0...index] + punctuation + string[index..-1]
end

def scramble_words(string)
  positions = get_punctuation_positions(string)
  new_string = string.gsub(/[-,'\.]/,"")

  output = []
  new_string.split(" ").each do |word|
    output << rearrange(word)
  end
  new_string = output.join(" ")
  positions.each do |set|
    new_string = insert_punctuation(new_string, set[0], set[1])
  end
  new_string
end

p scramble_words('professionals') == 'paefilnoorsss'
p scramble_words('i') == 'i'
p scramble_words('') == ''
p scramble_words('me') == 'me'
p scramble_words('you') == 'you'
p scramble_words('card-carrying') == 'caac-dinrrryg'
# p scramble_words('-hello. I like -pizza-slices.') 
p scramble_words("shan't") == "sahn't"
p scramble_words('-dcba') == '-dbca'
p scramble_words('dcba.') == 'dbca.'
p scramble_words("you've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.") == "you've gotta dacne like teehr's nbdooy wachintg, love like ylo'ul neevr be hrut, sing like teehr's nbdooy leiinnstg, and live like it's haeevn on earth."
