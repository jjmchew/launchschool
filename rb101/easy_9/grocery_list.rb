# input:
#   - array of fruit elements: [ "fruit", integer ]

# output:
#   - 'flat' array : [ "fruit" ... <integer times> , etc. ]

# assumptions / constraints:
#   - quantities are positive, could be 0

# data structure:
#   - arrays

# algorithm:
#   1.  initialize flat_list (output array) as empty array  
#   2.  iterate over each sub-array 'integer' times and push "fruit"

def buy_fruit(list)
  flat_list = []
  list.each do |sublist|
    sublist[1].times { |_| flat_list << sublist[0] }
  end
  flat_list
end

# test cases / examples:
p buy_fruit([["apples", 3], ["orange", 1], ["bananas", 2]]) ==
  ["apples", "apples", "apples", "orange", "bananas","bananas"]