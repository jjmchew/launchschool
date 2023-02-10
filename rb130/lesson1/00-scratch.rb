
# def compare(str)
#   puts "Before: #{str}"
#   after = yield(str)
#   puts "After: #{after}"
# end

# p compare('hi') { |word| word.upcase }

# #############################

# def time_it
#   time_before = Time.now
#   yield
#   time_after = Time.now

#   puts "It took #{time_after - time_before} seconds."
# end

# time_it { sleep(3) }
# time_it { puts "hello wold" }

# #############################

# def test(&block)
#   puts "1"
#   test2(block)
#   puts "2"
# end

# def test2(block)
#   puts "start"
#   block.call # (">>> ")
#   puts "finish"
# end

# test { |prefix="? "| puts prefix + "CONTENT" }


# #############################

# def sequence
#   counter = 0
#   Proc.new { counter -= 1 }
# end

# s1 = sequence
# s2 = sequence

# p s1.call
# p s1.call
# p s1.call

# p s2.call

# p s1.call


# #############################

# def call_me(some_code)
#   some_code.call
# end

# # name = "Robert"
# chunk = Proc.new { puts "hi #{name}" }
# name = "John"

# call_me(chunk)

# #############################

# def another_method(arg)
#   arg.chars.reverse.join("")
# end

# def my_method
#   yield("james")
# end

# p a = :to_s.to_proc
# p my_method(&a)

# p another_method("james")

