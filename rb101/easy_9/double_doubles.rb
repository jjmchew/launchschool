# input:
# - integer

# output:
# - integer : if existing number is a 'double' then return the double
#             if existing number is NOT a 'double' then integer * 2

# assumptions / constraints:
# - 

# data structure
#   - convert to string to test for 'double-ness'
#   - convert back to integer for math and final output

# algorithm
    # 1.  convert number to string
    # 2.  if odd number of digits then it can't be a double-double, skip to step 5
    # 3.  if even number of digits then find 'halfway' point of string new start index is (length / 2)
    # 4.  check if first half of string is equal to 2nd half of string
    #     - if so: then digit is a double-double
    #     - if not: then digit is not a double-double
    # 5.  convert original number back into integer
    # 6.  - if NOT a double-double then multiply by 2
    #     - if it IS a double-double, then just return

def twice(num)
  str = num.to_s
  if str.length.even?
    if str[0, str.length/2] == str[str.length/2, str.length/2]
      double = true
    end
  else double = false
  end
  
  if double then return num
  else return num * 2
  end
end

# Test cases / examples

p twice(37) == 74
p twice(44) == 44
p twice(334433) == 668866
p twice(444) == 888
p twice(107) == 214
p twice(103103) == 103103
p twice(3333) == 3333
p twice(7676) == 7676
p twice(123_456_789_123_456_789) == 123_456_789_123_456_789
p twice(5) == 10