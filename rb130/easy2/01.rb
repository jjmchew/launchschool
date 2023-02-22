
def step(start_num, end_num, inc)
  counter = start_num
  while counter <= end_num do
    yield(counter)
    counter += inc
  end
  end_num
end


step(1, 10, 3) { |value| puts "value = #{value}" }

# value = 1
# value = 4
# value = 7
# value = 10