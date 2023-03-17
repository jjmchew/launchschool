# tried to create an alternate implementation
# monkey-patched Array class to create an instance method for sorting

class Array

  def bubble_sort!
    loop do
      swapped = false
      1.upto(self.size - 1) do |index|
        next if block_given? && yield(self[index - 1], self[index])
        next if !block_given? && self[index - 1] <= self[index]

        self[index - 1], self[index] = self[index], self[index - 1]
        swapped = true
      end

      break unless swapped
    end
    self
  end

end

p [4, 3, 2, 6].bubble_sort!

# p [4, 3, 2, 6].min


array = [5, 3]
# bubble_sort!(array)
p array.bubble_sort! == [3, 5]

array = [5, 3, 7]
# bubble_sort!(array) { |first, second| first >= second }
p array.bubble_sort! { |first, second| first >= second } == [7, 5, 3]

array = [6, 2, 7, 1, 4]
# bubble_sort!(array)
p array.bubble_sort! == [1, 2, 4, 6, 7]

array = [6, 12, 27, 22, 14]
# bubble_sort!(array) { |first, second| (first % 7) <= (second % 7) }
p array.bubble_sort! { |first, second| (first % 7) <= (second % 7) } == [14, 22, 12, 6, 27]

array = %w(sue Pete alice Tyler rachel Kim bonnie)
# bubble_sort!(array)
p array.bubble_sort! == %w(Kim Pete Tyler alice bonnie rachel sue)

array = %w(sue Pete alice Tyler rachel Kim bonnie)
# bubble_sort!(array) { |first, second| first.downcase <= second.downcase }
p array.bubble_sort! { |first, second| first.downcase <= second.downcase } == %w(alice bonnie Kim Pete rachel sue Tyler)