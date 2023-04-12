def complicated_output(*array, output: $stdout)
  output.puts "Let me introduce:"
  array.each_with_index { |element, idx| output.puts " #{idx} >> #{element} << " }
  output.puts "========="
end

# complicated_output("Chris", "Pat", "Tyler")