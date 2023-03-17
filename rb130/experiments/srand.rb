class RandomNum
  attr_reader :num

  def initialize
    @num = rand(1..5)
  end
end

Kernel.srand 1000
fun = RandomNum.new
p fun.num