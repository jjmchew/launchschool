items = ['apples', 'corn', 'cabbage', 'wheat']

def gather(items)
  puts "Let's start gathering food."
  yield(items)
  puts "We've finished gathering!"
end

# 1
gather(items) do | *arg1, arg2 |
  puts arg1.join(", ")
  puts arg2
end

puts

# 2
gather(items) do | arg1, *arg2, arg3 |
  puts arg1
  puts arg2.join(", ")
  puts arg3
end

puts

# 3
gather(items) do | arg1, *arg2 |
  puts arg1
  puts arg2.join(", ")
end

puts

# 4
gather(items) do | arg1, arg2, arg3, arg4 |
  puts "#{arg1}, #{arg2}, #{arg3}, and #{arg4}"
end