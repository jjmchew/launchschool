=begin

15:40 - 15:56  :  16 minutes
15:56 - 16:10  :  +14 minutes - still haven't solved

Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]

sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]

Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements. Be sure your code doesn't time out.

input
  - array of numbers `ints`
  - integer `target`
output
  - array of 2 numbers : a subset of 2 elements from the given array
rules
  - both numbers must sum to `target`
  - if more than 1 set of numbers sums to `target`, the set where the 2nd index is smaller should be returned
  - sets of numbers are returned in the same order as in `ints`
  - elements of `ints` can be +ve or -ve

data structure
  - `pairs` :
        - key:  pair - a pair of numbers that sum to `target`
        - value:  [#, #]    - index of the second number
        
        - key: second
        - value: # - current second index

algorithm
  - initialize a 'tracking' hash : `pairs`
  - iterate through all pairs of numbers in `ints`
      - `first` index will be 0...ints.size
          - `second` index will be `first`+1 .. ints.size-1
              - if both numbers sum to `target` then save them in `pairs`
  - find smallest value in `pairs` and return the corresponding key
      - convert the hash to an array


notes
  - to optimize - change hash - don't store all pairs (no need), just compare second index of current match to stored match
=end

def sum_pairs(ints, target)
  pair = nil
  second_idx = ints.size

  (0...ints.size).each do |first|
    ((first+1)..ints.size-1).each do |second|
      # p "#{first} #{second} #{ints[first] + ints[second]}"
      if ints[first] + ints[second] == target && second < second_idx
        pair= [ints[first], ints[second]]
        second_idx = second
      end
    end
  end

  # p pairs
  # return nil if new_pairs.empty?
  pair
end

l1= [1, 4, 8, 7, 3, 15]
l2= [1, -2, 3, 0, -6, 1]
l3= [20, -13, 40]
l4= [1, 2, 3, 4, 1, 0]
l5= [10, 5, 2, 3, 7, 5]
l6= [4, -2, 3, 3, 4]
l7= [0, 2, 0]
l8= [5, 9, 13, -3]

p sum_pairs([4, 3, 2, 3, 4], 6) == [4,2]
p sum_pairs([10, 5, 2, 3, 7, 5],         10) == [3,7]
p sum_pairs(l1, 8) == [1, 7] #  "Basic: ["+l1.join(", ")+"] should return [1, 7] for sum = 8"
p sum_pairs(l2, -6) == [0, -6] # , "Negatives: ["+l2.join(", ")+"] should return [0, -6] for sum = -6"
p sum_pairs(l3, -7) == nil # , "No Match: ["+l3.join(", ")+"] should return nil for sum = -7"
p sum_pairs(l4, 2) == [1, 1] # , "First Match From Left: ["+l4.join(", ")+"] should return [1, 1] for sum = 2 "
p sum_pairs(l5, 10) == [3, 7] # , "First Match From Left REDUX!: ["+l5.join(", ")+"] should return [3, 7] for sum = 10 "
p sum_pairs(l6, 8) == [4, 4] # , "Duplicates: ["+l6.join(", ")+"] should return [4, 4] for sum = 8"
p sum_pairs(l7, 0) == [0, 0] # , "Zeroes: ["+l7.join(", ")+"] should return [0, 0] for sum = 0"
p sum_pairs(l8, 10) == [13, -3] # , "Subtraction: ["+l8.join(", ")+"] should return [13, -3] for sum = 10"
