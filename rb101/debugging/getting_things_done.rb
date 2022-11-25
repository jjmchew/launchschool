def move(n, from_array, to_array)
  return if n == 0 || n > from_array.length
  to_array << from_array.shift
  move(n - 1, from_array, to_array)
end

# Example

# todo = ['study', 'walk the dog', 'coffee with Tom']
todo = []
done = ['apply sunscreen', 'go to the beach']

move(2, todo, done)

p todo # should be: ['coffee with Tom']
p done # should be: ['apply sunscreen', 'go to the beach', 'study', 'walk the dog']

=begin
The 'SystemStackError' occurs since the recurisve method `move` has no end - it just keeps calling itself with successively smaller values of the argument `n`.
This can be fixed by adding a return statement when n is 0.

=end