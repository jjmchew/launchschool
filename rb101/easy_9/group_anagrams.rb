# input:
#   - array of words

# output:
#   - groups of words (in arrays) that are anagrams (letters can be re-arranged to form each other)

# assumptions / constraints:
#   - there are multiple possible groups of anagrams in the initial array
#   - treat non-alphabetic char as any other char (can be rearranged to form anagram, as well)

# data structure:
#   - use arrays / strings

# algorithm:
#   1.  create empty hash to track 'groups of letters' and also corresponding words from list
#   1.  iterate across words: 
#   2.  convert word into list of chars, sort that list > use this as a reference to keep track of groups of letters
#   3.  - if group of letters has been previously identified than add word to list of words for that group
#       - if NOT previously identified, create new group of letters, add that word to the list
    
# test cases / examples:
words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']

        # ["demo", "dome", "mode"]
        # ["neon", "none"]
        # etc

def anagrams(words)
  groups = {}
  words.each do |word|
    key = word.chars.sort
    if groups.include? key
      groups[key] << word
    else
      groups[key] = [word]
    end
  end
  groups
end

p anagrams(words).values