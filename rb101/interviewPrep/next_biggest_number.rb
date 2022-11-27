=begin 
9:18 - 9:30 pm : 12 minutes


create a method that takes a positive integer number and returns the next bigger number formed by the same digits:
e.g., 12 => 21
513 => 531
2017 => 2071
If no bigger number can be composed using those digits, return -1
e.g., 9 => -1
111 => -1
531 => -1

input
  - integer number
output
  - integer number : rearrange digits of input number to make the next biggest number
                      OR return -1, if no such number exists
rules
  - see output

algorithm
  - find all possible permutations of the digits given ('num_array')
  - sort these numbers (lowest to highest)
  - find the given number and see what the next biggest number will be

=end 

def next_bigger_num(num)
  num_digits = num.digits
  num_array = num_digits.permutation(num_digits.length).to_a
  num_array.uniq!

  num_array.map! { |subarray| subarray.join.to_i }
  num_array.sort!
  
  idx = num_array.find_index(num)
  if idx + 1 < num_array.length
    num_array[idx+1]
  else
    -1
  end
end

p next_bigger_num(9) == -1
p next_bigger_num(12) == 21
p next_bigger_num(513) == 531
p next_bigger_num(2017) == 2071
p next_bigger_num(2071) == 2107
p next_bigger_num(111) == -1
p next_bigger_num(531) == -1
p next_bigger_num(123456789) == 123456798
