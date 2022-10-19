# merge returns a new hash
# merge! overwrites the old hash

h1 = { a: 1, b: 2}
h2 = { c: 3, d: 4}
puts "initial values for h1, h2"
puts "h1: #{h1}"
puts "h2: #{h2}"

puts h1.merge(h2)
puts "after h1.merge(h2) :  no change to h1"
puts "h1: #{h1}"
puts "h2: #{h2}"

puts h1.merge!(h2)
puts "after h1.merge!(h2) : h1 mutated"
puts "h1: #{h1}"
puts "h2: #{h2}"
