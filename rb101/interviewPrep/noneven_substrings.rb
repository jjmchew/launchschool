=begin

10:51 - 11:01  : 10 minutes


Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

input
  - string : series of digits
output
  - integer : # of odd 'substrings' that can be found from given string
rules
  - assume digits only in string
  - substrings are formed of consecutive digits from given string


algorithm
  - find all substrings from given string (`substrings`) (use helper method)
      - initialize a collection array for substrings (`substrings`)
      - iterate from index 0...string.length : `start` index
          - iterate from index `start` + 1 ... string.length : `finish` index
              - take a substring from between `start` and `finish`
              - add substring to 'collection array', `substrings`

  - initialize `counter` (for odd numbers from substrings), initial value 0
  - iterate across `substrings`
      - convert to an integer and check if the number is odd
      - if so, increment `counter`


notes
  - can use .odd? to determine if resulting substrings are odd
  - can find all substrings of given numbers

=end

def get_substrings(string)
  substrings = []
  (0...string.length).to_a.each do |start|
    (start...string.length).to_a.each do |finish|
      # p "#{start} #{finish}"
      substrings << string[start..finish]
    end
  end

  substrings
end

def solve(string)
  substrings = get_substrings(string)
  counter = 0
  substrings.each do |str|
    counter += 1 if str.to_i.odd?
  end
  counter
end

p solve("1341") == 7
p solve("1357") == 10
p solve("13471") == 12
p solve("134721") == 13
p solve("1347231") == 20
p solve("13472315") == 28

