=begin
9:02 am - 9:07 am : 5 minutes
        - 9:11 am : +4 minutes for optimization (don't create/check substrings that are the wrong length)

Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1

input
  - string 1:  `full`
  - string 2:  `search`
output
  - integer number:  the number of times `search` appears in `full`
rules
  - assume case sensitive

algorithm
  - initialize a counter for matches `counter`
  - iterate through each character of `full` (use indexes:  0...full.length )
      - take a substring which is the same length as `search`
      - compare that substring to `search` - if equal, then increment `counter` by 1
  - return `counter`

notes
  - optimizations:  don't form/check substrings that aren't the right length
      e.g., 'abbc'  length 4
            last index to create substring is 2  =>  full.length - search.length
            'abcdeb' length 6  search: 'de'
            last index is 4 => full.length - search.length
=end

def solution(full, search)
  counter = 0
  (0..(full.length - search.length)).to_a.each do |idx|
    # p full[idx, search.length]
    counter += 1 if full[idx, search.length] == search
  end
  counter
end

p solution('abcdeb','b') == 2
p solution('abcdeb', 'a') == 1
p solution('abbc', 'bb') == 1
p solution('aobbodccdbocb', 'bob') == 0
p solution('abobbodccdbobcb', 'bob') == 2

