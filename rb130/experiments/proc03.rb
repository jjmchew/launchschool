def greeting(word)
  "#{name} says #{word}"
end

name = "Jim"
greeting_proc = proc { |word| "#{name} says #{word}" }
name = "Mike"

# p greeting("dude") # returns an error since `name` is not accessible to the method

p greeting_proc.call("yo")

name = "Joey"
p greeting_proc.call("heyo")


proc2 = method(:greeting).to_proc  # still gives error - `name` in `#greeting` was not previously initialized
proc2.call("whaddup")

=begin

CONCLUSIONS
- procs can be created in 2 different ways, but these ways are not equivalent

- methods are totally encapsulated - no access to local variables not explicitly passed in - which is no different for the proc
    - takes characteristics of methods - i.e., strict arity

- blocks can access local variables
    - in essence, it 'binds' a connection to accessible local variables and will use the value of that local variable when the proc is called
    - "order matters" - a proc can't bind to a local variable that hasn't yet been initialized (i.e., local variable must be initialized first)
    - lenient arity;  but requires guard clauses to prevent errors


=end