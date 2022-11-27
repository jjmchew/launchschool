=begin
11:02 am - 11:10 am : 8 minutes


Write function scramble(str1, str2) that returns true if a portion of str1 can be rearranged to match str2.  otherwise, return false
Only lower case letters will be used (a-z).  No punctuation or digits will be included.

input
  - str1 : string 
  - str2 : 'ref' string
output
  - true / false
rules
  - if all letters in str2 are in str1, then return true
  - only lowercase in both str1 and str2
  - no punctuation or digits

algorithm
  - iterate across each letter of str2
      - check if that letter exists in str1
          - if so, then delete that letter from str1 (to prevent double-counting)
          - if not, return false (true not possible)
  - return true as default

notes
  - need to ensure the right number of letters - i.e., can't double-count letters in str1 if they appear multiple times in str2
  e.g., str2 is 'oommee';  then can't return true to str1 as 'ome'

=end

def scramble(str1, str2)
  str1_dup = str1.clone
  
  str2.chars.each do |char|
    if str1_dup.include?(char)
      # p "in if #{char}" 
      str1_dup.sub!(char,"-")
    else
      return false
    end
  end
  true
end

p scramble('javaass', 'jjss') == false
p scramble('rkqodlw', 'world') == true
p scramble('cedewaraaossoqqyt', 'codewars') == true
p scramble('katas', 'steak') == false
p scramble('scriptjava', 'javascript') == true
p scramble('scriptingjava', 'javascript') == true