=begin
10:36 - 10:46 : 10 minutes

input
  - string : of various characters (incl. space)
output
  - hash : { lowercase: float, uppercase: float, neither:  float}
  - float represents a float number for a percentage;  all add up to 100.0
assumptions / constraints
  - need to double check 1st/2nd cases to see if spaces count as 'neither' - assume so for now (confirmed)

algorithm
  - initialize a 'count' hash to count lowercase, uppercase, neither character types
  - initialize an 'output' hash which contains the corresponding percentages required
  - iterate across each character in the string
      - increment the count hash as appropriate
  - for each character type in the count hash:
      - convert the count to a float
      - then divide by the length of the string (# of characters) to determine the percentage
      - store this value in the output hash

=end

def letter_percentages(string)
  count = { lowercase: 0, uppercase: 0, neither: 0 }
  output = { lowercase: 0, uppercase: 0, neither: 0 }
  string.chars.each do |char|
    if char.match?(/[a-z]/) then count[:lowercase] += 1
    elsif char.match?(/[A-Z]/) then count[:uppercase] += 1
    else count[:neither] += 1
    end
  end
  count.each do |key, value|
    output[key] = (value.to_f / string.length * 100).round(1)
  end
  output
end

# test cases
p letter_percentages('abCdef 123') == { lowercase: 50.0, uppercase: 10.0, neither: 40.0 }
p letter_percentages('AbCd +Ef') == { lowercase: 37.5, uppercase: 37.5, neither: 25.0 }
p letter_percentages('123') == { lowercase: 0.0, uppercase: 0.0, neither: 100.0 }
