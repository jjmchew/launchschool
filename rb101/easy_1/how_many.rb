# Problem:  P i o a m
# inputs:
#   given array
vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

# output:
#   given output:  word => num of counts
#   similar to a hash

# assumptions / constraints:
#   - words ARE case-sensitive
#   - empty array returns empty results


# Examples / test cases:  E t
#   (see below)

# Data structure 
#   - use hash with keys as word, value as count

# Algorithm Code
#   1. Prepare empty hash
#   2. Iterate through the given array.  For each word in the array:
#       a.  check if word (key) already exists in hash
#       b.  if not, then create new key and set count to 1
#       c.  if so, then increment count by 1
#   3.  Output the hash

def count_occurrences(given_array)
  count_hash = {}
  given_array.each do |word|
    if count_hash.key? word
      count_hash[word] += 1
    else
      count_hash[word] = 1
    end
  end
  count_hash
end

p count_occurrences(vehicles) == { "car" => 4, "truck" => 3, "SUV" => 1, "motorcycle" => 2 }
p count_occurrences([]) == {}
p count_occurrences(['pizza']) == { 'pizza' => 1 }

