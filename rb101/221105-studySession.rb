=begin

Questions: - people have said they write their answers somewhere else and then cut and paste, does that make sense?

- can we model how we might work with others today?
- after written assessment, great to work with someone else on what to do?
- do dry run with practice questions - put them together and sit down for 3.5 hrs to see if we can finish, etc.



- interface will be like the quizzes
- can run code snippets with repl, etc.
- best to double-check code before you submit answer
- make sure you don't have typo - so def run code
- we need to set our own timer to be sure we don't exceed 3.5 hours.  some people set mini-timers (e.g., 30 mins or per question)

- when answering - don't lose 'forest' for the trees - will be more specific than today.  think about what info is necessary and what isn't - don't write too much.  pay attention to what the question is asking and answer in enough detail

- use specific references to code.  e.g., the local variable hello initialized on line 1
- use precise language to differ between parameter, argument, method definition, etc.
- think about what the code is demonstrating, what is it asking for?
- take a step back after writing to summarize what's going on
- don't talk about things that aren't relevant to the question (can make question harder to grade, also run risk of making mistakes in extraneous info)
- don't be too vague - need to find balance

- studying for assessment.  recommend working with others; helpful to talk to others

- questions on assessment should be much more specific - should be clear what they're looking for
- be very comfortable with questions on the study guide, read student blogs, lots of examples there
- 

======= Example problem from study session

a = "Bob"
b = a
a = a + ' Smith'

p a
p b

# what are a and b? Explain why.

concept:  variables as pointers;  assignment is non-mutating
- liked var b is pointing to same object as a
- like 'reassignment' of a later
- p is a method, passing variable arguments


======= Example problem from study session

['a', 'b', 'c', nil, 'd'].select do |letter|
  letter
end

- have an array object, the select method is being called ON the array object.  the array is the calling object, the method is called on the object
- block is passed into the method
- letter is block parameter
- select method cares about the return value of the block, and determines what is returned overall
- for p arr : arr is passed into the p method

- this is primarily truthy / falsey
- this is working with collections


======= Example problem from study session

def a_method(number)
  number = 7
end

a = 5
a_method(a)
p a

# what is output?

- more precise to say a_method has the value that a is pointing to passed in - when it does get passed in, number and a both reference the same object, but in line 2, there is re-assignment on number, and we don't do anything 
- note p and print method are both different methods (p calls 'inspect' method on its argument, print just prints out the contents)
- i.e., p nil shows nil,   print nil shows [blank]

concept:  
- demonstrates local variable scope.  Working with method, number is a local variable, but it doesn't change anything on the outside of the method b/c of method scoping rules
- a is a local variable outside the method

======= Example problem from study session

a = 'Bob'

5.times do |a|
  a = 'Bill'
end

p a

# what is output and why? What concept does this demonstrate?
# how could we change the code to change a?
  - change block parameter name

- calling times method on integer 5 - good, but don't need to stray more into that loop since it doesn't do anything
- a is the block parameter, it's re-assigned
- scope in block is different

concept:  
  - variable shadowing:  a in the block uses the same name as a outside the block, so the local variable outside isn't affected
  - variable scoping: variables outside the scope can be accessed in the block (if not shadowed)


======= Example problem from study session

def a_method(string)
  string = string << 'world'
end

a = 'hello'
a_method(a)
p a

# what is the output? What concept is being demonstrated?

- need to talk about what is happening on line 2 with reassignment and shovel operator "<<" - the mutated output of the shovel output was re-assigned to the same 
- ruby will evaluate string << "world' side before reassignment - so still mutates


concept:
  - about mutating methods
  - demonstrating pass by reference (mutating)



  ======= Example problem from study session

  # Explain the following code, and identify the output. What underlying concepts does this demonstrate?

letters = ['a', 'b', 'c', 'd', 'e']

capitals = letters.select do |letter|
  letter.upcase
end

puts capitals

- good: mention that ruby considers everything except nil or false as falsey
- each element is output on a different line (since we're using puts)
- need to distinguish between puts and p

- how to change letters to uppercase?  change method to map

concept:
- collections : working with select
- map uses the return value since we're capturing that within the local variable 'capitals'


======= Example problem from study session



# Explain the following code, and identify the output. What underlying concepts does this demonstrate?

a = 'red'
b = 'green'

loop do
  c = b
  a = c
  break
end

puts a # => ?
puts b # => ?
puts c # => ?

- need to remember : 
- c = b and a = c still run even tho c can't be accessed outside the scope;  hence c gives an error
- loop is a ruby method : does! create a new scope 
- for / while aren't ruby methods - those are ruby syntax which do not create a new scope (in a for loop, c would be in the same scope - hence no error on line )

- definition of a block is a do..end immediately following a method invocation.  since loop is a method, it forms a block; while : isn't a method invocation: 



======= Example problem from study session

# Explain the following code, and identify the output. What underlying concepts does this demonstrate?

a = [1, 2]
b = [3, 4]

array = [a, b]
p array # => ?

a[0] = 0

p a # => ?
p array # => ?

concept:
- variable reference in a nested data structure

- element assignment (indexed assignment) is mutating array a, affects the 'array' var
- note that a[0] = 0 looks like assignment, it's mutating


=end
