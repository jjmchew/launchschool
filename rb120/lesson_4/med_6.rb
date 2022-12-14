class Computer
  attr_accessor :template

  def create_template
    @template = "template 14231"
  end

  def show_template
    template
  end
end

# VS

class Computer
  attr_accessor :template

  def create_template
    @template = "template 14231"
  end

  def show_template
    self.template
  end
end

# no difference.  Both use the getter method defined through attr_*, but syntax is a bit different.  No need to use 'self.' for the getter method.