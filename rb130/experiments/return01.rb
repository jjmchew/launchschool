
def my_method(string, &chunk)
  proc { |more| "you said #{string} and #{more}" }
end

var = my_method("stars")
p var.call("stripes")

# ===========
puts "================="


def my_method2(string, &chunk)
  proc { "you said #{string} >#{chunk.call}<" }
end

var2 = my_method2("stars") { "pizza" }

p var2.call




