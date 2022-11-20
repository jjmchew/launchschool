
=begin
assumptions / constraints
  - first character is always uppercase, alternates case from there
  - spaces (and other char) ARE included in the 'count' - i.e., up/down follows strict pattern which INCLUDES the spaces, although there is no case to change

algorithm
  - convert string to array of characters (do not split into word, since spaces count)
  - iterate across characters and 'toggle' appropriately:
      - if index is not odd (and char is alphabetic) then toggle to upcase
      - elsif index is odd (and char is alphabetic) then toggle to downcase
      - else leave char unchanged

=end

def staggered_case(string)
  chars = string.chars
  new_chars = []
  chars.each_with_index do |char, index|
    if !index.odd? && char.match?(/[a-zA-Z]/)
      new_chars << char.upcase
    elsif index.odd? && char.match?(/[a-zA-Z]/)
      new_chars << char.downcase
    else
      new_chars << char
    end
  end
  new_chars.join("")
end

# test cases
p staggered_case('I Love Launch School!') == 'I LoVe lAuNcH ScHoOl!'
p staggered_case('ALL_CAPS') == 'AlL_CaPs'
p staggered_case('ignore 77 the 444 numbers') == 'IgNoRe 77 ThE 444 NuMbErS'
