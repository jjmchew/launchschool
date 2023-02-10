=begin
input
  - array of sorted integers
output
  - array of integers :  only the 'missing' elements between the first and last elements of given array
rules
  - if no integers are missing b/w first and last elements, then return empty array
  - if only 1 element is given, then return an empty array
  - assume only integers are given; no data validation needed on input array (i.e., sorted)
  - integers can be +ve or -ve

algorithm
  - initialize an empty 'result' array
  - start with first element of array (element 0)
  - iterate following:
      - does 'current' element equal the last element?
      - if not:
          - add 1 to the current element
          - is the new number part of the given array?
          - if not:
              - add it to the result array
          - if so, continue
      - if so, then stop iterating
  - return the result array

notes
  - start from first element, add 1 and then check if it's present in given array
  - if not, then add to result array

=end

def missing(array)
  result = []

  current = array.first
  while current != array.last do
    current += 1
    result << current unless array.include? current
  end
  result
end

p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []

