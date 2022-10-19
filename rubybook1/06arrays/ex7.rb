ary = "james".scan(/\w/)

ary.each_with_index { |el,i| puts "index #{i} : #{el}" }