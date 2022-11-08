=begin

input:
  - 2 boolean arguments

output:
  - boolean output which matches XOR

  1     2     XOR
  true  true  false
  true  false true
  false true  true
  false false false

assumptions / constraints:
  - assume no input validation required
=end

def xor?(input1, input2)
  if !input1 != !input2
    return true
  else
    return false
  end
end


# test cases
p xor?(5.even?, 4.even?) == true
p xor?(5.odd?, 4.odd?) == true
p xor?(5.odd?, 4.even?) == false
p xor?(5.even?, 4.odd?) == false
p xor?(nil, true) == true
p xor?(0, false) == true
p xor?(3, 4) == false

# solved in < 3.5 mins