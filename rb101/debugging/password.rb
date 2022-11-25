password = []

def set_password(password)
  puts 'What would you like your password to be?'
  new_password = gets.chomp
  password[0] = new_password
end

def verify_password(password)
  puts '** Login **'
  print 'Password: '
  input = gets.chomp

  if input == password[0]
    puts 'Welcome to the inside!'
  else
    puts 'Authentication failed.'
  end
end

if password.empty?
  set_password(password)
end

verify_password(password)

=begin
The local variable `password` in the main scope is never updated.  The method `set_password` cannot update the outer-scoped local variable `password' and the method `verify_password` is similarly unable to access the outer-scoped variable `password`.

One possible fix is to assign `password` to an array so that the string contents of the array object can be updated through a mutating method by `set_password`.  To do so, `password` needs to be passed in as an argument through an updated method definition.  Similarly, `verify_password` also needs an updated method definition for a method parameter `password`.

=end