=begin
10:02 - 10:14 :  12 minutes

input:  string
output:  a new string with only the consonants doubled (not vowels, punctuation, spaces, etc.)

algorithm:
  - initialize a result string
  - iterate across each character in the string
      - if the char meets criteria (i.e., not vowel, punctuation, space, etc.) then add 2 * char to result
      - if char doesn't meet criteria, just add char to result

Debrief Notes:
  - ** learn syntax for =~ regex matching - need to be comfortable with it
  - watch out for conditionals - potentially there was an order of precedence issue with 1 line conditional with &&
  - I got lucky with upper / lowercase - make sure to consider explicitly!
  
=end

def double?(char)
  if char.match?(/[a-zA-Z]/) && char.match?(/[^aeiou]/i)
    return true 
  end
  false
end

def double_consonants(string)
  result = ""
  string.chars.each do |char|
    if double?(char) then result += char * 2
    else result += char
    end
  end
  result
end

# test cases
p double_consonants('String') == "SSttrrinngg"
p double_consonants("Hello-World!") == "HHellllo-WWorrlldd!"
p double_consonants("July 4th") == "JJullyy 4tthh"
p double_consonants('') == ""