=begin

9:15 am - 9:32 am  :  17 minutes


https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/ruby

Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples

pig_it('Pig latin is cool') # igPay atinlay siay oolcay
pig_it('Hello world !')     # elloHay orldway !

input
  - string
output
  - string : in pig lating
rules
  - maintain case of original string / letters
  - assume always add lowercase 'ay'
  - assume punctuation is any non-alpha / non-digit
  - don't impact punctuation at the end of words - leave this unchanged
      - punctuation in the middle of words stay in the same place
  - assume no digit characters

notes
  - need to check the end of the word for punctuation at the end, otherwise, punctuation can remain
  - 

algorithm
  - separate given string into an array of words (`words`)
  - iterate across `words` (transform each element)
      - convert word to an array of chars
          - check for trailing punctuation
          - if so: 'save' punctuation to be appended later, then remove trailing punctuation
          - remove first element, add to the end
          - add 'ay' to the end
          - add any trailing punctuation (or empty string, if none)
      - join array of chars back into a string
  - join `words` back into a string (space delimited)

=end

def update_word(word)
  return word if word.length == 1 && word.match?(/[^a-z0-9]/i)

  chars = word.chars

  punctuation = ""
  if chars.last.match?(/[^a-z0-9]/i)
    punctuation = chars.last
    chars.pop
  end

  chars << chars[0] + 'ay' + punctuation
  chars.shift

  chars.join("")
end


def pig_it(string)
  words = string.split(" ")
  words.map! do |word|
    update_word(word)
  end
  words.join(" ")
end

p pig_it('Pig latin is cool') == 'igPay atinlay siay oolcay'
p pig_it('This is my string') == 'hisTay siay ymay tringsay'
p pig_it('Hello world !') == 'elloHay orldway !'
p pig_it('Hello world!') == 'elloHay orldway!'
p pig_it("don't") == "on'tday"
