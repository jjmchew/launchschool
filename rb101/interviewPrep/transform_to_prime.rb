=begin

13:10 - 13:25  :  15 minutes

Task :
Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .

Notes
    List size is at least 2 .
    List's numbers will only positives (n > 0) .
    Repetition of numbers in the list could occur .
    The newer list's sum should equal the closest prime number .

Input >> Output Examples

    1- minimumNumber ({3,1,2}) ==> return (1)
    Explanation:
        Since , the sum of the list's elements equal to (6) , the minimum number to be inserted to transform the sum to prime number is (1) , which will make the sum of the List equal the closest prime number (7) .

    2-  minimumNumber ({2,12,8,4,6}) ==> return (5)
    Explanation:
        Since , the sum of the list's elements equal to (32) , the minimum number to be inserted to transform the sum to prime number is (5) , which will make the sum of the List equal the closest prime number (37) .

    3- minimumNumber ({50,39,49,6,17,28}) ==> return (2)
    Explanation:
        Since , the sum of the list's elements equal to (189) , the minimum number to be inserted to transform the sum to prime number is (2) , which will make the sum of the List equal the closest prime number (191) .

input
  - array of numbers
output
  - integer : to add to sum of numbers in array to make the next largest prime number from sum of elements
rules
  - if 2 primes are equal distance away return the greater prime
  - all numbers are +ve
algorithm
  - find the sum of the numbers in the array (`sum`)
  - find the next greater prime number from `sum` (i.e., greater than `sum`)
      - increment `sum` (non-destructively) and check if the new number is prime
  - return the difference between `next_prime` and `sum`

notes
  - prime number :  only divisible by 1 and itself
      - method for prime?  can  include : from `(2...num)  >  |index|   =>  num % index != 0
  - find sum of array
  - find the closest prime number
  - return the difference b/w closest prime and sum

=end

def sum(array)
  array.inject(:+)
end

def prime?(num)
  (2...num).each do |index|
    return false if num % index == 0
  end
  true
end

def minimum_number(array)
  test = sum(array)
  loop do
    break if prime?(test)
    test += 1
  end
  test - sum(array)
end

p minimum_number([3,1,2]) == 1
p minimum_number([5,2]) == 0
p minimum_number([1,1,1]) == 0
p minimum_number([2,12,8,4,6]) == 5
p minimum_number([50,39,49,6,17,28]) == 2