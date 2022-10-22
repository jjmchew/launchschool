require "pry"

array = [1,2,3]

array.map { |n| n + 1 }

p array

mapped_array = array.map { |n| n + 1 }

mapped_array.tap { |v| p v }

mapped_and_tapped = mapped_array.tap { |v| p 'hello' }

mapped_and_tapped

binding.pry

