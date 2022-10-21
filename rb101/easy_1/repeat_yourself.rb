# inputs:
#   string
#   integer
# output
#   repeated string output to screen (the 'string', 'integer' times)

# assumptions:
#   integer is 0 or greater
#   empty strings are valid and will return empty lines
#   string is printed on it's own line
#   we don't explicitly need to provide input validation

# mental model:
#   loop 'integer' number of times
#   each time, print to screen 'string'

# test case 1:
# repeat ('Hello', 3)
#     Hello
#     Hello
#     Hello

# test case 2:
# repeat ('Hello', 0)

# test case 3:  note: empty lines printed
# repeat ('', 3)
#     
#     
#     

def repeat(str, num)
  if num > 0
    num.times { puts str }
  end
end

repeat('Hello',3)
puts "================"
    
repeat('Hello',0)
puts "================"
  
repeat('',3)
puts "================"
  

