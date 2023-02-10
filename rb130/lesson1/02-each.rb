def each(array)
  counter = 0

  while counter < array.length do
    yield(array[counter])
    counter += 1
  end

  array
end

each([11, 21, 31, 41, 51]) do |num|
  puts num
end