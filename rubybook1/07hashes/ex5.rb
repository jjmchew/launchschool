person = {name: 'Bob', occupation: 'web developer', hobbies: 'painting'}

def check_value(hash, value)
  if hash.key(value) == nil then return false
  else return true
  end
end

puts check_value(person, "Bob")
puts check_value(person, "Joe")