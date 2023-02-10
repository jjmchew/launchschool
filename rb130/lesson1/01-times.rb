def times(number)
  counter = 0
  while counter < number do
    yield(counter)
    counter += 1
  end

  number
end



p (times(5) do |num|
  puts num
end)