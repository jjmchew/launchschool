class Clock
  MINS_PER_HOUR = 60
  MINS_PER_DAY = 60 * 24 # 1440

  def self.at(hr, min=0)
    hr = hr % 24
    if min >= 60
      min = min % 60
      hr += 1
    end
    mins = hr * MINS_PER_HOUR + min
    Clock.new(mins)
  end

  def initialize(mins)
    @mins = mins
  end

  def to_s
    hr, min = (@mins % MINS_PER_DAY).divmod(MINS_PER_HOUR)
    "#{hr < 10 ? "0"+hr.to_s : hr.to_s}:#{min < 10 ? "0"+min.to_s : min.to_s}"
  end

  def +(num)
    Clock.new(@mins + num)
  end

  def -(num)
    Clock.new(@mins - num)
  end

  def ==(other)
    self.to_s == other.to_s
  end
end

# p clock = Clock.at(0, 30) - 60
# p clock.to_s