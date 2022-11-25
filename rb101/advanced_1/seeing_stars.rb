=begin
=end

def spaces(num)
  " " * num
end

def star(num)
  counter = num / 2 - 1
  # top of star
  counter.downto(0).each do |idx|
    puts spaces(counter-idx) + "*" + spaces(idx) + "*" + spaces(idx) + "*"
  end

  puts "*" * num
  
  # bottom of star
  0.upto(counter).each do |idx|
    puts spaces(counter-idx) + "*" + spaces(idx) + "*" + spaces(idx) + "*"
  end
end

star(13)