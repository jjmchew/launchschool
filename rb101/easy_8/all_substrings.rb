
def substrings(string)
  array = []
  0.upto(string.length-1) do |start|
    start.upto(string.length-1) do |finish|
      array << string[start..finish]
    end
  end
  array
end

p substrings('abcde') == [
  'a', 'ab', 'abc', 'abcd', 'abcde',
  'b', 'bc', 'bcd', 'bcde',
  'c', 'cd', 'cde',
  'd', 'de',
  'e'
]