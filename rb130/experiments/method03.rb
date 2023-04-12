def my_method(string, &chunk)
  proc { "you said #{string} and >#{chunk.call}<" }
end

var = my_method("hello") { "goodbye" }

p var.call