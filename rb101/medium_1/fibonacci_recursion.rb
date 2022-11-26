=begin
8:33 - 8:38 : 5 minutes

rule
  - each fibonacci number is based on the sum of the 2 numbers prior
algorithm
  - create recursive method that calls itself for the 2 prior numbers


=end

def fibonacci(num)
  return 1 if num == 1 || num == 2
  fibonacci(num - 1) + fibonacci(num - 2)
end

# test cases
p fibonacci(1) == 1
p fibonacci(2) == 1
p fibonacci(3) == 2
p fibonacci(4) == 3
p fibonacci(5) == 5
p fibonacci(12) == 144
p fibonacci(20) == 6765