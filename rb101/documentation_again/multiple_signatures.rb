a = %w(a b c d e)                     # ['a', 'b', 'c', 'd', 'e']
                                      # wrong => this line didn't output anything (although an array might have been returned)
# puts a.fetch(7)                       # IndexError
puts a.fetch(7, 'beats me')           # 'beats me'
puts a.fetch(7) { |index| index**2 }  # 49