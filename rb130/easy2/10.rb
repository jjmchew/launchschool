
def each_cons(array, num)
  array.each_with_index do |element, idx|
    if idx <= array.length-num
      if num > 2
        val2 = []
        sub_idx = idx + 1
        loop do
          val2 << array[sub_idx]
          sub_idx += 1
          break if sub_idx >= idx + num
        end
        # p val2
        val2
      elsif num == 2
        val2 = array[idx + 1]
      elsif num <= 1
        val2 = nil
      end

      # puts "yield happens for #{idx}"
      yield(element, *val2) 
    end
  end
  nil
end

hash = {}
each_cons([1, 3, 6, 10], 1) do |value|
  hash[value] = true
end
p hash == { 1 => true, 3 => true, 6 => true, 10 => true }

hash = {}
each_cons([1, 3, 6, 10], 2) do |value1, value2|
  hash[value1] = value2
end
p hash == { 1 => 3, 3 => 6, 6 => 10 }

hash = {}
each_cons([1, 3, 6, 10], 3) do |value1, *values|
  hash[value1] = values
end
p hash #== { 1 => [3, 6], 3 => [6, 10] }

hash = {}
each_cons([1, 3, 6, 10], 4) do |value1, *values|
  hash[value1] = values
end
p hash #== { 1 => [3, 6, 10] }

hash = {}
each_cons([1, 3, 6, 10], 5) do |value1, *values|
  hash[value1] = values
end
p hash == {}