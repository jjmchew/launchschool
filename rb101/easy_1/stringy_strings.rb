# problem
# input:  positive integer
# output: new string of alternating 1s / 0s where the length of the new string is the given integer
# assumptions / constraints:
#   - given 0, return empty string
#   - new string always starts with 1

# Data structure
#   - just use strings

# Algorithm
#   1.  initialize a counter to 0 and empty new string 
#       a.  set new char to 1
#   2.  add the new char to the new string
#   3.  iterate the counter / toggle new char to 0
#   4.  repeat from step 2 until the counter == given integer 

def stringy(num)
  counter = 0
  new_string = ''
  new_char = '1'
  loop do
    new_string << new_char
    counter += 1
    new_char = '0' if counter.odd?
    new_char = '1' if counter.even?
    break if counter == num
  end
  
  new_string
end

# Examples / Test cases
puts stringy(6) == '101010'
puts stringy(9) == '101010101'
puts stringy(4) == '1010'
puts stringy(7) == '1010101'
puts "======================"

def new_stringy(num, start=1)
  string = ''
  new_char = start.to_s

  num.times do |num|
    string << new_char
    if new_char == '0'
      new_char = '1'
    else
      new_char = '0'
    end
  end
  string
end

puts new_stringy(6) == '101010'
puts new_stringy(9,0) == '010101010'
puts new_stringy(9,1) == '101010101'
puts new_stringy(4,0) == '0101'
puts new_stringy(4) == '1010'
