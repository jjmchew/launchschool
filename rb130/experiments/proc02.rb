def emphasize(str)
  "**#{str}**"
end

# the below are equivalent
emphasize_proc1 = method(:emphasize).to_proc
emphasize_proc2 = proc { |str| "**#{str}**" }

# the below are equivalent
p ["a", "b", "c"].map(&emphasize_proc)
p ["a", "b", "c"].map(&method(:emphasize))

