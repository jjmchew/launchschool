class Mass
  # "base" unit is "g" (float)
  UNITS = ["g", "oz", "lb", "kg", "mg"]
  OZ = 0.035274
  LB = 0.0022046226
  KG = 0.001
  MG = 1000

  def initialize(amount, unit)
    raise ArgumentError unless UNITS.include?(unit)
    assign_values(amount, unit)
  end

  def to_s
    format_number("%.0f" % [@amount]) + " " + @unit
  end

  def g
    @amount.round(1)
  end

  def oz
    to_other("oz").round(1)
  end

  def lb
    to_other("lb").round(2)
  end

  def kg
    to_other("kg").round(2)
  end

  def mg
    to_other("mg").round(1)
  end

  def +(other)
    Mass.new(@amount + other.amount, "g")
  end

  def /(other)
    Mass.new(@amount / other.amount, "g")
  end
  
  def *(other)
    Mass.new(@amount * other.amount, "g")
  end

  def -(other)
    Mass.new(@amount - other.amount, "g")
  end

  protected
  attr_reader :amount

  private

  def assign_values(amount, unit)
    @amount = from_other(unit, amount)
    @unit = "g"
  end

  def to_other(unit)
    case unit
    when "oz" then @amount * OZ
    when "lb" then @amount * LB
    when "kg" then @amount * KG
    when "mg" then @amount * MG
    end
  end

  def from_other(unit, amt)
    case unit
    when "g"  then amt.to_f
    when "oz" then amt.to_f / OZ
    when "lb" then amt.to_f / LB
    when "kg" then amt.to_f / KG
    when "mg" then amt.to_f / MG
    end
  end

  def format_number(number)
    number.to_s.reverse.gsub(/(\d{3})(?=\d)/, '\\1,').reverse
  end

end

# apple = Mass.new(2, "oz")
# p apple.g
# p apple.oz
# p apple.lb
# p apple.kg
# p apple.mg

# puts apple

# num = Mass.new(20, "oz")
# p num.class

# mass1 = Mass.new(20, "oz")
# mass2 = Mass.new(19, "g")

# p mass1 + mass2
# p mass1 / mass2
# p mass1 - mass2
# p mass1 * mass2