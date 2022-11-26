=begin
7:21 pm - 7:37 pm  : 16 minutes

Given array of strings - only lowercase characters - return an array of all characters that show up in all strings within the given array (including duplicates)
- don't mutate the original array

input
  - array of strings
output
  - array of characters : characters that appear in all strings of given array
rules
  - only lowercase characters
  - if characters appear multiple times in all words, they need to appear multiple times in output array
  - assume if only 1 word is in given array that we can return that word (all letters are common to all words in the array)

algorithm
  - use the first word in given array as 'reference word' ('ref_word')
  - create a copy of the given array and remove the first word ('word_list')
  - initialize a collection array for common characters ('common')

  - iterate across each character of 'ref_word'  ('ref_char')
      - check if 'ref_char' is part of each word in 'word_list'
      - if 'ref_char' is part of all words in 'word_list' then add it to 'common'
          - need to 'remove' the ref_char 'matched' from each word in word_list, otherwise, duplicate letters in initial word will be matched multiple times even if that letter only shows up once
            (e.g. 2nd test case:  cool matched o twice in lock, even though only 1 o exists)

  - return 'common'
=end

def common_chars(array)
  return [] if array.empty?
  return array if array.length == 1

  ref_word = array[0]
  word_list = array[1..-1]
  common = []

  dup_list = word_list.dup
  ref_word.chars.each do |ref_char|
    if dup_list.all? { |word| word.include?(ref_char) }
      common << ref_char
      dup_list.map { |word| word.sub!(ref_char, '-') }
    end
  end
  p dup_list
  common
end

# test case
p common_chars(["bella", "label", "roller"]) == ["e", "l", "l"]
p common_chars(["cool", "lock", "cook"]) == ["c", "o"]
p common_chars(["hello", "goodbye", "booya", "random"]) == ["o"]
p common_chars(["aabbaaaa", "ccddddddd", "eeffee", "ggrrrrrr", "yyyzzz"]) == []
