# 9:14 pm - 9:18 pm  :  4 minutes

=begin
Return substring instance count
Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1

input
  - string1 : `full` - longer string of characters / text
  - string2 : `search` - a substring 
output
  - integer : number of times that string2 appears in string1
rules
  - case sensitive
notes
  - can use `.scan`
algorithm
  - initialize a local variable 'items' to the value of scan for `search` in `full`
  - return the count of elements in `items`

=end

def solution(full, search)
  items = full.scan(search)
  items.count
end

p solution('abcdeb','b') == 2
p solution('abcdeb', 'a') == 1
p solution('abbc', 'bb') == 1
