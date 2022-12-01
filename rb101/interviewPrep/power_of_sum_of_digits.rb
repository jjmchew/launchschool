=begin

10:30 pm - 10:54 pm

https://www.codewars.com/kata/55f4e56315a375c1ed000159/train/ruby

The number 81 has a special property, a certain power of the sum of its digits is equal to 81 (nine squared). Eighty one (81), is the first number in having this property (not considering numbers of one digit). The next one, is 512. Let's see both cases with the details

8 + 1 = 9 and 9**2 = 81

512 = 5 + 1 + 2 = 8 and 8**3 = 512

We need to make a function that receives a number as argument n and returns the n-th term of this sequence of numbers.
Examples (input --> output)

1 --> 81

2 --> 512

input
  - integer 'n'
output
  - the nth term of sequence where:
      - digits are summed, then raised to the power of the number of digits to equal the original number
rules
  - numbers in sequence must satisfy conditions:
      - digits are summed, then raised to the power of the number of digits to equal the original number

notes
  - need to calc sum of the digits

=end


def seq_num?(n)
  exp = 0
  exp+=1 until n == (n.digits.sum) ** exp
  exp
end

def power_sumDigTerm(n)
  sequence = []
  num = 80
  loop do
    num += 1
    sequence << num if seq_num?(num)
    break if sequence.length == n || num > 5900
  end
  sequence.last
end

p power_sumDigTerm(1) == 81
p power_sumDigTerm(2) == 512
p power_sumDigTerm(3) == 2401
p power_sumDigTerm(4) #== 4913
# p power_sumDigTerm(5) #== 5832
# p power_sumDigTerm(6) #== 17576
# p power_sumDigTerm(7) #== 19683
# p power_sumDigTe#rm(22)

# 5832
# 17576
# 19683