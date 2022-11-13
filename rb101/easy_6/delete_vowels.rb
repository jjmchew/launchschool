=begin
input
  - array of strings
output
  - same string values, but with vowels removed
algorithm
  - iterate through the array
  - find and replace all vowels with "" (blank) (destructive)
  - return the array (with new values)
=end

def remove_vowels(array)
  array.map! do |string|
    string.gsub!(/[aeiou]*/i, "")
  end
  array
end

# test cases
p remove_vowels(%w(abcdefghijklmnopqrstuvwxyz)) == %w(bcdfghjklmnpqrstvwxyz)
p remove_vowels(%w(green YELLOW black white)) == %w(grn YLLW blck wht)
p remove_vowels(%w(ABC AEIOU XYZ)) == ['BC', '', 'XYZ']
