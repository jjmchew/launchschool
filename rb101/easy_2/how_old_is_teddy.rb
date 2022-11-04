=begin

input:
  - no inputs
output:
  - string sentence "Teddy is ## years old!" where ## is a randomly generated age between 20 and 200

assumptions / constraints:
  - output will be written to screen, doesn't need to be stored in a variable

data structure:
  - use string interpolation with randomly generated integer for age

test cases / examples:
  - "Teddy is 69 years old!"
=end

def teddy
  puts "Please enter a name:"
  name = gets.chomp
  if name == '' then name = "Teddy"
  end
  puts "#{name} is #{rand(20..200)} years old!"
end

teddy