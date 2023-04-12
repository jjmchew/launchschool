class Cat
  # write code here
  def to_proc
    Proc.new { puts "meow" }
  end
end

cat = Cat.new

def feed
  yield
end

feed(&cat) # outputs "meow"