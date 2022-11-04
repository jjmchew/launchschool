# name = 'Bob'
# save_name = name
# name = 'Alice'
# puts name, save_name

=begin
What does this code print out?
Bob
Alice

Why?
On line 1, the local variable `name` is initialized and assigned to string object with value `Bob`.
On line 2, another local variable `save_name` is initialized and assigned to the same string object as local variable `name`, which has value `Bob`.
On line 3, the local variable `name` is reassigned to ANOTHER string object (at a different physical memory space) with value 'Alice'.
Thus when puts is invoked with the arguments of local variables `name` and `save_name`, the output is the values of the string objects referenced by those variables, each output to it's own line:  `Bob` and `Alice` respectively.

=end

name = 'Bob'
save_name = name
name.upcase!
puts name, save_name

=begin
What does this code print out?
BOB
BOB

On line 1, the local variable `name` is initialized and assigned to string object with value `Bob`.
On line 2, another local variable `save_name` is initialized and assigned to the same string object with value `Bob`.
On line 3, the `String#upcase!` method is invoked on the object referenced by `name' which is `Bob`.  This method mutates the caller (`name`) which changes the value in the string object (as opposed to creating a new string object); making all of the characters in the string uppercase.  Thus, since both `name` and `save_name` have not be re-assigned to new string objects and both reference the same string object - and that string object was mutated by the `String#upcase!`` method - the output when `puts` is invoked for each local variable is the same for both: `BOB`.

=end
