
proc1 = Proc.new { |var|  var + " type1" }

proc2 = proc { |var| var + " type2" }

proc3 = Proc.new do |var|
  var + " type3"
end

proc4 = proc do |var|
  var + " type4"
end

p proc1.call('Pizza')
p proc2.call('tomato')
p proc3.call('sauce')
p proc4.call('ice')

# [1, 2, 3].each do |num|
#   p num + 10
# end