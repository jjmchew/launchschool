def my_method(name)
  yield(name)
end

a_block = proc { |name| "My name is #{name}" }
p a_block

p my_method('Joe', &a_block)
