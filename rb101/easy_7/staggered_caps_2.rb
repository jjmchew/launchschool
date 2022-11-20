=begin
input
  - string, possibly a sentence
output
  - same string with case of letters changed:  first character uppercase, then alternating down, then up, etc.
    - pattern is for letters ONLY, not non-alphabetic characters
algorithm
  - convert string to array of characters
  - use a boolean to track uppercase or lowercase
  - start off with boolean set to uppercase
  - iterate through each character
      - if the character is alphabetic:
          - then toggle to case defined by boolean
          - change toggle
      - if the character is non-alphabetic, make no change

=end

def staggered_case(string)
  set_upper = true
  chars = string.chars
  chars.map do |char|
    if char.match?(/[a-zA-Z]/) && set_upper
      set_upper = false
      char.upcase!
    elsif char.match?(/[a-zA-Z]/) && !set_upper
      set_upper = true
      char.downcase!
    else
      char
    end
  end
  chars.join
end

# test cases
p staggered_case('I Love Launch School!') == 'I lOvE lAuNcH sChOoL!'
p staggered_case('ALL CAPS') == 'AlL cApS'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 nUmBeRs'