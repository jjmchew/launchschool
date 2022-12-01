=begin 
  Find the length of the longest substring between two identical characters.
  Do not include the matching characters in the lenght.
  
input
  - string: 
output
  - integer : length of longest substring between matching characters
rules
  - only lowercase characters in input string
  - assume only lowercase alphabetic characters in string
notes
  - e.g. 'kaueajdapa'
      a : 1, 4, 7, 9  => 9 - 1 - 1 = 7
  - any characters that aren't repeating aren't that important
    - could use `count` to find characters of interest

algorithm

  - initialize a tracking variable for longest substring `length`
  - iterate through a list of unique characters in the string
      - test the count of those characters
      - if the count of that character (in the given string) >= 2

        - find the largest and smallest index for any repeated characters
            - use helper method `get_indexes` : can use first element and last element
            - the length of the longest substring will be last index - first index - 1
        - if longest substring is longer than `length` then re-assign `length` to new substring length

  - return `length`


  - helper method:  find all indexes for a given letter `get_indexes`
      - iterate across the characters with index
          - if the char matches the desired, then add the index to an array

=end
def get_indexes(string, target)
  indexes = []
  string.chars.each_with_index do |char, index|
    indexes << index if char == target
  end
  indexes
end

def longest(string)
  length = 0

  string.chars.uniq.each do |char|
    if string.count(char) >= 2
      # p "#{char} #{string.count(char)}"
      
      indexes = get_indexes(string, char)
      new_length = indexes.last - indexes.first - 1
      length = new_length if new_length > length
    end
  end

  length
end

# p longest('kaueajdapa')
p longest('asdjamesieoadkkd') == 12
p longest('asdfghjkk') == 0
p longest('hellohowareyoubb') == 8
p longest('kauuakdaka') == 7