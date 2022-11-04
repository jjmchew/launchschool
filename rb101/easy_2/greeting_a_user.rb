=begin

input:
  - ask for user's name

output:
  - will greet the user:  e.g., "Hello Bob."
  - if name is entered with an ! then the computer will yell back at the user:  e.g., "HELLO BOB.  WHY ARE WE SCREAMING?"

assumptions / constraints:
  - no input validation (assume names make sense)
  - will accept an '!' anywhere in the name (e.g., first char, last char or somewhere in between)
  - assume trailing '!' needs to be removed from the name when displayed


=end

print "What is your name? "
name = gets.chomp

if name.include?('!')
  name.gsub!(/!/, '')
  puts "HELLO #{name.upcase}. WHY ARE WE SCREAMING?"
else
  puts "Hello #{name}."
end
