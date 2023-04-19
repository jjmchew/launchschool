def my_method(num, &block)
  block.call if block_given?
  yield if block_given?
end

my_proc = method(:my_method).to_proc

p my_proc # this is actually a lambda since it was created from a method (strict arity - a block parameter is required)

my_proc.call(3) #{ puts "a block!" }