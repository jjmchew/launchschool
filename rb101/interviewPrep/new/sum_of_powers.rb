=begin

https://www.codewars.com/kata/5552101f47fc5178b1000050/train/ruby

Some numbers have funny properties. For example:

    89 --> 8¹ + 9² = 89 * 1

    695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

    46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

    we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

In other words:

    Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

input
  - integer1 :  `n` - need to break this number into digits, is multiplied by k
  - integer2 : `p` - the starting exponent
output
  - integer:  `k` - is multiplied by `n` to equal 'sum of powers'
rules
  - each digit from n, is raised to an exponent, that exponent increases, starting from `p`, incrementing by 1 for each digit of `n`
  - `k` is +ve
  - assume that all integers are positive
  - find the sum of each 'digit power' 

algorithm
  - break up `n` into an array of digits
  - initialize `exp` as same value as `p`
  - initialize `sum` to track 'sum of powers'
  - iterate across digits:
      - raise each digit to the correct exponent `exp`
      - increment `exp` by 1
      - add the value of the power to `sum`
  
  - find possible values of `k`
      - divide 'sum' by `n` :  see if it divides evenly (no remainder)
      - if so, return this number `k`
      - if not, return -1

notes
  - break up `n` into digits : use `digits.reverse` to create an Array
  - iterate to solve for `k`
=end

def dig_pow(n, p)
  digits = n.digits.reverse
  exp = p
  sum = 0
  digits.each do |digit|
    sum += digit**exp
    exp += 1
  end

  return (sum / n) if sum % n == 0

  -1
end

p dig_pow(89, 1) == 1
p dig_pow(92, 1) == -1
p dig_pow(46288, 3) == 51
