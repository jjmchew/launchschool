=begin
10:00 am - 10:23  :  23 minutes


Complete the solution so that it returns the number of times the search_text is found within the full_text.

Usage example:

solution('aa_bb_cc_dd_bb_e', 'bb') # should return 2 since bb shows up twice
solution('aaabbbcccc', 'bbb') # should return 1

input
  - string `full`
  - string `search`
output
  - integer : # of times that `search` appears in `full`
rules
  - assume case sensitive
  - assume special characters may be present

algorithm
  - initialize a counter to count the number of times `search` appears in `full` (`match`)
      - initially assigned to integer value 0
  - iterate across each character of `full`, track index of the current character
      - if the current character is equal to the first character of `search`
          - check the next character of `full` against next character of `search`  (`search_match?`)
          - if all characters in 'search' match to characters in `full`, increment `match` by 1
  - return `match`
        
  
  - search_match?
      - using `full_idx` to continue iterating;  `search_idx` will always start with 0
      - iterate with increasing indices to the last index of search_idx (length of search string - 1)
          - iterate search from index 1..(search.length-1)
          e.g.,         full      search
                        abbc      bb
          match index   1         0
          search_match? 1+1       1

notes
  - `.match` doesn't seem to work
  - `.count` doesn't seem to work

=end

def search_match?(full, search, full_idx)
  full_idx += 1
  (1...search.length).to_a.each do |search_idx|
    # p search_idx
    return false unless full[full_idx] == search[search_idx]
    full_idx += 1
  end
  true
end

def solution(full, search)
  match = 0
  full.chars.each_with_index do |full_char, full_idx|
    if full_char == search[0]
      # p "#{full_char} #{full_idx}"
      match += 1 if search_match?(full, search, full_idx)
    end
  end
  match
end

p solution('abcdeb','b') == 2
p solution('abcdeb', 'a') == 1
p solution('abbc', 'bb') == 1
p solution('aobbodccdbocb', 'bob') == 0
p solution('abobbodccdbobcb', 'bob') == 2