def meth(arg1, arg2, arg3, &chunk)  # explicit block must always be last argument
  p arg1
  p arg2
  p arg3
  p chunk.call if chunk.class == Proc # guard clause makes explicit block 'optional'
end

chunk = proc { "17" }

meth(1, 2, 3) { "18" }
meth(1, 2, 3)