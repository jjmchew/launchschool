def some_method(&block)
  yield
end

bl = proc { puts "hi" }

some_method(&bl)