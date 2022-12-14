module Taste
  def flavor(flavor)
    puts "#{flavor}"
  end
end

class Orange
  include Taste
end

class HotSauce
  include Taste
end

p Orange.ancestors

# can get the lookup chain by calling `.ancestors` on a CLASS

# Orange lookup chain:
  # Orange
  # Taste
  # Object
  # Kernel
  # BasicObject

# HotSauce lookup chain:
  # HotSauce
  # Taste
  # Object
  # Kernel
  # BasicObject