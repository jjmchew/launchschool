arr = ["9", "8", "7", "10", "11"]
new_arr = arr.sort do |x, y|
    y.to_i <=> x.to_i
  end

p new_arr

# Expected output: ["11", "10", "9", "8", "7"] 
# Actual output: ["10", "11", "7", "8", "9"] 

=begin
The unexpected output occurs from trying to invoke the `p` method on `arr.sort` with a `do...end` block passed in.  The precedence for the `do...end` block is slightly lower the precedence for the `p` method and thus what gets evaluated first is `p arr.sort` and the block is ignored.  As a result, the elements in `arr` are sorted as strings and not as integers.
Changing the code somewhat to ensure the `sort` method is invoked with the block passed in solves the problems.

=end