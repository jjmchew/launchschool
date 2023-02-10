def compute(arg="")
  if block_given?
    return yield(arg)
  else
    "Does not compute."
  end
end

p compute { 5 + 3 } == 8
p compute { 'a' + 'b' } == 'ab'
p compute == 'Does not compute.'
p compute(3) { |arg| arg + 3 } == 6
p compute { |arg| "this is: " + arg + "another" }
p compute(230) { |arg| arg / 10 } == 23