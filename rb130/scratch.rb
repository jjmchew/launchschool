# def call_me(name, age, &some_code)
#   some_code.call(name) if block_given?
#   puts "age: #{age}"
# end

# name = "Robert"
# # chunk_of_code = Proc.new {puts "hi #{name}"}
# name = "Griffin III"        # re-assign name after Proc initialization

# # call_me(chunk_of_code)
# # chunk_of_code.call

# # call_me(name, 34) { |name| puts "hi #{name}" }
# call_me(name, 34)


# def a_method(name)
#   p "hi #{name}"
#   yield(name)
# end


# p a_method("Bob") { |name| "My name is #{name}" }

# a_block = Proc.new { |name| "My name is #{name}" }

# p a_block

# p a_method("Joe", &a_block)

# def my_method(name, &proc)
#   proc.call(name)
# end

# a_proc = Proc.new { |name| "My name is #{name}" }
# p my_method('Joe', &a_proc)

def my_method(name, &blk)
  p yield(name)
  p blk.call('James')
end

stored = my_method('Joe') { |name| "My name is #{name}" }

p stored.class