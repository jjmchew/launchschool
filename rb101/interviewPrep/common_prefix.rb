=begin
10:49 pm - 10:56 pm : 7 minutes


Write a method to find the longest common prefix string amongst an array of strings

If there is no common prefix, return an empty string "".

Example 1:
given:  ["flower", "flow", "flight"]
output: "fl"

example 2:
given: ["dog", "racecar", "car"]
output:  ""

Note:  all inputs are lowercase lettesr a-z

algorithm
  - take first word as 'reference'
  - create 'word_list' which is given array without the first element
  - initialize a 'collection string' ('prefix')

  - iterate across letters of 'reference'
      - check if that letter is the first letter of each word in 'word_list'
      - if so:  add letter to 'prefix'
      - if not:  return prefix

=end

def common_prefix(array)
  reference = array[0]
  word_list = array.dup
  word_list.shift

  prefix = ""
  reference.chars.each_with_index do |char, index|
    if word_list.all? { |word| word[index] == char }
      prefix += char
    else
      return prefix
    end
  end

  prefix
end

p common_prefix(["flower", "flow", "flight"]) == "fl"
p common_prefix(["dog", "racecar", "car"]) == ""
p common_prefix(["interspecies", "interstellar", "interstate"]) == "inters"
p common_prefix(["throne", "dungeon"]) == ""
p common_prefix(["throne", "throne"]) == "throne"