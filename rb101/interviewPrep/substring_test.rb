=begin

9:26 am - 10:35 am (with many breaks)
This was hard for me to logic through - creating the table was vey helpful.  Practice creating these kinds of tables more!

Given 2 strings, find out if there is a substring that appears in both strings.
Return true if you find a substring that appears in both strings.
Return false if you do not.
We only care about substrings that are longer than 1 letter long.

input
  - 2 strings
output
  - boolean (true or false)
rules
  - if there is a substring that appears in both given strings, return true
  - if NOT, return false
  - empty strings are empty - i.e., they don't count as a string
  - case-insensitive

example
  reference:  'dHomeo'
  other word: 'Sochiomething'

  ref_char    other word    action
  d           no match      next iteration
  H.downcase  h (#1)        add to collection string
    o           i             no match, add (if length > 1)/reset collection string
              h (#2)        add to collection string
    o           i             no match, add (if length > 1)/reset collection string
    

algorithm
  - find the shortest string of the 2 given
  - use the shortest string as the 'reference' (`ref`)
  - initialize a 'collection' array (in case there are multiple substrings)
  
  - iterate across each letter of the reference (word) - use downcase;  use 'index to keep track of location'
      - initialize a 'collection' string (`common`)
      - see if the other word contains that letter
        - if SO:  then add that letter to the collection string
                  check the next letter of both strings (use helper method:  check_next)
                  - if the next letter of both strings is the same, then add it to the collection string
                  - if NOT:  add/reset the collection string (use helper method?: add_reset)
        - if NOT: keep checking the rest of the word for another matching instance
                  
  - check if there are any matching substrings (length > 1) in collection array


  - check_next (need `ref` word, `other` word, `ref_idx`, `other_idx` )
      - compare letter ref[ref_idx] to other[other_idx] 
          - if they are the same then add to `common` string
            then iterate both ref_idx and other_idx
          - if NOT the same, then end
      - return common string
=end

def get_reference(string1, string2)
  if string1.length < string2.length
    [string1.downcase, string2.downcase]
  else
    [string2.downcase, string1.downcase]
  end
end

def check_next(ref, other, ref_idx, other_idx)
  common = ""
  (ref_idx...ref.length).to_a.each do |idx1|
    if ref[idx1] == other[other_idx]
      common += ref[idx1]
      other_idx += 1
    else
      break
    end
  end
  # p common
  common
end

def substring_test(string1, string2)
  ref, other = get_reference(string1, string2)
  substrings = []

  ref.chars.each_with_index do |char, ref_idx|
    common = ""
    (0...other.length).to_a.each do |other_idx|
      if char == other[other_idx]
        # p "compare ref #{char.downcase} to other #{other[other_idx]}" 
        common = check_next(ref, other, ref_idx, other_idx)
      end
    end
    substrings << common if common.length > 1
  end
  
  !substrings.empty?
end

p substring_test('Something', 'Fun') == false
p substring_test('Something', 'Home') == true
p substring_test('Sochiomething', 'dHomeo') == true
p substring_test('Something', '') == false
p substring_test('', 'Something') == false
p substring_test('BANANA', 'banana') == true
p substring_test('test', 'lllt') == false
p substring_test('','') == false
p substring_test('1234567', '541265') == true
p substring_test('supercalifragilisticexpialidocious', 'SoundOfItIsAtrocious') == true
