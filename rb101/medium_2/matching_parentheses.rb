=begin
10:55 - 11:02 : 7 minutes

input
  - string
output
  - boolean
constraints / assumptions
  - check if every '(' has a closing ')'
  - every pair must start with a '('  (i.e., can't just count # of '(' characters )

algorithm
  - use a counter to keep track of open and closed parentheses:
      - '(' is +1
      - ')' is -1
      - counter should never be -ve;  counter should up as zero

  - initialize counter
  - iterate through each character of the string
    - increment counter as per description above
    - if counter goes -ve, then return false
  - if counter is not zero at the end, return false
=end

def balanced?(string)
  counter = 0
  string.chars.each do |char|
    if char == '(' then counter += 1
    elsif char == ')' then counter -= 1
    end
    return false if counter < 0  
  end
  return true if counter == 0
  false
end

# test cases
p balanced?('What (is) this?') == true
p balanced?('What is) this?') == false
p balanced?('What (is this?') == false
p balanced?('((What) (is this))?') == true
p balanced?('((What)) (is this))?') == false
p balanced?('Hey!') == true
p balanced?(')Hey!(') == false
p balanced?('What ((is))) up(') == false