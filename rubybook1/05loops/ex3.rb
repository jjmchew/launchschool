def countdown(num)
  puts num
  countdown(num-1) if num >= 1
end

countdown(7)
countdown(10)
