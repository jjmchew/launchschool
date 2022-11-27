# Write a method named to_weird_case that accepts a string, and
# returns the same sequence of characters with every 2nd character
# in every third word converted to uppercase. Other characters
# should remain the same.

=begin
2:37 pm - 2:52 pm : 15 minuutes

input
  - string : sentence
output
  - same string : but case of words is changed
rules
  - assume no new string
  - every 3rd word (assume space delimited) will be updated:
      - every 2nd character is uppercase (i.e., start with 2nd char [index 1]- make it upper case - every odd index)

algorithm
  - split given string into array of words `words`
  - initialize a counter to track when words should have case changed - initially assign to 2
  - iterate across `words` with index
      - if index == counter then 
          - change case of that word
          - update the counter by 3 to next word to be updated
  - join `words` back into a string, with spaces in-between

notes
  - helper method `update_case` : given a word, change case, as appropriate

=end

def update_case(word)
  0.upto(word.length - 1) do |index|
    word[index] = word[index].upcase if index.odd?
  end
  word
end

def to_weird_case(string)
  words = string.split(" ")
  counter = 2
  
  words.each_with_index do |word, index|
    if index == counter
      words[index] = update_case(word)
      counter += 3
    end
  end

  words.join(" ")
end

# Examples:
p to_weird_case('Lorem Ipsum is simply dummy text of the printing') ==
                'Lorem Ipsum iS simply dummy tExT of the pRiNtInG'
p to_weird_case(
  'It is a long established fact that a reader will be distracted') ==
  'It is a long established fAcT that a rEaDeR will be dIsTrAcTeD'
p to_weird_case('aaA bB c') == 'aaA bB c'
p to_weird_case(
  'Miss Mary Poppins word is supercalifragilisticexpialidocious') ==
  'Miss Mary POpPiNs word is sUpErCaLiFrAgIlIsTiCeXpIaLiDoCiOuS'

# The tests above should print "true".