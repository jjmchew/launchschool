=begin
63. Who likes it?
(https://www.codewars.com/kata/5266876b8f4bf2da9b000362)
6 kyu
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement a function like :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

algorithm
  - address each case separately

notes
  - always add 'likes this' to the end
  - if  array empty - output 'no one'
  - try to develop rules by number of names left - complicated - unfinished
      - can go by number of names 'remaining' in the array
          - if 0 names remaining, output name
          - if 1 name remaining, output name + ' and '   && array.length 
          - if 2 names remaining, output name + ',  '
  - approach each case separately
      
=end


def likes(array)
  output_string = "no one likes this" if array.empty?
  output_string = array[0] + " likes this" if array.length == 1
  output_string = array[0] + " and " + array[1] + " like this" if array.length == 2
  output_string = array[0] + ", " + array[1] + " and " + array[2] + " like this" if array.length == 3
  output_string = array[0] + ", " + array[1] + " and #{array.length - 2} others like this" if array.length >= 4
  output_string
end

p likes([]) == "no one likes this"
p likes(["Peter"]) == "Peter likes this"
p likes(["Jacob", "Alex"]) == "Jacob and Alex like this"
p likes(["Max", "John", "Mark"]) == "Max, John and Mark like this"
p likes(["Alex", "Jacob", "Mark", "Max"]) == "Alex, Jacob and 2 others like this"
p likes(["Alex", "Jacob", "Mark", "Max", "James", "Jenny"]) == "Alex, Jacob and 4 others like this"