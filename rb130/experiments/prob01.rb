def complicated_output(*array)
  puts "Let me introduce:"
  array.each_with_index { |element, idx| puts " #{idx} >> #{element} << " }
  puts "========="
end

complicated_output("Chris", "Pat", "Tyler")