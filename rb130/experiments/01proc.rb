def a_method(str)
  p "This is #{str}!!"
end

a_proc = method(:a_method).to_proc

# ["a", "b", "c"].each do |element|
#   a_proc.call(element)
# end

# ["a", "b", "c"].each { |element| a_proc.call(element) }

["a", "b", "c"].each(&method(:a_method))

["a", "b", "c"].map(&:capitalize).each { |element| p element }