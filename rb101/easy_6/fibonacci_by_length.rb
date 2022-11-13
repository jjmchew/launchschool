
# first attempt :  this works, but it's not very efficient - it calculates every fibonacci number from scratch, but it doesn't need to
#                   - took so long to calculate I cancelled it, since only the first 2 test cases completed
# def fibonacci(num)
#   return 1 if num == 1 || num == 2
#   return fibonacci(num - 1) + fibonacci(num - 2)
# end

# def find_fibonacci_index_by_length(num)
#   index = 1
#   loop do
#     length = fibonacci(index).to_s.length
#     break if length == num
#     index += 1
#   end
#   index
# end

=begin
data structure
  - use array to keep track of numbers and the index (use dummy 'nil' for element 0)

algorithm
  1 - start with 2 initial digits of sequence (1 & 1)
  2 - calculate the next number in the sequence
  3 - check if that number has the right number of digits
  4 - if not, repeat from step 2
=end

# attempt #2 - also slow, but did finish, which is great

# def find_fibonacci_index_by_length(num)
#   return 1 if num == 1
#   sequence = [nil, 1, 1]
#   index = 3
#   loop do
#     next_num = sequence[index - 2] + sequence[index - 1]
#     sequence << next_num
#     break if next_num.to_s.length == num
#     index += 1
#   end
#   index
# end

# 3rd attempt - should use less memory (not storing digits in an array - unnecessary)
def find_fibonacci_index_by_length(num)
  return 1 if num == 1
  num_first = 1
  num_second = 1
  index = 3
  loop do
    num_current = num_first + num_second
    break if num_current.to_s.length >= num
    num_first = num_second
    num_second = num_current
    index += 1
  end
  index
end

# test cases
p find_fibonacci_index_by_length(2) == 7          # 1 1 2 3 5 8 13
p find_fibonacci_index_by_length(3) == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
p find_fibonacci_index_by_length(10) == 45
p find_fibonacci_index_by_length(100) == 476
p find_fibonacci_index_by_length(1000) == 4782
p find_fibonacci_index_by_length(10000) == 47847