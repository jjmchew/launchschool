# def my_method(&block)
#   block.call if block_given?
#   yield if block_given?
# end

# my_proc = method(:my_method).to_proc

# p my_proc

# my_proc.call

# ###############################################

# def lambda_return
#   new_lambda = lambda do
#     puts "I'm in new_lambda"
#     return "a lambda return string"
#   end

#   new_proc = proc do
#     puts "I'm in new_proc"
#     return "a return string"
#   end

#   # loop do
#   #   puts "in loop"
#   #   return
#   # end

#   puts "Before lambda call."
#   new_proc.call  # changing this to new_lambda.call creates different behaviour
#   puts "After lambda call."
# end

# p lambda_return

# ###############################################

# new_lambda = -> (new, new2) { puts "#{new} #{new2}" }
# new_lambda2 = lambda { |new, new2| puts "#{new} #{new2}" }

# p new_lambda

# new_lambda.call('pizza', "pie")
# new_lambda2.call('hello', 'goodbye')

# ###############################################

# name = "John"
# my_closure = lambda { puts "hello #{name}" }
# my_closure.call

# name = "Bob"
# my_closure.call

# ###############################################

# def my_method(&chunk)
#   chunk.call
# end

# my_method

# ###############################################

# def a_method
#   puts "before"
#   proc {puts "pizza"; return}.call
#   puts "after"
# end

# a_method
# ###############################################

# my_proc_2 = Proc.new { puts b }

# my_proc_2.call # => ERROR

# def b
#   "I said b"
# end

# ###############################################

# Replace the two `method_name` placeholders with actual method calls
# def convert_to_base_8(n)
#   n.to_s(8).to_i
# end

# # Replace `argument` with the correct argument below
# # `method` is `Object#method`, not a placeholder
# base8_proc = method(:convert_to_base_8).to_proc

# # We'll need a Proc object to make this code work
# # Replace `a_proc` with the correct object
# p [8, 10, 12, 14, 16, 33].map(&method(:convert_to_base_8))

# # p convert_to_base_8(8)

# ###############################################

# def my_to_s(num)
#   num.to_s
# end

# lambda1 = -> (num) { num.to_s }
# lambda2 = method(:my_to_s).to_proc
# lambda3 = method(:to_s).to_proc
# lambda4 = lambda { |num| my_to_s(num) }

# p "1: #{lambda1}" # "1: #<Proc:0x0000558b30f8f730 test.rb:106 (lambda)>" 
# p "2: #{lambda2}" # "2: #<Proc:0x0000558b30f8eee8 (lambda)>" 
# p "3: #{lambda3}" # "3: #<Proc:0x0000558b30f8eab0 (lambda)>"
# p "4: #{lambda4}" # "4: #<Proc:0x00005643266fa0d0 test.rb:109 (lambda)>" 

# puts "1: #{[1, 2, 3].map(&lambda1)}" # 1: ["1", "2", "3"]
# puts "2: #{[1, 2, 3].map(&lambda2)}" # 2: ["1", "2", "3"]
# # puts "3: #{[1, 2, 3].map(&lambda3)}" # raises an ArgumentError
# puts "4: #{[1, 2, 3].map(&lambda4)}" # 4: ["1", "2", "3"]
# puts "&:to_s: #{[1, 2, 3].map(&:to_s)}" # &:to_s: ["1", "2", "3"]

# # lambda3.call(3) # raises an ArgumentError

# ###############################################

# def method1(num)
#   puts "in method1"
#   lambda1 = lambda { |num| num.to_s }
#   p "from method 1: #{lambda1}"
#   lambda1.call(num)
# end

# # lambda1 = method1

# p method1(3)

# lambda2 = method(:method1).to_proc
# p lambda2
# p [1, 2, 3].map(&lambda2)

# ###############################################



# ###############################################


# ###############################################


# ###############################################


# ###############################################


