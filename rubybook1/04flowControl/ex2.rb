def all_caps(arg)
  if arg.length > 10 then return arg.upcase
  else return arg
  end
end

puts all_caps("hello world")
puts all_caps("Joe Smith")


