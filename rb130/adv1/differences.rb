# Group 1
my_proc = proc { |thing| puts "This is a #{thing}." }
puts my_proc
puts my_proc.class
my_proc.call
my_proc.call('cat')

# my_proc is like a block that has been "containerized" and can be called using the `#call` method
# when calling, Ruby does not enforce the need to pass an argument to the proc

puts
puts "================= Group 2 ======================"
puts

# Group 2
my_lambda = lambda { |thing| puts "This is a #{thing}." }
my_second_lambda = -> (thing) { puts "This is a #{thing}." }
puts my_lambda
puts my_second_lambda
puts my_lambda.class
my_lambda.call('dog')
# my_lambda.call
# my_third_lambda = Lambda.new { |thing| puts "This is a #{thing}." }

# output of objects is specifically identified as a "lambda" - but appears to be a TYPE of proc with # of arguments
# strictly enforced
# Lambdas are not their own class - they are a type of Proc

puts
puts "================= Group 3 ======================"
puts

# Group 3
def block_method_1(animal)
  yield
end

block_method_1('seal') { |seal| puts "This is a #{seal}."}
# block_method_1('seal')

# since yield is used, `block_method_1` expects a block and will give a "LocalJumpError" if no block is given
# methods have strict arity - must provide all required arguments
# i.e., block_method_1 has strict arity
# since argument is NOT passed to the block, the output does not indicate `'seal'`
#   - the block itself has lenient arity


puts
puts "================= Group 4 ======================"
puts

# Group 4
def block_method_2(animal)
  yield(animal)
end

block_method_2('turtle') { |turtle| puts "This is a #{turtle}."}
block_method_2('turtle') do |turtle, seal|
  puts "This is a #{turtle} and a #{seal}."
end  

# second block parameter was not assigned a value by the 'yield' within the `'block_method_2'` definition
# block_method_2('turtle') { puts "This is a #{animal}."} # no block parameter defined, so "animal" returns a NameError
# the last call, with an additional block parameter 'seal' is automatically assigned a `nil` - lenient arity


=begin
Final summary:

Procs:
- are essentially an executable block
- have lenient arity, can be called without passing a defined 'block' argument

Lambdas:
- are a type of proc (not a specific class of their own)
- have strict arity

Methods:
- if `yield` is used defines strict arity for method (i.e., block argument MUST be passed)
- actual block itself has lenient arity

=end