array1 = %w(Moe Larry Curly Shemp Harpo Chico Groucho Zeppo)
array2 = []
array1.each { |value| array2 << value }
array1.each { |value| value.upcase! if value.start_with?('C', 'S') }
puts array2

=begin
Output:

Moe
Larry
CURLY
SHEMP
Harpo
CHICO
Groucho
Zeppo

Why?

On line 3 when the `Array#each` method is invoked on array1 with a block, that block takes each string value within `array1`` and concatenates that element to `array2`` (calls `Array#push`).  
This concatenation assigns each element of `array2`` to the same string object of array1, for each array index (i.e., index 0 of array1 is the same string object as index 0 of array2).
On line 4, `Array#each` is invoked again with a different block, this time invoking the `String#upcase!` method to mutate each string to capitalize all letters.  
Since the elements of both `array1` and `array2` reference the same string objects, when array2 is passed as an argument to `puts` it outputs the capitalized names for Curly, Shemp, and Chico.

=end