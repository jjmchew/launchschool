# input:
#   - array ['first_name','middle name','last name']
#   - hash { title: '', occupation: ''}

# output:
#     - a greeting
#     - e.g., "Hello, John Q Doe!  Nice to have a Master Plumber around."

# assumptions / constraints
#     - array / hash always has the same structure (see input above) (i.e, number of elements, etc.)
#     - content of array / hash will make sense when combined into greeting
#     - no empty strings

def greetings(name_array, job_hash)
  "Hello, #{name_array.join(' ')}! Nice to have a #{job_hash[:title]} #{job_hash[:occupation]} around."
end

# test cases / examples
p greetings(['John','Q','Doe'], {title: 'Master', occupation: 'Plumber'}) == "Hello, John Q Doe! Nice to have a Master Plumber around."
p greetings(['Jane','S', 'Smith'], {title: 'Journeyman', occupation: 'welder'}) == "Hello, Jane S Smith! Nice to have a Journeyman welder around."

