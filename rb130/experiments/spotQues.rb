# new_proc = Proc.new { |num| num + 10 }

# p new_proc.call(1)

# #########################

# arr = [1, 2, 3, 4, 5]

# p arr.map(&:to_s) # specifically `&:to_s`

# #########################

# def call_this
#   yield(2)
# end

# # your code here
# # to_s = proc { |num| num.to_i }
# # to_i = proc { |num| num.to_s }

# to_s = :to_i.to_proc
# to_i = :to_s.to_proc

# p call_this(&to_s) # => returns 2
# p call_this(&to_i) # => returns "2"

# #########################

# def a_method(&chunk)
#   chunk.call
# end

# a_method { puts "You got me!" }

# #########################

# def block_method(animal)
#   yield(animal)
# end

# block_method('turtle') do |turtle, seal|
#   puts "This is a #{turtle} and a #{seal}."
# end

# block_method('turtle') { puts "This is a #{animal}."}

# ######################### Question 24

# def call_me(some_code)
#   some_code.call
# end

# name = "Robert"
# chunk_of_code = Proc.new {puts "hi #{name}"}
# name = "Griffin"

# call_me(chunk_of_code)

# ######################### Question 25

# def call_me(some_code)
#   some_code.call
# end

# chunk_of_code = Proc.new {puts "hi #{name}"}
# name = "Griffin"

# call_me(chunk_of_code)

# ######################### Question 26

# def call_me(some_code)
#   some_code.call
# end

# name = "Robert"

# def name
#   "Joe"
# end

# chunk_of_code = Proc.new {puts "hi #{name()}"}

# call_me(chunk_of_code)

# ######################### Question 27

# def a_method(pro)
#   pro.call
# end

# a = 'friend'
# a_method(&a)

# ######################### Question 28

# def some_method(block)
#   block_given?
# end

# bl = { puts "hi" }

# p some_method(bl)

# ######################### Question 29 and 30

# def some_method(&block)
#   block_given?
# end

# bloc = proc { puts "hi" }

# p some_method(&bloc)

# ######################### Question 32 a

# def some(&block) # updated to indicate an explicit block
#   yield
# end

# bloc = proc { p "hi" } # do not alter

# some(&bloc) # updated to convert proc `bloc` to a block

# ######################### Question 32 b

# def some(block)
#   block.call # updated to call the proc `block`
# end

# bloc = proc { p "hi" } # do not alter

# some(bloc)

# ######################### Question 33

# bloc = lambda { p "hi" }

# p bloc.class # => Proc
# p bloc.lambda? # => true

# new_lam = Lambda.new { p "hi, lambda!" } # => NameError: uninitialized constant Lambda

# ######################### Question 34

# def lambda_return
#   puts "Before lambda call."
#   lambda {return}.call
#   puts "After lambda call."
# end

# def proc_return
#   puts "Before proc call."
#   proc {return}.call
#   puts "After proc call."
# end

# lambda_return #=> "Before lambda call."
#               #=> "After lambda call."

# proc_return #=> "Before proc call."

# ######################### Question 35

# def retained_array
#   arr = []
#   Proc.new do |el|
#     arr << el
#     arr
#   end
# end

# arr = retained_array
# arr.call('one')
# arr.call('two')
# p arr.call('three')

# #########################

# #########################


# #########################


# #########################


# #########################


# #########################


# #########################

