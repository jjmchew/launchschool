=begin

14:43 - 14:53  :  10 minutes

https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/ruby

The wave (known as the Mexican wave in the English-speaking world outside North America) is an example of metachronal rhythm achieved in a packed stadium when successive groups of spectators briefly stand, yell, and raise their arms. Immediately upon stretching to full height, the spectator returns to the usual seated position.

The result is a wave of standing spectators that travels through the crowd, even though individual spectators never move away from their seats. In many large arenas the crowd is seated in a contiguous circuit all the way around the sport field, and so the wave is able to travel continuously around the arena; in discontiguous seating arrangements, the wave can instead reflect back and forth through the crowd. When the gap in seating is narrow, the wave can sometimes pass through it. Usually only one wave crest will be present at any given time in an arena, although simultaneous, counter-rotating waves have been produced. (Source Wikipedia)

Task

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

Rules

 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example

wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

Good luck and enjoy!

input
  - string : 1 or multiple words
output
  - an array with the same string repeated for each element, but 1 new letter changed to uppercase
rules
  - output array will have as many elements as characters (not incl. spaces) in the input string
  - input string is always all lowercase
  - assume no non-alphabetic char other than spaces
  - uppercase letter 'moves' through the string starting from index 0 to the last index (last element)
  - any initial spaces in the string remain unchanged
  - empty strings return an empty array
notes

algorithm
  - initialize an output array, initially empty
  - iterate through the input string using an index (0...string.length)
      - if the char at 'index' is alphabetic, then change it to uppercase
          - assign the entire string to the new output array, and change the char at that index (ensure we create a copy of that string, otherwise, all strings will have uppercase letters since each instance references the same string object)
  - return the output array

=end

def wave(string)
  output = []
  (0...string.length).each do |index|
    if ('a'..'z').to_a.include?(string[index])
      tmp = string.dup
      tmp[index] = tmp[index].upcase
      output << tmp
    end
  end
  output
end

p wave("hello") == ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
p wave("codewars") == ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]
p wave("") == []
p wave("two words") == ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]
p wave(" gap ") == [" Gap ", " gAp ", " gaP "]