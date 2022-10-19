def execute(&block)
  # block # original code
  block.call
end

execute { puts "Hello from inside the execute method!" }

# returns nothing since block wasn't called
#if line 2 becomes block.call, then returns Hello from inside the execute method!