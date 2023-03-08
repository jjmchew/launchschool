class PerfectNumber
  def self.classify(num)
    raise StandardError.new("Please input a whole number greater than 0") if num <= 0
    sum = get_divisors(num).sum
    case 
    when sum > num then 'abundant'
    when sum < num then 'deficient'
    else            'perfect'
    end
  end

  class << self
    private

    def get_divisors(num)
      divisors = [1]
      (2..num/2).each { |n| divisors += [n, num / n] if num % n == 0 }
      divisors.uniq.sort
    end
  end

end