# What's my value part 1
# a = 7

# def my_value(b)
#   b += 10
# end

# my_value(a)
# puts a

# predict a = 17 > WRONG
# b += 10 assigns b to a NEW memory location - does not alter the original a object (numbers are immutable)
# b is a separate variable with separate scope and just incrementing it does not change the original value of a

#==============================================
# What's my value part 2
# a = 7

# def my_value(a)
#   a += 10
# end

# my_value(a)
# puts a

# predict a = 7 - just changing the name of method var doesn't change how the method operates
# a = a + 10 still reassigns a new location in memory;  numbers are still immutable
# RIGHT

#==============================================
# What's my value part 3
# a = 7

# def my_value(b)
#   a = b
# end

# my_value(a + 5)
# puts a

# predict a = 7;  assignment in method of "a" is independent (method vars are self-contained) of main scope var a
# RIGHT

#==============================================
# What's my value part 4
# a = "Xyzzy"

# def my_value(b)
#   b[2] = '-'
# end

# my_value(a)
# puts a

# predict Xyzzy;  method vars are independent, strings are not passed by assignment
# WRONG!
# strings are passed by reference to the method, so changing 1 part directly (a destructive string method) does mutate a

#==============================================
# What's my value part 5
# a = "Xyzzy"

# def my_value(b)
#   b = 'yzzyX'
# end

# my_value(a)
# puts a

# predict Xyzzy : reassignment b = 'yzzyX' is a new assignment to a different memory location
# RIGHT!  "=" is a different method than String[]=

#==============================================
# What's my value part 6
# a = 7

# def my_value(b)
#   b = a + a
# end

# my_value(a)
# puts a

# predict 7:  giving b a value of a + a doesn't change a
# WRONG!  a is not visible inside the method my_value;  methods are totally self-contained; 
# NOTE: vars defined outside of a blocks, procs, lambdas may be visible inside

#==============================================
# What's my value part 7
# a = 7
# array = [1, 2, 3]

# array.each do |element|
#   a = element
# end

# puts a
# predict 3:  a is reassigned by array.each block so value returned is based on last assignment
# RIGHT

#==============================================
# What's my value part 8
# array = [1, 2, 3]

# array.each do |element|
#   a = element
# end

# puts a

# predict error:  a defined in block is not accessible out of block
# RIGHT!

#==============================================
# What's my value part 9
# a = 7
# array = [1, 2, 3]

# array.each do |a|
#   a += 1
# end

# puts a

# predict 7 : local "a" in array.each block is not the same as "a" outside block ('shadowing')
# outside a never changes, inside a is incremented, but never used
# RIGHT!

#==============================================
# What's my value part 10
# a = 7
# array = [1, 2, 3]

# def my_value(ary)
#   ary.each do |b|
#     a += b
#   end
# end

# my_value(array)
# puts a
# predict error : "a" in def (method) is not defined, can't do +=








