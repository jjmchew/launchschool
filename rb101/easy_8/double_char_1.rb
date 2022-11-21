=begin
9:59 - 10:02 (3 minutes)

input : string
output : same string with every char doubled 
assumptions / constraints:
  - non-alphabetic char are included
  - if a blank string is provided, a blank string is returned

algorithm
  - initialize a 'collection string' for output
  - iterate across each character in the string
      - add 2 * that character to the output string

=end

def repeater(string)
  output = ""
  string.chars.each do |char|
    output = output + (char * 2)
  end
  output
end

p repeater('Hello') == "HHeelllloo"
p repeater("Good job!") == "GGoooodd  jjoobb!!"
p repeater('') == ''
