=begin

algorithm
  - convert words to array of words
  - for each word, convert word to array of characters
    - iterate through the characters
        - if character is alphabetic, then 'toggle' the character
  - join each updated word back into 1 string

=end

def toggle_char(char)
  return char.upcase if char.match?(/[a-z]/)
  return char.downcase if char.match?(/[A-Z]/)
  char
end

def swapcase(string)
  words = string.split(" ")
  words.map! do |word|
    word.chars.map! { |char| toggle_char(char) }.join("")
  end
  words.join(" ")
end

# test cases
p swapcase('CamelCase') == 'cAMELcASE'
p swapcase('Tonight on XYZ-TV') == 'tONIGHT ON xyz-tv'

# p toggle_char('a')
# p toggle_char('H')