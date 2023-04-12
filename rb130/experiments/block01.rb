name = "Jimmy"

def meth
  yield if block_given?
end

def meth2(chunk)
  # p chunk #chunk is a proc
  chunk.call if chunk.class == Proc # the `if` is a guard clause - ensure arg is 'callable'
end

meth do
  puts name + "1"
end

proc = proc do
  puts name + "2"
end

meth &proc  # must pass in a block, hence `&`
meth
# meth "pizza" # will fail - strict arity for methods

meth2 proc # alt method def requires a proc as an argument (assumed `call`)
meth2 "pizza"
meth2 4

