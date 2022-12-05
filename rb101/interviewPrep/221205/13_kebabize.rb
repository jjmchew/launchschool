# 8:53 - 9:03 am  :  10 minutes
=begin
Define the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters

input
  - string: (in CamelCase)
output
  - string (in kebab-case)
rules
  - only lower-case char in return string
  - ignore non-alpha characters (e.g., numbers)
algorithm
  - initialize an output string
  - iterate through each char of input string (from 1...string.length) (`index`)
      - if the char at `index` is uppercase then 
          - add char at `index`-1 (if alphabetic)
          - add a '-'
      - if not uppercase then just add lowercase char at `index`-1 (if alphabetic)
  - return output string
      
=end

def kebabize(string)
  output = ""
  (1..string.length).each do |index|
    if ('A'..'Z').to_a.include?(string[index-1])
      output += "-"
      output += string[index-1].downcase if ('a'..'z').to_a.include?(string[index-1].downcase)
    else
      output += string[index-1].downcase if ('a'..'z').to_a.include?(string[index-1].downcase)
    end
  end
  output
end

p kebabize('myCamelCasedString') == 'my-camel-cased-string'
p kebabize('myCamelHas3Humps') == 'my-camel-has-humps'
