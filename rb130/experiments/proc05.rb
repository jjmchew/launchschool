def expand(word)
  word.chars.join("  ")
end

# p expand("hello")

proc1 = method(:expand).to_proc
proc2 = proc { |word| word.chars.join("  ") unless word.nil? }

# proc1.call
p proc2.call("incredible")