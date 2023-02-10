=begin
optimize the 'finding divisors' problem
  - half of the divisors gives you the other half

=end

def divisors(given)
  # p Math.sqrt(int).to_i
  output = []
  1.upto(Math.sqrt(given)+1).each do |num|
    if given % num == 0
      output << num unless output.include?(num)
      output << given / num unless output.include?(given/num)
    end
  end
  output.sort
end

p divisors(1) == [1]
p divisors(7) == [1, 7]
p divisors(12) == [1, 2, 3, 4, 6, 12]
p divisors(98) == [1, 2, 7, 14, 49, 98]
p divisors(99400891) == [1, 9967, 9973, 99400891] # may take a minute
p divisors(999962000357) == [1, 999979, 999983, 999962000357]