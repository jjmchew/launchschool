=begin
=> to solve actual factorial / enumerator problem
    start 8:47 pm 9:09 finish (22 mins)

=> to create an object class and corresponding test file
                  9:40 finish (53 mins total)

First attempt:
# ===== Note this version uses all INTERNAL iterators =====
# Hence, I couldn't replicate the behaviour of external iterators

class Factorial
  include Enumerable
  def each
    n = 0
    fac = 1
    loop do
      yield fac
      n += 1
      fac *= n
    end
  end
end

p Factorial.new.take(10)

factorial = Factorial.new
factorial.each_with_index do |num, idx|
  p "#{idx} #{num}"
  break if idx > 10
end

factorial.each_with_index do |num, idx|
  p "#{idx} #{num}"
  break if idx > 10
end

factorial.take(5)
factorial.take(5)

=end

class Factorial
  def initialize
    @factorial = Enumerator.new do |y|
      n = 0
      fac = 1
      loop do
        y << fac
        n += 1
        fac *= n
      end
    end
  end

  def next
    @factorial.next
  end

  def take(num)
    @factorial.take(num)
  end

  def rewind
    @factorial.rewind
  end
end

# factorial = Factorial.new
# 7.times { p factorial.next }
# puts

# 3.times { p factorial.next }

# factorial.rewind
# 3.times { p factorial.next }

# p factorial.take(10)
