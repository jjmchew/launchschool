class Parent
  def greeting
    yield
  end
end

class Child < Parent
  def greeting
    super()
  end
end

Child.new.greeting { puts "hello" }