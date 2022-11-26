=begin
7:52 pm - 


=end

def fibonacci(nth)
  return 1 if nth <= 2
  n_1, n = [1, 2]
  
  4.upto(nth) do
    n_1, n = [n, (n + n_1) % 10]
  end
  n
end

def fibonacci_last(nth)
  return 1 if nth <= 2
  n_1, n = [1, 1]
  
  3.upto(nth) do
    n_1, n = [n, (n + n_1) % 10]
  end
  n
end


p fibonacci_last(15)        # -> 0  (the 15th Fibonacci number is 610)
p fibonacci_last(20)        # -> 5 (the 20th Fibonacci number is 6765)
p fibonacci_last(100)       # -> 5 (the 100th Fibonacci number is 354224848179261915075)
p fibonacci_last(100_001)   # -> 1 (this is a 20899 digit number)
p fibonacci_last(1_000_007) # -> 3 (this is a 208989 digit number)
p fibonacci_last(123456789) # -> 4


# 1 1 2 3 5 8 13 21 34 ... 