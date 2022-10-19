x = 0
result = while x < 5
  puts x
  x+= 1
  break x if x == 3
end

p result
