# input:
#   - name: first space last

# output:
#   - string: last comma space first

# assumptions / constraints:
#   - no middle name
#   - include punctuation / non-alphabetic char with names (first and last always delimited by space)
#   - don't change case, etc.
#   - no leading / trailing spaces

# data structure:
#   - string;  array as intermediary

# algorithm:
#   1.  split name into array of first and last name
#   2.  create new string with comma between elements

def swap_name(str)
  names = str.split
  "#{names[1]}, #{names[0]}"
end

# test cases:
p swap_name('Joe Roberts') == 'Roberts, Joe'
p swap_name('John Doe') == 'Doe, John'
p swap_name('J. Smith') == 'Smith, J.'
