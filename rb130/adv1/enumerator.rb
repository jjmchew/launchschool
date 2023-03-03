ans = Enumerator.new do |y|
  result = 1
  count = 0
  loop do
    result = count.zero? ? 1 : result * count
    y << result
    count += 1
  end
  p "result is #{result}"
end

p ans.take(10)

6.times { p ans.next }
6.times { p ans.next }
ans.rewind

6.times { p ans.next }