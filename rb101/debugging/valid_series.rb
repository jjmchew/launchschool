def valid_series?(nums)
  return false if nums.sum != 47

  odd_count = nums.count { |n| n.odd? }
  # p odd_count
  odd_count == 3
end

p valid_series?([5, 6, 2, 7, 3, 12, 4, 8])        # should return true
p valid_series?([1, 12, 2, 5, 16, 6])             # should return false
p valid_series?([28, 3, 4, 7, 9, 14])             # should return false
p valid_series?([20, 6, 9, 4, 2, 1, 2, 3])        # should return true
p valid_series?([10, 6, 19, 2, 6, 4])             # should return false

=begin
On line 6, the ternary expression is poorly formed:  the first part should be a conditional expression, however it's a local variable assignment which always evaluates to 'true' since assigning the local variable `odd_count` to an integer object with value `3` will always return `3` - a truthy expression.
=end