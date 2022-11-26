=begin
7:40 pm - 7:50 : 10 minutes

input
  - integer 'desired_nth': which indicates the nth number of the fibonacci sequence desired
output
  - integer:  the nth number of the fibonacci sequence

algorithm
  - initialize 3 var : 
      n_1 :  is the n-1 fibonacci num : initially starts as 1
      n   :  is the nth fibonacci num : initially starts as 2
      nth :  tracks which fibonacci n represents : initially starts as 3

  - iterate nth and calculate the next fibonacci num by adding n_1 + n
      - then re-assign 'n_2', 'n_1', 'n'
      - iterate until nth is equal to the input integer 'desired_nth'

=end

def fibonacci(desired_nth)
  return 1 if desired_nth <= 2

  n_1 = 1
  n = 2
  nth = 3
  loop do
    break if nth == desired_nth
    tmp = n
    n = n + n_1
    n_1 = tmp
    nth += 1
    # p "#{nth}th number is #{n} and n-1 is #{n_1}"
  end
  n
end

# test cases
p fibonacci(20) == 6765
p fibonacci(100) == 354224848179261915075
p fibonacci(100_001) # => 4202692702.....8285979669707537501


# 1 1 2 3 5 8 13 21 34 ... 