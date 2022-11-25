def shout_out_to(name)
  new_name = name.chars.each { |c| c.upcase! }.join("")

  puts 'HEY ' + new_name
end

shout_out_to('you') # expected: 'HEY YOU'


=begin
The method `upcase!` is called on each character of an array of characters (created from the string passed into the method argument and assigned to the method variable `name`). That array of characters is never assigned to a variable to be used.
=end
